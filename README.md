# eslint-config-hardcore

[![npm](https://img.shields.io/npm/v/eslint-config-hardcore?style=flat-square)](https://www.npmjs.com/package/eslint-config-hardcore)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

The most strict (but practical) ESLint config out there. 647 rules.

Aims to include as many plugins and rules as possible to make your code
extremely consistent and robust.

Uses
[eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier) for
autoformatting your code.

## What's included

| Plugin                                                                                                    | Enabled rules |
| --------------------------------------------------------------------------------------------------------- | ------------: |
| [ESLint core rules](https://eslint.org/docs/rules/)                                                       |           184 |
| [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)                              |            82 |
| [eslint-plugin-putout](https://github.com/coderaiser/putout/tree/master/packages/eslint-plugin-putout)    |            72 |
| [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)                            |            59 |
| [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp)                                 |            35 |
| [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)                                 |            32 |
| [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)                             |            24 |
| [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)                                |            12 |
| [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)                          |            11 |
| [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)                      |             6 |
| [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)              |             6 |
| [eslint-plugin-no-constructor-bind](https://github.com/markalfred/eslint-plugin-no-constructor-bind)      |             2 |
| [@shopify/eslint-plugin](https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin)         |             1 |
| [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) |             1 |
| [eslint-plugin-optimize-regex](https://github.com/BrainMaestro/eslint-plugin-optimize-regex)              |             1 |
| [eslint-plugin-ext](https://github.com/jiangfengming/eslint-plugin-ext)                                   |             1 |
| [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)¹                                      |             1 |
| [HTML ESLint](https://github.com/yeonjuan/html-eslint)                                                    |            16 |
| **Total: `hardcore`**                                                                                     |       **546** |

¹ eslint-plugin-json actually includes 19 rules, but I consider them as one
"no-invalid-json" rule.

## Usage

Install:

```sh
npm install --save-dev eslint-config-hardcore
```

Then, add it to your `.eslintrc` file and specify your
[environments](https://eslint.org/docs/user-guide/configuring#specifying-environments):

```json
{
  "extends": ["hardcore"],
  "env": {
    "browser": true
  }
}
```

## `hardcore/fp`

This config adds rules for functional programming.

| Plugin                                                              | Enabled rules |
| ------------------------------------------------------------------- | ------------: |
| [eslint-plugin-fp](https://github.com/jfmengels/eslint-plugin-fp)   |            14 |
| [eslint-plugin-ramda](https://github.com/ramda/eslint-plugin-ramda) |            24 |
| **Total: `hardcore` + `hardcore/fp`**                               |       **584** |

Use it **in addition** to the `hardcore` config:

```json
{
  "extends": ["hardcore", "hardcore/fp"],
  "env": {
    "browser": true
  }
}
```

## `hardcore/node`

This config adds rules and globals for Node.js.

| Plugin                                                                 | Enabled rules |
| ---------------------------------------------------------------------- | ------------: |
| [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) |            35 |
| **Total: `hardcore` + `hardcore/fp` + `hardcore/node`**                |       **619** |

Use it **in addition** to other configs:

```json
{
  "extends": ["hardcore", "hardcore/fp", "hardcore/node"]
}
```

Or, if your project contains both non-Node and Node files, use it like this:

```json
{
  "extends": ["hardcore", "hardcore/fp"],
  "env": {
    "browser": true
  },
  "overrides": [
    {
      "files": ["server/**/*.js"],
      "extends": ["hardcore/node"],
      "env": {
        "browser": false
      }
    }
  ]
}
```

## `hardcore/ts-for-js`

| Plugin                                                                                                | Enabled rules |
| ----------------------------------------------------------------------------------------------------- | ------------: |
| [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)                           |            44 |
| [@shopify/eslint-plugin](https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin)     |             2 |
| [eslint-plugin-sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members)   |             1 |
| [eslint-plugin-decorator-position](https://github.com/NullVoxPopuli/eslint-plugin-decorator-position) |             1 |
| **Total: `hardcore` + `hardcore/fp` + `hardcore/node` + `hardcore/ts-for-js`**                        |       **647** |

Did you know you can lint JavaScript code with
[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)?

Use this config to take advantage of typescript-eslint's advanced type-aware
rules (like
[`@typescript-eslint/naming-convention`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/naming-convention.md)
and
[`@typescript-eslint/prefer-optional-chain`](https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/prefer-optional-chain.md))
without the need to switch to writing TypeScript.

1. First, you'll need to create `tsconfig.json` in the root of your project. You
   don't have to specify any options, just `{}` should do it.
2. Then add `hardcore/ts-for-js` to the `overrides` section in your `.eslintrc`
   like this:

```json
{
  "extends": ["hardcore", "hardcore/fp", "hardcore/node"],
  "overrides": [
    {
      "files": ["*.js"],
      "extends": ["hardcore/ts-for-js"],
      "parserOptions": { "project": "./tsconfig.json" }
    }
  ]
}
```

## [Changelog](https://github.com/EvgenyOrekhov/eslint-config-hardcore/releases)

## License

[MIT](LICENSE)
