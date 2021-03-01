# Installation

## Using create-whppt-app

Creating a new Whppt App can be a bit of work, so to help you get started we've created a tool to quickly
spin up a new Whppt app.

<CodeGroup>

<code-block title="Yarn">

```shell
yarn create whppt-app <project-name>
```

</code-block>

<code-block title="npx">

```shell
npx create-whppt-app <project-name>
```

</code-block>

<code-block title="npm">

```shell
npm init whppt-app <project-name>
```

</code-block>

</CodeGroup>

Where `<project-name>` is the name of the directory that will be created.

Once run, you will be prompted for a few things, very similar to the prompts found when creating a
new Nuxt app.

- TODO: explain some of the options
- TODO: check if we can run cmds for create user and add a domain / See creating a user in api

When, the new project has been created there are a few things we need to make sure are set up before we continue,
First up, if you look in the root directory of the new project you will find a `.env` file. Nuxt doesn't usually
come with a `.env` file out of the box but Whppt does. Inside the `.env` file there will be multiple keys value pairs
set where the value is empty. We're going to need to configure some of there before we can move on.

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

Don't forget to replace `project-name` with the name of your project.

:::

### Install Nuxt and WhpptJS

Now that your `package.json` is set up we can install Nuxt and WhpptJS with whichever package manager you chose, to the project.

<CodeGroup>

<CodeBlock title="Yarn">

```shell
yarn add nuxt @whppt/nuxt @whppt/api-express
```

</CodeBlock>

<CodeBlock title="npm">

```shell
npm install nuxt @whppt/nuxt @whppt/api-express
```

</CodeBlock>

</CodeGroup>

The above will add 3 dependencies to your `package.json`. All 3 packages are required to successfully build a WhpptJS app.

### Additional steps

- making a page
- express setup
- make sure you have a store

## Next steps

- [Creating a domain](/guide/gettingStarted/domains)
- <RouterLink to="/api/users/cli.html#creating-a-user">Create a user</RouterLink>
