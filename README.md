# Hardcore ESLint [Shareable Config](http://eslint.org/docs/developer-guide/shareable-configs)

[![Travis CI build status](https://img.shields.io/travis/EvgenyOrekhov/eslint-config-hardcore/master.svg?style=flat-square)](https://travis-ci.org/EvgenyOrekhov/eslint-config-hardcore)

# Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files.
You can learn more about
[Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the
official ESLint website.

To use this shareable config, first run this:

```bash
npm install eslint-config-hardcore --save-dev
```

Then, add this to your .eslintrc file:

```json
{
  "extends": "hardcore"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.

# License
[MIT](LICENSE)
