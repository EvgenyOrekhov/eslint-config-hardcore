# eslint-config-hardcore

[![npm](https://img.shields.io/npm/v/eslint-config-hardcore?style=flat-square)](https://www.npmjs.com/package/eslint-config-hardcore)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

The most strict (yet practical) ESLint config.

Aims to include as many plugins and rules as possible to make your code
extremely consistent and robust.

**34 plugins. 1046 rules.**

## Usage

```sh
npm install eslint-config-hardcore --save-dev
```

Available configs:

- `hardcore` - base framework-agnostic config
- `hardcore/ts` - additional config for TypeScript
- `hardcore/node`- additional config for Node.js
- `hardcore/react` - additional config for React
- `hardcore/react-testing-library` - additional config for React Testing Library
- `hardcore/jest` - additional config for Jest
- `hardcore/fp` - additional config for functional programming
- `hardcore/ts-for-js` - additional config for linting JavaScript with
  [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

Example `.eslintrc.json` for a **React** project:

```json
{
  "extends": [
    "hardcore",
    "hardcore/react",
    "hardcore/react-testing-library",
    "hardcore/jest",
    "hardcore/fp"
  ],

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

Example `.eslintrc.json` for a **TypeScript React** project:

```json
{
  "extends": [
    "hardcore",
    "hardcore/react",
    "hardcore/react-testing-library",
    "hardcore/jest",
    "hardcore/fp",
    "hardcore/ts"
  ],

  "parserOptions": {
    "project": "./tsconfig.json"
  },

  "env": {
    "browser": true
  },

  "overrides": [
    {
      "files": ["server/**/*.ts"],
      "extends": ["hardcore/node"],
      "env": {
        "browser": false
      }
    }
  ]
}
```

## Configs

### `hardcore`

Base framework-agnostic config.

| Plugin                                                                                                    | Enabled rules |
| --------------------------------------------------------------------------------------------------------- | ------------: |
| [ESLint core rules](https://eslint.org/docs/rules/)                                                       |           187 |
| [eslint-plugin-putout](https://github.com/coderaiser/putout/tree/master/packages/eslint-plugin-putout)    |            91 |
| [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)                              |            84 |
| [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)                            |            84 |
| [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp)                                 |            69 |
| [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)                                 |            34 |
| [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)                             |            31 |
| [HTML ESLint](https://github.com/yeonjuan/html-eslint)                                                    |            21 |
| [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)                                |            12 |
| [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)                          |            11 |
| [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)                      |             4 |
| [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)              |             6 |
| [eslint-plugin-no-constructor-bind](https://github.com/markalfred/eslint-plugin-no-constructor-bind)      |             2 |
| [@shopify/eslint-plugin](https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin)         |             1 |
| [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) |             1 |
| [eslint-plugin-ext](https://github.com/jiangfengming/eslint-plugin-ext)                                   |             1 |
| [eslint-plugin-anti-trojan-source](https://github.com/lirantal/eslint-plugin-anti-trojan-source)          |             1 |
| [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)¹                                      |             1 |
| **Total:**                                                                                                |       **641** |

¹ eslint-plugin-json actually includes 19 rules, but I consider them as one
"no-invalid-json" rule.

### `hardcore/ts`

Config for TypeScript.

| Plugin                                                                                                     | Enabled rules |
| ---------------------------------------------------------------------------------------------------------- | ------------: |
| [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)                                |           102 |
| [eslint-plugin-etc](https://github.com/cartant/eslint-plugin-etc)                                          |            10 |
| [@shopify/eslint-plugin](https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin)          |             3 |
| [eslint-plugin-sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members)        |             1 |
| [eslint-plugin-no-explicit-type-exports](https://github.com/intuit/eslint-plugin-no-explicit-type-exports) |             1 |
| **Total:**                                                                                                 |       **117** |

### `hardcore/node`

Config for Node.js.

| Plugin                                                                 | Enabled rules |
| ---------------------------------------------------------------------- | ------------: |
| [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node) |            35 |
| **Total:**                                                             |        **35** |

### `hardcore/react`

Config for React.

| Plugin                                                                                                      | Enabled rules |
| ----------------------------------------------------------------------------------------------------------- | ------------: |
| [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)                                     |            80 |
| [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)                              |            32 |
| [eslint-plugin-react-perf](https://github.com/cvazac/eslint-plugin-react-perf)                              |             4 |
| [eslint-plugin-react-form-fields](https://github.com/kotarella1110/eslint-plugin-react-form-fields)         |             4 |
| [@shopify/eslint-plugin](https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin)           |             2 |
| [eslint-plugin-react-hook-form](https://github.com/andykao1213/eslint-plugin-react-hook-form)               |             3 |
| [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks) |             2 |
| **Total:**                                                                                                  |       **127** |

### `hardcore/react-testing-library`

Config for React Testing Library.

| Plugin                                                                                            | Enabled rules |
| ------------------------------------------------------------------------------------------------- | ------------: |
| [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) |            25 |
| **Total:**                                                                                        |        **25** |

### `hardcore/jest`

Config for Jest.

| Plugin                                                                                           | Enabled rules |
| ------------------------------------------------------------------------------------------------ | ------------: |
| [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)                       |            46 |
| [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)              |            11 |
| [eslint-plugin-jest-formatting](https://github.com/dangreenisrael/eslint-plugin-jest-formatting) |             7 |
| **Total:**                                                                                       |        **64** |

### `hardcore/fp`

Config for functional programming.

| Plugin                                                              | Enabled rules |
| ------------------------------------------------------------------- | ------------: |
| [eslint-plugin-fp](https://github.com/jfmengels/eslint-plugin-fp)   |            13 |
| [eslint-plugin-ramda](https://github.com/ramda/eslint-plugin-ramda) |            24 |
| **Total:**                                                          |        **37** |

### `hardcore/ts-for-js`

Config for linting JavaScript with
[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).

| Plugin                                                                                              | Enabled rules |
| --------------------------------------------------------------------------------------------------- | ------------: |
| [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)                         |            27 |
| [@shopify/eslint-plugin](https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin)   |             2 |
| [eslint-plugin-sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members) |             1 |
| **Total:**                                                                                          |        **30** |

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
  "extends": ["hardcore"],

  "env": {
    "browser": true
  },

  "overrides": [
    {
      "files": ["*.js"],
      "extends": ["hardcore/ts-for-js"],
      "parserOptions": {
        "project": "./tsconfig.json"
      }
    }
  ]
}
```

## [Changelog](https://github.com/EvgenyOrekhov/eslint-config-hardcore/releases)

## License

[MIT](LICENSE)
