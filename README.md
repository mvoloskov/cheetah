# Cheetah

- You have to be authorised to do anything
- App passes req and res to the `controller`. It fetches the data via `model` and responds with its `view`

# Features

- Sign up (credentials, report)
- Sign in (credentials, token)
- Create (query, report)
- Read (query, data)
- Update (query, report)
- Delete (query, report)

# API

## Create

    POST /
    {
        data: Object
    }

## Read

    GET /
    {
        [id: String]
    }

## Update

    PUT /
    {
        id: String,
        data: Object
    }

## Delete

    DELETE /
    {
        id: String
    }
