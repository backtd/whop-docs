---
sidebar_position: 2
---

# Folder Structure

After we have initialized our project and installed our modules, we will need to create our folder structure.

## Creating our folders

As you can see below we have created our folders and files.

```bash title="our-awesome-project"
├───functions
│   └───whop.js
│
├───modals
│   └───users.js
│
├───passport
│   └───index.js
│
├───routes
│   ├───admin.js
│   ├───auth.js
│   └───dashboard.js
│
├───views
├───.env
├───index.js
├───package-lock.json
└───package.json
```

As you can see we have created our folders and files, let's explain what each folder and file does.

### Functions

The ``functions`` folder is where we will store our functions, in this case we will store our ``whop.js`` file which contains our Whop API functions.

### Modals

The ``modals`` folder is where we will store out Mongoose Schemas, in this case we will store our ``users.js`` file for our users schema.

### Passport

The ``passport`` folder is our middleware to authenticate users through Discord, in this case we will store our ``index.js`` file which will include the middleware.

### Routes

The ``routes`` folder is our routes that serves the users the panel pages, in this case we will store our ``admin.js, auth.js, dashboard.js`` files which we will write our routes in.

### Views

The ``views`` filder is our frontend/panel, we will get into it later in this tutorial.

### .env

The ``.env`` file is our enviroment file which will hold our secret variables.

### index.js

The ``index.js`` file is our main entry point which will start up the system

## Conclusion

Awesome! Now that you have structured the system files let's start with our entry point.