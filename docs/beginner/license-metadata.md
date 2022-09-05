---
sidebar_position: 4
---

# License MetaData

The license metadata is a JSON object that can be used to store any information you want, this can be used to store the HWID of the device that the license is being used on, the IP address, the location, etc.

## Adding the License MetaData

To add the license metadata you will need to make a request to the ``PATCH`` HTTP method and pass the metadata as a parameter.

```js title="index.js"
...
function addMetadata(license, metadata) {
    return request('PATCH', url + '/licenses/' + license, {
        metadata: metadata
    });
}
```

After you have completed the setup of your function, you can now add the license metadata by calling the ``addMetadata`` function.

```js title="index.js"
...
addMetadata('ABC-123', {
    hwid: '1234567890'
}).then(res => {
    console.log(res);
});
```

## Checking the License MetaData

To check the license metadata let's use the ``getLicense`` function we created earlier.

```js title="index.js"
...
getLicense('ABC-123').then(res => {
    console.log(res.metadata);
});
```

Now with this you can check the metadata of the license and add the metadata of the HWID of the device that the license is being used on if it doesn't exist.

```js title="index.js"
...
getLicense('ABC-123').then(res => {
    if (!res.metadata.hwid) {
        addMetadata('ABC-123', {
            hwid: '1234567890'
        }).then(res => {
            console.log(res);
        });
    }
});
```

Now that you know how to check and add the license metadata, let's see how to reset the license metadata.

## Resetting the License MetaData

To reset the license metadata you will need to make a request to the ``/reset`` endpoint and pass the metadata as a parameter.

```js title="index.js"
...
function resetMetadata(license) {
    return request('POST', url + '/licenses/' + license + '/reset', {
        metadata: {}
    });
}
```

After you have completed the setup of your function, you can now reset the license metadata by calling the ``resetMetadata`` function.

```js title="index.js"
...
resetMetadata('ABC-123').then(res => {
    console.log(res);
});
```