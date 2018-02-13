# React Component Library Playground for the OneMarket componnent lib

Note: `wrsinc/componentlib` is a private repository. However, this project can
be edited to suit your own needs.

- https://github.com/wrsinc/componentlib/

### OVERIVEW

This is a playground for experimenting with a component library. This is intended to provide:

* a small app to experiment with a component library locally.
* a lightweight webpack config (for development and production)
* some helpful tooling for development workflow
* a similar setup to what you'll see in the wild

_*NOTE:* This app is based on Alan Smith's [React + Node Starter](https://github.com/alanbsmith/react-node-example)._


# Install / Setup

## Using packages on npm

1. If you want to test against `wrsinc/component` lib, go clone that repo.
2. Come back to this repo. Install dependencies: `$ npm install` or `$ yarn`
3. Fire up a development server: `$ npm run dev`

Once the server is running, you can visit: `http://localhost:8080/`

## Development


If you want to test against your currently checked out packages for `componentlib`,
you will need to `npm link` some of the `@westfield` project dependencies.
There's a script you can use to do that. From root:


*Pre-requisite*: from `componentlib` root, run: `npm run symlink`. This will
_begin_ the symlinking process. The below will complete it.

Run the below from `om-component-lib-playground` root:

```sh
$ npm run symlink
```

If you want to just install and symlink at the same time, run this script:

```sh
$ npm run dev:install
```

Notes:

- If you do not symlink, then the project will use the packages from npm.
- If you install any package after symlinking, you will need to symlink again as
    they will be removed.
- Make sure you have your expected `componentlib` branch checked out for which
    you wish to test against. Also make sure you have ran `npm run bootstrap` on
    it.

---


