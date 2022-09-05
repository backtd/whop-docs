# Authorization Difference

## What is the difference between the bearer token and the client ID?

When making calls from your backend and authenticating with bearer token, you should pass a header to your request like:

```js
$.ajax({
   url: 'https://api.whop.com/api/v1/licenses/ABC-123',
   type: 'GET',
   contentType: 'application/json'
   headers: {
      'Authorization': 'Bearer <Bearer token>'
   },
   success: function (result) {
       // If successful, what to do with the response payload.
       console.log(result);
   },
   error: function (error) {
       // If error, what to do with the error payload.
       console.log(error);
   }
});
```

When making calls from the frontend and authenticating with your client ID, you should pass a header to your request like:

```js
$.ajax({
   url: 'https://api.whop.com/api/v1/licenses/ABC-123',
   type: 'GET',
   contentType: 'application/json'
   headers: {
      'Authorization': '<clientID>'
   },
   success: function (result) {
       // If successful, what to do with the response payload.
       console.log(result);
   },
   error: function (error) {
       // If error, what to do with the error payload.
       console.log(error);
   }
});
```