# Hardcore ESLint Shareable Config

[![Travis CI build status](https://img.shields.io/travis/EvgenyOrekhov/eslint-config-hardcore/master.svg?style=flat-square)](https://travis-ci.org/EvgenyOrekhov/eslint-config-hardcore)

## About

[Shareable Configs](https://eslint.org/docs/developer-guide/shareable-configs)
are designed to work with the `extends` feature of `.eslintrc` files.

This config is designed to be compatible with Douglas Crockford's
[JSLint](https://jslint.com/).

| Rules                                                                                        | Total | Enabled |
| -------------------------------------------------------------------------------------------- | ----: | ------: |
| [ESLint](https://eslint.org/docs/rules/)                                                     | 264   | **240** |
| [eslint-plugin-promise](https://github.com/xjamundx/eslint-plugin-promise)                   | 14    | **11**  |
| [eslint-plugin-security](https://github.com/nodesecurity/eslint-plugin-security)             | 13    | **12**  |
| [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)                    | 40    | **32**  |
| [eslint-plugin-unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn)               | 45    | **38**  |
| [eslint-plugin-array-func](https://github.com/freaktechnik/eslint-plugin-array-func)         | 6     | **6**   |
| [eslint-plugin-optimize-regex](https://github.com/BrainMaestro/eslint-plugin-optimize-regex) | 1     | **1**   |
| [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs)                | 25    | **24**  |
| [eslint-plugin-json](https://github.com/azeemba/eslint-plugin-json)¹ ²                       | 1     | **1**   |
| **Total: `hardcore`**                                                                        | 409   | **365** |
| [eslint-plugin-fp](https://github.com/jfmengels/eslint-plugin-fp)                            | 17    | **15**  |
| **Total: `hardcore` + `hardcore/fp`**                                                        | 426   | **381** |

¹ eslint-plugin-json actually includes 19 rules, but we consider them as one
"no-invalid-json" rule.

² You have to use the `--ext` option to lint `*.json` files:
`eslint . --ext .js,.json`

## Usage

Install:

```bash
npm install eslint-config-hardcore --save-dev
```

Then, add it to your `.eslintrc` file and specify your
[environments](https://eslint.org/docs/user-guide/configuring#specifying-environments):

```json
{
    "extends": ["hardcore"],
    "env": {
        "node": true,
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
        "node": true,
        "browser": true
    }
}
```

## [Changelog](https://github.com/EvgenyOrekhov/eslint-config-hardcore/releases)

## License

[MIT](LICENSE)
