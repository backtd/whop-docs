---
sidebar_position: 3
---

# Validating the License Key

There are two ways to validate the license key, the first one is to use the ``validate`` method from the API and the second one is to validate from the license object itself using the ``valid`` property.

## Using the API

To validate the license key using the API you will need to make a request to the ``/validate`` endpoint and pass the license key as a parameter.

```js title="index.js"
...
function validate(license) {
    return request('POST', url + '/licenses/' + license + '/validate', null);
}
```

After you have completed the setup of your function, you can now validate the license key by calling the ``validate`` function.

```js title="index.js"
...
validate('ABC-123').then(res => {
    console.log(res.valid);
});
```

## Using the License Object

To validate the license key using the license object you will need to get the license information first and then check the ``valid`` property.

```js title="index.js"
...
getLicense('ABC-123').then(res => {
    console.log(res.valid);
});
```

:::tip

You can also use the ``.catch`` function to handle errors.

:::

```js title="index.js"
...
getLicense('ABC-123').then(res => {
    console.log(res.valid);
}).catch(err => {
    console.log(err);
});
```

Now that you know how to validate the license, let's move on to the next step and learn how to check and add the license metadata for the HWID.