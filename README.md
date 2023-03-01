# @etchteam/stylelint

The [stylelint](https://stylelint.io/) config that we use at [Etch](https://etch.co)

## Install

```bash
npm i -D stylelint prettier @etchteam/stylelint-config
```

## Usage

```bash
echo "module.exports = { extends: ['@etchteam/stylelint-config'] };" > stylelint.config.js
```

### With lint-staged

#### New project

Run the following:

```bash
npm i -D husky lint-staged

echo "module.exports = { '*.{css,scss}': 'stylelint --fix' };" > lint-staged.config.js

npx husky install

npx husky set .husky/pre-commit "npx --no-install -- lint-staged"

```

#### Existing project with husky and lint staged

Add the following to your lint-staged config:

`'*.{css,scss}': 'stylelint --fix'`

## Usage with VSCode

### New project with no VSCode config

Run the following:

```bash
mkdir .vscode

echo "{ "editor.formatOnSave": false, "editor.codeActionsOnSave": { "source.fixAll.stylelint": true } }" > .vscode/settings.json
```

### Exisiting project with VSCode config

Add the following to `.vscode/settings.json`:

```json
"editor.formatOnSave": false,
"editor.codeActionsOnSave": {
  "source.fixAll.stylelint": true
}
```
