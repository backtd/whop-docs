---
sidebar_position: 5
---

# User Schema

Now that we have setup our MongoDB database, let's create our User Schema.

```js title="modals/users.js"
const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    username: String,
    email: String,
    discord_id: String,
    image_url: String,
    admin: {
        type: Boolean,
        default: false
    }
})

module.exports = User = model('users', UserSchema)
```

That's it! That is all you have to do to build your MongoDB database.