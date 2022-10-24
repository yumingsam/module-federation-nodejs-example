# Module Federation NodeJS Example

Example exposing fully functional modules to be used by a running NodeJS application.

```diff
Module Federation is not a replacement to a monorepo.
This approach is useful for a backend only in very specific cases, be thoughtful.
```

`app2` exposes a module that depends on: internal functions (mapAuthor.js) and external libraries (lodash).  
 `app1` loads `app2` on runtime and uses it for mapping objects.

### Useful links:

- Webpack Module Federation docs: https://webpack.js.org/concepts/module-federation/
- NodeJS Module Federation docs: https://www.npmjs.com/package/@module-federation/node

### Running

#### Terminal A:

- cd app2
- npm install
- npm start

#### Terminal B:

- cd app1
- npm install
- npm start
