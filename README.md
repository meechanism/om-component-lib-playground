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


1. If you want to test against wrsinc/component lib, go clone that rep.
2. Come back to this repo. Install dependencies: `$ npm install` or `$ yarn`
3. Fire up a development server: `$ npm run dev`

Once the server is running, you can visit: `http://localhost:8080/`

## Development

Since this project was meant to be tested with various packages in the
`componentlib` mono repo, we will need to `npm link` some of the `@westfield`
project dependencies. There's a script you can use to do that. From root:

```sh
$ npm run symlink
```

Note: If you do not symlink, then the project will use the packages from npm.


---

## Linting

_This assumes you have eslint and eslint-watch installed. If you don't, run the following:_
```
$ npm i -g eslint eslint-watch
```
or if you need permissions:
```
$ sudo npm i -g eslint eslint-watch
```

To run the linter once:
```
$ npm run lint
```

To run the watch task:
```
$ npm run lint:watch
```
---

## Testing

To run the tests:
```
$ npm test
```

---

## Production Build

To build your production assets and run the server:
```
$ npm start
```

