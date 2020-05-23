# eslint-config-hardcore

The most strict (but practical) ESLint config out there

[![npm](https://img.shields.io/npm/v/eslint-config-hardcore?style=flat-square)](https://www.npmjs.com/package/eslint-config-hardcore)
[![Travis CI build status](https://img.shields.io/travis/EvgenyOrekhov/eslint-config-hardcore/master.svg?style=flat-square)](https://travis-ci.org/EvgenyOrekhov/eslint-config-hardcore)

## What's included

| Rules                                                                                                     | Total | Enabled |
| --------------------------------------------------------------------------------------------------------- | ----: | ------: |
| [ESLint](https://eslint.org/docs/rules/)                                                                  |   258 | **236** |
| [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)                            |    53 |  **43** |
| [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)                                 |    40 |  **32** |
| [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)                             |    25 |  **24** |
| [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)                          |    13 |  **11** |
| [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)                                |    14 |  **11** |
| [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)                      |     6 |   **6** |
| [eslint-plugin-eslint-comments](https://github.com/mysticatea/eslint-plugin-eslint-comments)              |     8 |   **6** |
| [eslint-plugin-no-constructor-bind](https://github.com/markalfred/eslint-plugin-no-constructor-bind)      |     2 |   **2** |
| [eslint-plugin-no-use-extend-native](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) |     1 |   **1** |
| [eslint-plugin-optimize-regex](https://github.com/BrainMaestro/eslint-plugin-optimize-regex)              |     1 |   **1** |
| [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)¹                                      |     1 |   **1** |
| **Total: `hardcore`**                                                                                     |   422 | **374** |
| [eslint-plugin-fp](https://github.com/jfmengels/eslint-plugin-fp)                                         |    17 |  **14** |
| [eslint-plugin-ramda](https://github.com/ramda/eslint-plugin-ramda)                                       |    26 |  **24** |
| **Total: `hardcore` + `hardcore/fp`**                                                                     |   465 | **413** |
| [eslint-plugin-node](https://github.com/mysticatea/eslint-plugin-node)                                    |    37 |  **35** |
| **Total: `hardcore` + `hardcore/fp` + `hardcore/node`**                                                   |   502 | **448** |

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

## [Changelog](https://github.com/EvgenyOrekhov/eslint-config-hardcore/releases)

## License

[MIT](LICENSE)
