# Postcloud : Your Everything

Postcloud aims to be an all-in-one platform for self-hosted cloud. 
Powered by Rust and HTMX, is aims to be fast, easy to use and easy to develop for.
Postcloud allows you to host your files, calendar, e-mail, contacts in a self-hosted cloud.
But that's only the tip of the iceberg. Postcloud provides an easy way to develop front-end apps that can be easily
added, removed and configured from a Postcloud installation.

## Examples
Make your own **home** postcloud, with cooking recipes, rendered beautifully by a community app, as well as a 
meal planner and a calories tracker. Display everything on your tablet, and configure a beautiful dashboard that
to kickoff your day.

For schools, a myriad of apps allow professors to manage their classes, schedules and grades. An all-in-one
platform that can be easily deployed on a national scale, with minimum maintenance.

Create a postcloud instance for **work**. Use the calendar to manage your employees schedules, use the
**leaves** extension to manage time-off requests, and with the **cashier** app they can easily input
transactions that will directly be stored in your database.

# Postcloud: Harness the power of simplicity 

## Philosophy

- Everything WebDav/HTTP
- Views are detached from Dav API
- Easily extensible with apps
- Can run on a local filesystem
- Server is frontend agnostic, and frontend can easily be swapped/ditched if necessary
- Server will serve frontend views when HTTP requests are issued if they exist
- Everything is an app, so for example, event the frontend layout is an app
  - Default layout uses the default navbar app and displays the RouterView
  - Layout can be extended, modified etc.
  - For example custom navbar, but also custom global layout

## Idea dump

- Make your own frontend however you like
- Apps can create new views (mysite.com/app/myApp) or extend existing apps
- Each app has its own DB scope and cannot interact with the DB (for security)
  - Each app **must** use the WebDav API in order to interact with Filesystem
  - Does this mean that every app is basically frontend + data and Postcloud is the universal controller?
- Redis DB for cache?

# Postcloud: Welcome to the post-cloud era
