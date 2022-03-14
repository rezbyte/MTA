# Minimalist Todo App

<div><img src="https://raw.githubusercontent.com/rezbyte/MTA/main/assets/images/screenshot.jpg"></img></div>

This is a todo list app written in [TypeScript](https://www.typescriptlang.org/) with [Expo](https://docs.expo.dev/) & [React Native](https://reactnative.dev/).

# Getting Started

The app can be run quickly using the Metro bundler & Expo Go.

[Install the Expo CLI](https://docs.expo.dev/get-started/installation/) via your favorite package manager.

To start the application, open a terminal & navigate to the 'MTA' folder:

```
cd <path/to/MTA>
```

Then type the following into your terminal:

```
expo start
```

Install the Expo Go app either on [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) or [iOS](https://itunes.com/apps/exponent).
Open the Expo Go app & press 'Scan QR Code'.
Scan the QR code that appears in the Terminal.

# Developing

Install the dependencies with [Yarn](https://yarnpkg.com/) to get started with expanding the app:

```
yarn install
```

## Recommended Development Setup

Set your editor settings to the .editorconfig file.
For VSCode, this is done via the [Editor Config extension](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig).
See [Editor Config's guide](https://editorconfig.org/#pre-installed) for other editors.

Setup ESLint as the linter in your editor.
For VSCode, use the [ESLint extension]().
Alternatively use `yarn lint` in the terminal to run ESLint manually.

Use Prettier to format your code.
For VSCode, this is done with the [Prettier extension]().

## Style Guide

Follow [AirBnB's style guide](https://airbnb.io/javascript/react/) & [the React TypeScript Cheatsheets](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/basic_type_example).

Feature branches should follow the `#issueNumber-issue-name` format.
For example `#7-Create-a-branching-convention`
