---
sidebar_position: 6
---

# Passport Setup

Now that we have setup our schemas and our sessions we will go into the core of authentication, ``PassportJs``.

We will first import our modules.

```js title="passport/index.js"
const passport = require('passport')
const DiscordStrategy = require('passport-discord')
const User = require('../modals/users')
```

Now passport uses two different methods to authenticate users, ``serializeUser`` and ``deserializeUser``.

## serializeUser

The ``serializeUser`` method is used to store the user in the session, this is done by the ``_id`` of the user.

```js title="passport/index.js"
...
passport.serializeUser((user, done) => {
    done(null, user._id)
})
```

## deserializeUser

The ``deserializeUser`` method is used to grab the user from the session, this is done by the ``_id`` of the user.

```js title="passport/index.js"
...
passport.deserializeUser((id, done) => {
    User.findById(id, (err, res) => {
        done(err, res)
    })
})
```

Now that we have setup our ``serializeUser`` and ``deserializeUser`` methods we will now setup our ``DiscordStrategy``.

## DiscordStrategy

The ``DiscordStrategy`` is used to authenticate users with Discord.

Before we setup our ``DiscordStrategy`` we will need to create a function called ``rNum`` which will generate a random number, this is used to generate a random avatar if the user does not have one.

```js title="passport/index.js"
...
function rNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
```

Now we will setup our ``DiscordStrategy``.

```js title="passport/index.js"
...
var scopes = ['identify', 'email', 'guilds', 'guilds.join']

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.REDIRECT_URI,
    scope: scopes
}, async (accessToken, refreshToken, profile, cb) => {
    var user = await User.findOne({ discord_id: profile.id })
    var image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png?size=1024`
    if(!profile.avatar) {
        image_url = `https://cdn.discordapp.com/embed/avatars/${rNum(0, 5)}.png`
    }
    var username = profile.username + '#' + profile.discriminator
    if(user) {
        User.updateOne({ discord_id: profile.id }, { $set: { image_url: image_url, username: username } }, (err, res) => {
            return cb(null, user)
        })
    } else {
        new User({
            username: username,
            email: profile.email,
            discord_id: profile.id,
            image_url: image_url,
        }).save().then(user => {
            return cb(null, user)
        })
    }
}))
```

And finally we will export our ``passport`` module.

```js title="passport/index.js"
...
module.exports = passport
```