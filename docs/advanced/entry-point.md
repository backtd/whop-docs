---
sidebar_position: 3
---

# Entry Point

Let's setup our entry point for our project.

## index.js

The ``index.js`` file will be our main file which will start and run our project.

First we will need to require our modules and files and initialize our express app.

```js title="index.js"
require('dotenv').config()
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const passport = require("passport")
const passportSetup = require('./passport')
const auth = require('./routes/auth')
const dash = require('./routes/dashboard')
const admin = require('./routes/admin')
const path = require('path')

const app = express()
``` 

Then we will need to connect to our MongoDB database.

```js title="index.js"
...
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => console.log('MongoDB connected'))
```

Let's stop for a second and explain what we did here.

We first required our ``mongoose`` module and then we connected to our MongoDB database using the ``.connect()`` method.

We then created a variable called ``db`` which is our database connection.

We then used the ``.on()`` method to listen for any errors and if there are any errors we will log them to the console.

We then used the ``.once()`` method to listen for the ``open`` event and if the event is triggered we will log ``MongoDB connected`` to the console.

Now let's continue.

We will need to setup our express app.

```js title="index.js"
...
app.use(session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'));
app.use(express.static(path.join(__dirname, '/views')))

app.use(auth)
app.use(dash)
app.use(admin)

app.get('*', (req, res) => {
    res.redirect('/auth/login')
})

app.listen(process.env.PORT, () => console.log(`Server started on port ${process.env.PORT}`))
```

Let's stop for a second and explain what we did here.

We first required our ``express`` module and then we created a variable called ``app`` which is our express app.

We then used the ``.use()`` method to use our ``session`` middleware which will be used to store our users sessions.

We then used the ``.use()`` method to use our ``passport`` middleware which will be used to authenticate our users.

We then used the ``.set()`` method to set our view engine to ``ejs``.

We then used the ``.set()`` method to set our views directory to ``/views``.

We then used the ``.use()`` method to use our ``express.static()`` middleware which will be used to serve our static files.

We then used the ``.use()`` method to use our ``auth`` router.

We then used the ``.use()`` method to use our ``dash`` router.

We then used the ``.use()`` method to use our ``admin`` router.

We then used the ``.get()`` method to listen for any ``GET`` requests to ``*`` and if the request is triggered we will redirect the user to ``/auth/login``.

We then used the ``.listen()`` method to listen for any requests on our port and if the request is triggered we will log ``Server started on port ${process.env.PORT}`` to the console.

Now let's continue.

We will need to create our ``.env`` file.

## .env

The ``.env`` file will be used to store our environment variables.

```env title=".env"
MONGO_URI=mongodb://localhost:27017/whop
PORT=80
SECRET=YourCookieSecretMakeSureToHaveItSomethingUnrecognized
CLIENT_SECRET=
CLIENT_ID=
REDIRECT_URI=http://localhost/auth/discord/callback
WHOP_TOKEN=
```

Let's explain what each variable means.

``MONGO_URI`` This is our MongoDB connection URL, you may use one from MongoDB Atlas or Simply follow the **[Enviroment Setup Guide](./setup.md)** to have your MongoDB installed on your machine.

``PORT`` This is your express application port that it listens to.

``SECRET`` This is your **Cookie Secret** that will be used for the Express Session, make sure it is something random and isn't easily gussed.

``CLIENT_SECRET`` This is your Client Secret that you obtained from the discord developers page by following the **[Enviroment Setup Guide](./setup.md)**.

``CLIENT_ID`` This is your Client ID that you obtained from the discord developers page by following the **[Enviroment Setup Guide](./setup.md)**.

``REDIRECT_URI`` This is your Callback URL which we have setup in the discord developers page by following the **[Enviroment Setup Guide](./setup.md)**.

``WHOP_TOKEN`` This is your Whop Bearer Token.