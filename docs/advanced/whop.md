---
sidebar_position: 4
---

# Whop Functions

Now that we have built our entry points lets work on creating our Whop Functions for the panel.

First let's require our ``node-fetch`` module.

```js title="functions/whop.js"
const fetch = require('node-fetch')
```

## Promises

Awesome! Now we will need to create 6 different promises which will interact with our Whop API.

### getLicensesByDiscordId(discord_id)

Let's create our licneses function which will get all the licenses by the user Discord ID.

```js title="functions/whop.js"
...
const getLicensesByDiscordId = (discord_id) => new Promise(async (resolve, reject) => {
    try {
        const response = await fetch(`https://api.whop.com/api/v1/licenses?discord_account_id=${discord_id}`, {
            headers: {
                'Authorization': 'Bearer ' + process.env.WHOP_TOKEN
            }
        })

        const body = await response.json()

        var arr = []

        var arr = body.users

        resolve(arr)
    } catch (error) {
        console.log(error)
        resolve([])
    }
})
```

Let's explain what is happening here.

We are using the Whop API to grab all the licenses of the user by its Discord ID, we are doing so by creating a ``Promise`` with a ``try catch`` to handle any error that occurs.

### getLicenses()

Let's create our licenses function to grab all licenses.

```js title="functions/whop.js"
...
const getLicenses = () => new Promise(async (resolve, reject) => {
    try {
        const response = await fetch(`https://api.whop.com/api/v1/licenses`, {
            headers: {
                'Authorization': 'Bearer ' + process.env.WHOP_TOKEN
            }
        })

        const body = await response.json()

        var arr = body.users

        resolve(arr)
    } catch (error) {
        console.log(error)
        resolve([])
    }
})
```

### resetLicense(license)

Let's create our reset license function.

```js title="functions/whop.js"
...
const resetLicense = (license) => new Promise(async (resolve, reject) => {
    try {
        const response = await fetch(`https://api.whop.com/api/v1//licenses/${license}/reset`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + process.env.WHOP_TOKEN
            },
            json: {
                metadata: {}
            }
        })

        const body = await response.json()

        if(body.success) {
            resolve(true)
        } else {
            resolve(false)
        }
    } catch (error) {
        console.log(error)
        resolve([])
    }
})
```

The reset function uses ``POST`` method with the ``license`` in the parameters and the ``metadata`` as an empty object to reset the license HWID.

### getPlans()

Let's create our plans function to return our made plans.

```js title="functions/whop.js"
...
const getPlans = () => new Promise(async (resolve, reject) => {
    try {
        const response = await fetch('https://api.whop.com/api/v1/plans', {
            headers: {
                'Authorization': 'Bearer ' + process.env.WHOP_TOKEN
            }
        })

        const body = await response.json()

        var arr = body.plans

        resolve(arr)
    } catch (error) {
        console.log(error)
        resolve([])
    }
})
```

### getAccessPasses()

Let's create our access passes function to return our made passes.

```js title="functions/whop.js"
...
const getAccessPasses = () => new Promise(async (resolve, reject) => {
    try {
        const response = await fetch('https://api.whop.com/api/v1/access_passes', {
            headers: {
                'Authorization': 'Bearer ' + process.env.WHOP_TOKEN
            }
        })

        const body = await response.json()

        var arr = body.access_passes

        resolve(arr)
    } catch (error) {
        console.log(error)
        resolve([])
    }
})
```

### createPurchaseLink(plan, stock, password)

Let's create our purchase link creation function which takes in the Plan ID, Stock, and Password.

```js title="functions/whop.js"
...
const createPurchaseLink = (plan, stock, password) => new Promise(async (resolve, reject) => {
    try {
        const response = await fetch(`https://api.whop.com/api/v1/plans/${plan}/create_link?stock=${stock}${password.length > 0 ? `&password=${password}` : ''}`, {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + process.env.WHOP_TOKEN
            }
        })

        const body = await response.json()

        if(body.success) {
            resolve(body.release_link.direct_link)
        } else {
            resolve(body.message)
        }
    } catch (error) {
        console.log(error)
        resolve('Invalid Request Body')
    }
})
```

The create purchase link functions uses ``POST`` method and passes the ``Plan ID``, ``Stock``, and ``Password`` in the paramenets and returns the release link.

## Exporting Functions

Now to make the functions accessible we will need to export them

```js title="functions/whop.js"
...
module.exports = {
    getLicensesByDiscordId,
    getLicenses,
    resetLicense,
    getPlans,
    getAccessPasses,
    createPurchaseLink
}
```

Awesome! You have successfully setup our Whop Functions which will work alongside the panel.