# Installation

## Using create-whppt-app

Creating a new Whppt App can be a bit of work, so to help you get started we've created a tool to quickly
spin up a new Whppt app.

```shell
npx create-whppt-app <project-name>
```
or 
```shell
yarn create whppt-app <project-name>
```

Where `<project-name>` is the name of the directory that will be created.

Once run, you will be prompted for a few things, very similar to the prompts found when creating a
new NuxtJS app.

- TODO: explain some of the options
- TODO: check if we can run cmds for create user and add a domain / See creating a user in api

At this point you can see the 404 page at the --url--

## Manual Installation

Creating a WhpptJS app is quite similar to manually setting up a Nuxt app as seen [here](https://nuxtjs.org/docs/2.x/get-started/installation#manual-installation).

We will use the terminal to get things done here, however feel free to use your text editor to generate the folders/files necessary.

### Set up your project

Create an empty directory with the name of your project and navigate into it:

```shell
mkdir <project-name>
cd <project-name>
```

```shell
touch package.json
```

```json
{
  "name": "<project-name>",
  "scripts": {
    "dev": "nuxt",
    "build": "nuxt build",
    "generate": "nuxt generate",
    "start": "nuxt start"
  }
}
```

::: tip
Don't forget to replace `<project-name>` with the name of your project.
:::

### Install Nuxt and WhpptJS

Now that your `package.json` is set up we can install Nuxt and WhpptJS with whichever package manager you chose, to the project.

```shell
Yarn add nuxt @whppt/nuxt @whppt/api-express
```
or
```shell
npm install nuxt @whppt/nuxt @whppt/api-express
```

The above will add 3 dependencies to your `package.json`. All 3 packages are required to successfully build a WhpptJS app.

### Additional steps

- making a page
- express setup
- make sure you have a store



## Next steps

- [Create a user](/api/users/cli.md#creating-a-user)

