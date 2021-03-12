# Authentication

Whppt conveniently comes with an authentication system out of the box. This includes a user system,
roles system and a few other bits and pieces to make getting your website up and running easier.

## Root User

When `whppt/api-express` is installed, it will also register a bin script called `gen-root-user`. This script is a CLI 
tool that allows you to generate a root user for use with Whppt. A root user is required to get started with Whppt as
authentication is required to access most of the tools Whppt has to offer.

an easy way to register and use the `gen-root-user` script is to create a npm script that runs the bin script.

```json
{
  "scripts": {
    "generate-root": "gen-root-user"
  }
}
```

Once run, the CLI tool will prompt for multiple input and provided a MongoDB connection can be correctly established,
it will create a root user record.

Ok, so now we have a root user. Later on in this section we'll look at roles in Whppt but for now the biggest difference
between the root user and a custom user is that the root user gets a free pass on role validation. 

## Custom Users

Custom users can be invited via the Whppt dashboard. There is a tab for users, where you can enter their details 
(email etc.) and invite them to configure their password. While no SMTP details have been set up, the invite link will
be printed to screen, if SMTP details have been configured, an email will be sent to the provided user. Please note that
the generated invite link will expire in 24 hours.

A custom user will begin with no roles assigned and will likely have no permissions across the site. To allow the custom 
user more access we can create and assign roles to the new users.

## Roles

Roles are baked into Whppt to accompany the authentication system provided. To make roles, using the root user or a 
user with an admin role, we can visit the site settings dialogue and move over to the roles tab. Here we can create 
and manage roles. Selecting the `Is Admin Role` option on creation will mark the role as admin.

To apply roles, there are multiple options as to where we want to apply the roles. It's likely that you would want to
create and use roles at a page level or at a site level. Admin will allow for all site level configuration such as 
the site settings dialogue. The page level roles are any role that you might choose to apply to specific pages. 

Within the page settings dialogue there is also a roles tab. This tab will list the available roles and where or not
the role has permission to perform specific tasks. You can restrict roles to either allow/disallow the following actions.

- Viewing of the current page
- Editing of the current page
- Publishing of the current page

## Reset Password

Another feature of the authentication that comes with Whppt out of the box is the ability for a user to reset their 
password. However, this will really only work with SMTP details provided and configured correctly as it requires an email
to be sent to the user requesting their password reset. 

Once configured, a user can visit the Reset password portion of the login form and submit to reset the«ir password.
