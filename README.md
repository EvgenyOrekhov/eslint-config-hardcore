# eslint-config-hardcore

[![npm](https://img.shields.io/npm/v/eslint-config-hardcore?style=flat-square)](https://www.npmjs.com/package/eslint-config-hardcore)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

The most strict (yet practical) ESLint config.

Aims to include as many plugins and rules as possible to make your code
extremely consistent and robust.

**52 plugins. 1359 rules.**

## Usage

```sh
npm install eslint-config-hardcore --save-dev
```

Available configs:

- `hardcore` - base framework-agnostic config
- `hardcore/ts` - additional config for TypeScript
- `hardcore/node`- additional config for Node.js
- `hardcore/react` - additional config for React
- `hardcore/react-performance` - additional React config with performance rules
- `hardcore/vue` - additional config for Vue 3/Nuxt 3
- `hardcore/react-testing-library` - additional config for React Testing Library
- `hardcore/jest` - additional config for Jest
- `hardcore/fp` - additional config for functional programming
- `hardcore/ts-for-js` - additional config for linting JavaScript with
  [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)

Example `.eslintrc.json` for a **React** project:

```json
{
  "root": true,

  "extends": [
    "hardcore",
    "hardcore/react",
    "hardcore/react-performance",
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
  "root": true,

  "extends": [
    "hardcore",
    "hardcore/react",
    "hardcore/react-performance",
    "hardcore/react-testing-library",
    "hardcore/jest",
    "hardcore/fp",
    "hardcore/ts"
  ],

  "parserOptions": {
    "project": true
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

Example `.eslintrc.json` for a **Vue 3** project:

```json
{
  "root": true,

  "extends": ["hardcore", "hardcore/vue"],

  "settings": {
    "import/resolver": {
      "alias": {
        "map": [["@", "./src/"]],
        "extensions": [".js", ".vue"]
      }
    }
  }
}
```

Example `.eslintrc.json` for a **Nuxt 3** project:

```json
{
  "root": true,

  "extends": ["hardcore", "hardcore/vue"],

  "settings": {
    "import/resolver": {
      "alias": {
        "map": [
          ["@", "./"],
          ["#imports", ".nuxt/imports.d.ts"]
        ],

        "extensions": [".js", ".vue"]
      }
    }
  }
}
```

Example `.eslintrc.json` for a **TypeScript Vue 3** project (depending on
project configuration, you might want to change `"project": true` to
`"project": "tsconfig.app.json"`):

```json
{
  "root": true,

  "extends": ["hardcore", "hardcore/ts", "hardcore/vue"],

  "parserOptions": {
    "project": true
  },

  "overrides": [
    {
      "files": [
        "vite.config.*",
        "vitest.config.*",
        "cypress.config.*",
        "playwright.config.*"
      ],

      "parserOptions": {
        "project": "tsconfig.node.json"
      }
    },

    {
      "files": ["src/**/__tests__/*"],

      "parserOptions": {
        "project": "tsconfig.vitest.json"
      }
    }
  ]
}
```

Example `.eslintrc.json` for a **TypeScript Nuxt 3** project:

```json
{
  "root": true,

  "extends": ["hardcore", "hardcore/ts", "hardcore/vue"],

  "parserOptions": {
    "project": true
  }
}
```

## Configs

### `hardcore`

Base framework-agnostic config.

| Plugin                                                                                                    | Enabled rules |
| --------------------------------------------------------------------------------------------------------- | ------------: |
| [ESLint core rules](https://eslint.org/docs/rules/)                                                       |           173 |
| [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)                            |           103 |
| [eslint-plugin-regexp](https://github.com/ota-meshi/eslint-plugin-regexp)                                 |            80 |
| [eslint-plugin-putout](https://github.com/coderaiser/putout/tree/master/packages/eslint-plugin-putout)    |            76 |
| [eslint-plugin-sonar](https://github.com/un-ts/eslint-plugin-sonar)                                       |            51 |
| [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)                                 |            33 |
| [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)                             |            31 |
| [HTML ESLint](https://github.com/yeonjuan/html-eslint)                                                    |            29 |
| [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)                                |            15 |
| [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)                          |            12 |
| [eslint-plugin-perfectionist](https://github.com/azat-io/eslint-plugin-perfectionist)                     |             7 |
| [@stylistic/eslint-plugin](https://github.com/eslint-stylistic/eslint-stylistic)                          |             7 |
| [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)              |             6 |
| [eslint-plugin-sdl](https://github.com/microsoft/eslint-plugin-sdl)                                       |             5 |
| [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)                      |             3 |
| [eslint-plugin-unused-imports](https://github.com/sweepline/eslint-plugin-unused-imports)                 |             2 |
| [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort)            |             2 |
| [eslint-plugin-no-constructor-bind](https://github.com/markalfred/eslint-plugin-no-constructor-bind)      |             1 |
| [eslint-plugin-no-unsanitized](https://github.com/mozilla/eslint-plugin-no-unsanitized)                   |             2 |
| [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) |             1 |
| [eslint-plugin-ext](https://github.com/jiangfengming/eslint-plugin-ext)                                   |             1 |
| [eslint-plugin-no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests)                 |             1 |
| [eslint-plugin-compat](https://github.com/amilajack/eslint-plugin-compat)                                 |             1 |
| [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)¹                                      |             1 |
| [eslint-plugin-yml](https://github.com/ota-meshi/eslint-plugin-yml)¹                                      |             1 |
| [eslint-plugin-toml](https://github.com/ota-meshi/eslint-plugin-toml)¹                                    |             1 |
| **Total:**                                                                                                |       **654** |

¹ json/yml/toml plugins actually include several rules, but I consider each
plugin as a single "no-invalid" rule.

### `hardcore/ts`

Config for TypeScript.

| Plugin                                                                                                     | Enabled rules |
| ---------------------------------------------------------------------------------------------------------- | ------------: |
| [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)                                |           105 |
| [eslint-plugin-etc](https://github.com/cartant/eslint-plugin-etc)                                          |            10 |
| [eslint-plugin-total-functions](https://github.com/danielnixon/eslint-plugin-total-functions)              |             8 |
| [@shopify/eslint-plugin](https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin)          |             3 |
| [eslint-plugin-sonar](https://github.com/un-ts/eslint-plugin-sonar)                                        |             1 |
| [eslint-plugin-sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members)        |             1 |
| [eslint-plugin-decorator-position](https://github.com/NullVoxPopuli/eslint-plugin-decorator-position)      |             1 |
| [eslint-plugin-no-explicit-type-exports](https://github.com/intuit/eslint-plugin-no-explicit-type-exports) |             1 |
| [eslint-plugin-typescript-compat](https://github.com/azu/eslint-plugin-typescript-compat)                  |             1 |
| **Total:**                                                                                                 |       **131** |

### `hardcore/node`

Config for Node.js.

| Plugin                                                                 | Enabled rules |
| ---------------------------------------------------------------------- | ------------: |
| [eslint-plugin-sonar](https://github.com/un-ts/eslint-plugin-sonar)    |            53 |
| [eslint-plugin-n](https://github.com/eslint-community/eslint-plugin-n) |            34 |
| [eslint-plugin-sdl](https://github.com/microsoft/eslint-plugin-sdl)    |             1 |
| **Total:**                                                             |        **88** |

### `hardcore/react`

Config for React.

| Plugin                                                                                                                         | Enabled rules |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------: |
| [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)                                                        |            76 |
| [eslint-plugin-styled-components-a11y](https://github.com/brendanmorrell/eslint-plugin-styled-components-a11y)                 |            33 |
| [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)                                                 |            34 |
| [eslint-plugin-storybook](https://github.com/storybookjs/eslint-plugin-storybook)                                              |            15 |
| [eslint-plugin-react-form-fields](https://github.com/kotarella1110/eslint-plugin-react-form-fields)                            |             4 |
| [eslint-plugin-ssr-friendly](https://github.com/kopiro/eslint-plugin-ssr-friendly)                                             |             4 |
| [@shopify/eslint-plugin](https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin)                              |             3 |
| [eslint-plugin-react-hook-form](https://github.com/andykao1213/eslint-plugin-react-hook-form)                                  |             3 |
| [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)                    |             2 |
| [eslint-plugin-sonar](https://github.com/un-ts/eslint-plugin-sonar)                                                            |             2 |
| [eslint-plugin-validate-jsx-nesting](https://github.com/MananTank/eslint-plugin-validate-jsx-nesting)                          |             1 |
| [eslint-plugin-react-prefer-function-component](https://github.com/tatethurston/eslint-plugin-react-prefer-function-component) |             1 |
| **Total:**                                                                                                                     |       **178** |

### `hardcore/react-performance`

Config with performance rules for React.

| Plugin                                                                                    | Enabled rules |
| ----------------------------------------------------------------------------------------- | ------------: |
| [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react)                   |             4 |
| [eslint-plugin-react-perf](https://github.com/cvazac/eslint-plugin-react-perf)            |             4 |
| [eslint-plugin-react-usememo](https://github.com/arthurgeron/eslint-plugin-react-usememo) |             1 |
| **Total:**                                                                                |         **9** |

### `hardcore/vue`

Config for Vue 3/Nuxt 3.

| Plugin                                                                                             | Enabled rules |
| -------------------------------------------------------------------------------------------------- | ------------: |
| [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)                                    |           173 |
| [eslint-plugin-vuejs-accessibility](https://github.com/vue-a11y/eslint-plugin-vuejs-accessibility) |            20 |
| [eslint-plugin-vue-scoped-css](https://github.com/future-architect/eslint-plugin-vue-scoped-css)   |            12 |
| [eslint-plugin-sonar](https://github.com/un-ts/eslint-plugin-sonar)                                |             1 |
| **Total:**                                                                                         |       **206** |

### `hardcore/react-testing-library`

Config for React Testing Library.

| Plugin                                                                                            | Enabled rules |
| ------------------------------------------------------------------------------------------------- | ------------: |
| [eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library) |            24 |
| **Total:**                                                                                        |        **24** |

### `hardcore/jest`

Config for Jest.

| Plugin                                                                              | Enabled rules |
| ----------------------------------------------------------------------------------- | ------------: |
| [eslint-plugin-jest](https://github.com/jest-community/eslint-plugin-jest)          |            50 |
| [eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom) |            19 |
| **Total:**                                                                          |        **69** |

### `hardcore/fp`

Config for functional programming.

| Plugin                                                                                    | Enabled rules |
| ----------------------------------------------------------------------------------------- | ------------: |
| [eslint-plugin-functional](https://github.com/eslint-functional/eslint-plugin-functional) |             9 |
| **Total:**                                                                                |         **9** |

### `hardcore/ts-for-js`

Config for linting JavaScript with
[typescript-eslint](https://github.com/typescript-eslint/typescript-eslint).

| Plugin                                                                                                | Enabled rules |
| ----------------------------------------------------------------------------------------------------- | ------------: |
| [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint)                           |            28 |
| [eslint-plugin-etc](https://github.com/cartant/eslint-plugin-etc)                                     |             4 |
| [@shopify/eslint-plugin](https://github.com/Shopify/web-configs/tree/main/packages/eslint-plugin)     |             2 |
| [eslint-plugin-sort-class-members](https://github.com/bryanrsmith/eslint-plugin-sort-class-members)   |             1 |
| [eslint-plugin-decorator-position](https://github.com/NullVoxPopuli/eslint-plugin-decorator-position) |             1 |
| [eslint-plugin-typescript-compat](https://github.com/azu/eslint-plugin-typescript-compat)             |             1 |
| **Total:**                                                                                            |        **37** |

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
        "project": true
      }
    }
  ]
}
```

## [Changelog](https://github.com/EvgenyOrekhov/eslint-config-hardcore/releases)

## License

[MIT](LICENSE)
