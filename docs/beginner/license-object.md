---
sidebar_position: 2
---

# License Object

Now that we have setup our enviroment to work with the Whop API, let's get started by understanding the licesne object that is returned.

Here you can see the object that is being returned to you:

```json
{
  "id": 119209,
  "email": "steven@gmail.com",
  "key": "P6FF228-C37EBCF5-1D2648W",
  "rental_key": "6FF228-C37EBCF5-1D2648W",
  "rented": false,
  "rental_end": "2021-11-30",
  "valid": true,
  "key_status": "approved",
  "subscription_status": "completed",
  "quantity": 1,
  "banned": false,
  "metadata": {
    "hwid": "999-4399942",
    "hardwareName": "DESKTOP-99DHOJ7"
  },
  "next_renewal_date": "2021-07-19T03:53:03.092+03:00",
  "renewal_period": 30,
  "created_at": "2021-07-19T03:53:03.092+03:00",
  "discord": {
    "username": "Steven#4585",
    "discord_account_id": "856652766625267712",
    "image_url": "https://cdn.discordapp.com/avatars/560559976620490773/1dbe8d8b204c266831c308e8effa9186"
  },
  "wallet_address": "0x73bceb1cd57c711feac4224d062b0f6ff338501e",
  "twitter": {
    "username": "stevoschwartz",
    "twitter_profile_pic": "https://pbs.twimg.com/profile_images/1368540229410422785/wIH7OIIL_400x400.jpg",
    "followers": 128,
    "following": 110,
    "twitter_account_id": "12999249"
  },
  "plan": {
    "id": 390,
    "title": "OG Renewal",
    "initial_price": 40,
    "renewal_price": 40,
    "billing_period": 30,
    "license_type": "one_time"
  },
  "custom_fields_responses": {
    "How old are you?": "25"
  }
}
```

## License Object Properties

As you can see there is so many data that is being returned to you, let's break down the main parts of the object.

### key

This is the license key that the user obtained.

### valid

This is a boolean value that tells you if the license is valid or not.

### key_status

This is the status of the license, it can be ``approved``, ``terminated``, ``expired``.

### banned

This is a boolean value that tells you if the license is banned or not.

### metadata

This is the metadata that the user entered when purchasing the license.

### next_renewal_date

This is the date that the license will be renewed.

### renewal_period

This is the period that the license will be renewed.

### created_at

This is the date that the license was created.

### discord

This is the discord information of the user.

## Conclusion

Awesome! Now that you have understood the license object, let's show you how to validate the license key in the next tutorial.