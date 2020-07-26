<h1 align="center">
<a href="https://codeclimate.com/github/Bantr/Lib/maintainability"><img src="https://api.codeclimate.com/v1/badges/e078c3c32d0005fa3fe0/maintainability" /></a>

<a href="https://discord.bantr.app">
 <img alt="Discord" src="https://img.shields.io/discord/626436103573864448?label=Discord">
</a>

  <img alt="GitHub Workflow Status" src="https://github.com/Bantr/Lib/workflows/Node.js%20CI/badge.svg">

  <br>
  <a href="https//bantr.app"><img src="https://bantr.app/static/assets/bantr-icon.png" align="center" alt="Bantr" width="100"></a>
</h1>

This package is used in Bantr projects, to share types, util functions, ...

## Setting up database

- Set up `.env` file (see `.env.example`)
- `npm run db:migrate`
- `npm run hasura:metadata:apply`

## Making changes to DB schema

- Change entities
- `npm run db:migrate:gen -- -n some-descriptive-name`
- Check migration file for correctness, adjust as needed
- `npm run db:migrate`
- Go into Hasura, reload metadata
- Make changes to Hasura (Add data fields, fix relations, set permissions, ...)
- `npm run hasura:metadata:export`

## Releasing a new version

Use the [npm version](https://docs.npmjs.com/cli/version) command on the master branch.

```sh
# MAJOR version when you make incompatible API changes,
npm version major

# MINOR version when you add functionality in a backwards compatible manner, and
npm version minor

# PATCH version when you make backwards compatible bug fixes.
npm version patch
```
