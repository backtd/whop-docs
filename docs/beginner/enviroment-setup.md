---
sidebar_position: 1
---

# Enviroment Setup

First we will need to create our main JS file, we will call it ``index.js``.

```js title="index.js"
const fetch = require('node-fetch');
// This is the whop API URL
var url = 'https://api.whop.com/api/v1';
// This is your Bearer token
var token = '';
```

:::danger Be aware

Having the token hard coded is highly risky and we recommend saving it inside your enviroment ``.env`` file. Check **[this article](https://www.codementor.io/@parthibakumarmurugesan/what-is-env-how-to-set-up-and-run-a-env-file-in-node-1pnyxw9yxj)** to understand how ``.env`` works in **NodeJS** 

:::

Now we will need to create a function to make our requests, we will call it ``request``.

```js title="index.js"
...
function request(method, url, body) {
    return fetch(url, {
        method: method,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        },
        body: JSON.stringify(body)
    }).then(res => res.json());
}
```

Now we will need to create a function to get the license, we will call it ``getLicense``.

```js title="index.js"
...
function getLicense(license) {
    return request('GET', url + '/licenses/' + license, null);
}
```

After you have completed the setup of your enviroment, you can now get the license information by calling the ``getLicense`` function.

```js title="index.js"
...
getLicense('ABC-123').then(res => {
    console.log(res);
});
```

:::tip

You can also use the ``.catch`` function to handle errors.

:::

```js title="index.js"
...
getLicense('ABC-123').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
```

Awesome! Now let's move on to the next section to understand the license object and how to authenticate your users.