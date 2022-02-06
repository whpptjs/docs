# Domains

## What are domains in Whppt?

Domains allow for the use/editing of multiple separate sites within one project/one installation of Whppt. Each domain represents one site, the URLs of which are given by the host names. These domains share all available components, plugins, etc. available within one project, but keep some data unique to themselves that is only accessible on their specific domain. Pages, nav, footer and settings are all automatically associated to the domain you're on while editing, meaning that a separate copy of each will be stored for each domain. This allows for unique navs and footers across different domains, as well as multiple pages with the same slug (e.g. two home pages sitting at '/', but with different associated domains).

## Creating your first domain

Domains are accessible via config settings. They consist of a name (purely for labelling) and a set of host names (comma separated string) which determines at which URLs the domain will be used. Typically you'll need two host names, one for the draft and one for the published environments. A domain is required for Whppt to function, so at least one must be provided even if multiple domains aren't necessary for the project.

## Using domains in development

In development, the domains settings features a "Make active" button per domain. This will append "localhost" to the list of domain host names and remove it from any others. This provides the ability to work within the selected domain and swap between them at will during development.
