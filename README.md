# Angular Material Starter

This is the starter template that [Bagubagu Studio](https://bagubagu.com)
uses to write web and mobile applications.

Mentions:
- Write code with [typescript](https://www.typescriptlang.org)
- UX relies heavily on [angular material](https://material.angularjs.org)
- Use [angular components](https://github.com/toddmotto/angular-component)
- Bundle with [webpack](https://webpack.github.io)
- Use and manage global state with redux (ng-redux) and redux-saga
- Routing with ui-router
- Taco (cordova) for android and ios version

## To use

Clone this repo and run `npm install`

```
git clone https://github.com/louislarry/angular-material-starter.git
npm install typings -g
npm install
```

## Development

serve website locally, auto-reload on file changes.
[http://localhost:8080](http://localhost:8080)

```
npm start
```

## Typings

use [typings](https://github.com/typings/typings) instead of tsd

```bash
typings install dt~angular --save --global
typings install dt~angular-material --save --global
typings install dt~angular-ui-router --save --global
```

## Prepare s3 website bucket

Choose your own bucket name.

For the purpose of this example bucket name is `ayamgoreng`,
coresponding website url is then
[http://ayamgoreng.s3-website-us-east-1.amazonaws.com](http://ayamgoreng.s3-website-us-east-1.amazonaws.com)

```
aws s3 mb s3://ayamgoreng
aws s3 website s3://ayamgoreng --index-document index.html
aws s3 website s3://ayamgoreng
aws s3api put-bucket-policy --bucket ayamgoreng --policy file://policy.json
```

## Deploy

Bundle, minify, publish s3 website bucket, and gzip bundle.js

```
npm run deploy
```

then open [http://ayamgoreng.s3-website-us-east-1.amazonaws.com](http://ayamgoreng.s3-website-us-east-1.amazonaws.com)

s3 website does not support automatic compression, so we manually
gzip bundle.js. Reduce filesize to get shorter initial load time.


## Other Starters

- [Angular2 Starter](https://github.com/louislarry/angular2-starter)
- [Cycle Starter](https://github.com/louislarry/cycle-starter)

## LICENSE

MIT
