---
sidebar_position: 6
---

# Express Routes

We have now setup our MongoDB database, our schemas and our sessions, now we will setup our routes.

## Routes

We have three files in our ``routes`` folder, ``admin.js``, ``auth.js`` and ``dashboard.js``.

### admin.js

The ``admin.js`` file is used to setup our admin routes.

Let's import our modules.

```js title="routes/admin.js"
const express = require("express")
const router = express.Router()
const Whop = require('../functions/whop')
```

Now that we have imported our modules we need 2 middlewares to check if the user is logged in and if the user is an admin.

```js title="routes/admin.js"
...
const checkLoggedIn = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth/login')
    } else {
        next()
    }
}

const checkisAdmin = (req, res, next) => {
    if(req.user.admin) {
        next()
    } else {
        res.redirect('/dashboard')
    }
}
```

Great! In the administrator routes we will have 5 routes:

- ``/licenses`` This will show all the licenses that have been created.
- ``/plans`` This will show all the plans that have been created.
- ``/passess`` This will show all the passes that have been created.
- ``/purchaseLinks`` This will be the route to create our purchase links.
- ``/api/purchaseLink`` This will be our ``POST`` route for the creation of purchase links.

#### /licenses

Our licneses route will use our Whop functions to get the licenses.

```js title="routes/admin.js"
...
router.get('/licenses', checkLoggedIn, checkisAdmin, async (req, res) => {
    var licenses = await Whop.getLicenses()

    res.render('licenses', {
        licenses,
        user: req.user
    })
})
```

#### /plans

Our plans route will use our Whop functions to get the plans.

```js title="routes/admin.js"
...
router.get('/plans', checkLoggedIn, checkisAdmin, async (req, res) => {
    var plans = await Whop.getPlans()

    res.render('plans', {
        plans,
        user: req.user
    })
})
```

#### /passess

Our passess route will use our Whop functions to get the passess.

```js title="routes/admin.js"
...
router.get('/passes', checkLoggedIn, checkisAdmin, async (req, res) => {
    var passes = await Whop.getAccessPasses()

    res.render('passes', {
        passes,
        user: req.user
    })
})
```

#### /purchaseLinks

Our purchase links route will serve the admin with the create form.

```js title="routes/admin.js"
...
router.get('/purchaseLinks', checkLoggedIn, checkisAdmin, async (req, res) => {
    res.render('purchaseLinks', {
        user: req.user
    })
})
```

#### /api/purchaseLinks

Our ``POST`` purchase links route will create the purchase link.

```js title="routes/admin.js"
...
router.post('/api/purchaseLinks', checkLoggedIn, express.json(), async (req, res) => {
    var purchaseLink = await Whop.createPurchaseLink(req.body.plan, req.body.stock, req.body.password)

    res.json({ link: purchaseLink })
})
```

Now we will export our router.

```js title="routes/admin.js"
...
module.exports = router
```

### auth.js

The ``auth.js`` file will use ``PassportJs`` to authentication and logout the users.

Let's import our modules.

```js title="routes/auth.js"
const express = require("express")
const router = express.Router()
const passport = require("passport")
```

We will create a simple function to check if the user is logged in or not.

```js title="routes/auth.js"
...
const checkLoggedIn = (req, res, next) => {
    if (req.user) {
        res.redirect('/dashboard')
    } else {
        next()
    }
}
```

Great! In the auth routes we will have 4 routes:

- ``/auth/login`` This will be our route to serve the login page.
- ``/auth/discord`` This will be our route to redirect to discord to authenticate the users.
-  ``/auth/discord/callback`` This will be our callback url from discord to authenticate the users.
- ``/auth/logout`` This will be our route to logout the users.

#### /auth/login

Our login route will serve the login page.

```js title="routes/auth.js"
...
router.get('/auth/login', checkLoggedIn, (req, res) => {
    res.render('login')
})
```

#### /auth/discord

Our discord route will redirect the user to discord to authenticate.

```js title="routes/auth.js"
...
router.get('/auth/discord', passport.authenticate('discord'))
```

#### /auth/discord/callback

Our discord callback route will authenticate the user.

```js title="routes/auth.js"
...
router.get('/auth/discord/callback', passport.authenticate('discord', {
    failureRedirect: '/auth/login'
}), (req, res) => {
    res.redirect('/dashboard')
})
```

#### /auth/logout

Our logout route will logout the user.

```js title="routes/auth.js"
...
router.get('/auth/logout', (req, res) => {
    req.logout(function (err) {
        if (err) { return next(err) }
        req.session = null
        res.redirect('/auth/login')
    })
})
```

Now we will export our router.

```js title="routes/auth.js"
...
module.exports = router
```

### dashboard.js

The ``dashboard.js`` file will serve the dashboard page to the user.

Let's import our modules.

```js title="routes/dashboard.js"
const express = require("express")
const router = express.Router()
const { getLicensesByDiscordId, resetLicense } = require('../functions/whop')
```

We will create a simple function to check if the user is logged in or not.

```js title="routes/dashboard.js"
...
const checkLoggedIn = (req, res, next) => {
    if (!req.user) {
        res.redirect('/auth/login')
    } else {
        next()
    }
}
```

Great! In the dashboard routes we will have 2 routes:

- ``/dashboard`` This will be our route to serve the dashboard page.
- ``/resetLicense`` This will be our ``POST`` route to create the access pass.

#### /dashboard

Our dashboard route will serve the dashboard page and use the Whop functions to get the user licenses.

```js title="routes/dashboard.js"
...
router.get('/dashboard', checkLoggedIn, async (req, res) => {
    var licenses = await getLicensesByDiscordId(req.user.discord_id)

    res.render('index', {
        licenses,
        user: req.user
    })
})
```

#### /resetLicense

Our reset license route will use ``POST`` method and use the Whop functions to reset the user license

```js title="routes/dashboard.js"
...
router.post('/resetLicense', checkLoggedIn, express.json(), async (req, res) => {
    var reset = await resetLicense(req.body.license)

    res.json({ message: reset ? 'Reset Success' : 'Reset Failed' })
})
```

Now we will export our router.

```js title="routes/dashboard.js"
...
module.exports = router
```