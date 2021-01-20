# Getting Started

## Prerequisites

Welcome to WhpptJS, before you get started you're going to need a few things.

- Node - at least v10.13 We recommend you have the latest LTS version installed.
- npm/yarn.
- MongoDB 4 (Less than v4 is currently untested).
- A text editor, we recommend [VS Code](https://code.visualstudio.com/) with the 
  [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) extension 
  or [WebStorm](https://www.jetbrains.com/webstorm/).

## Installation

Creating a new Whppt App can be a bit of work, so to help you get started we've created a tool to quickly 
spin up a new Whppt app.

```shell
npx create-whppt-app <app-name>
```

Where `<app-name>` is the name of the directory that will be created.

Once run, you will be prompted for a few things, very similar to the prompts found when creating a 
new NuxtJS app.

## Store (Vuex)

- A vuex store is required, initialise store.
- List available modules, link to /guide/store

## The .env file

- APP_KEY
- MONGO_URL
- MONGO_DB
- MONGO_DB_PUB
- BASE_URL
- BASE_API_URL
- BASE_IMAGE_URL
- DRAFT
- DEBUG
- See /config for all available env variables

## Creating a user
- run `create-user` script in package.json or commandline `gen-root-user`
- Fill in prompts (username, email, password, password_confirm)
- Login

## Setting up a Domain
- Open config window
- Create a domain
- Making it active will add localhost as a domain for development
