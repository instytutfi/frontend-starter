![GitHub package.json version](https://img.shields.io/github/package-json/v/instytutfi/frontend-starter)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/instytutfi/frontend-starter/main.yml)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/instytutfi/frontend-starter)
![GitHub last commit](https://img.shields.io/github/last-commit/instytutfi/frontend-starter)
![GitHub issues](https://img.shields.io/github/issues/instytutfi/frontend-starter)
![GitHub](https://img.shields.io/github/license/instytutfi/frontend-starter)

# Fi Frontend Starter

This is a frontend starter repo, which helps you kickstart your next React SPA.
It is highly opinionated, and consists of:

[TypeScript](https://www.typescriptlang.org/) • [Vite](https://vitejs.dev/) • [Vitest](https://vitest.dev) • [React](https://reactjs.org/)
[Cypress](https://cypress.io/) • [Plop](https://plopjs.com/) • [Storybook](https://storybook.js.org/)<br />
[eslint](https://eslint.org/) • [Husky](https://typicode.github.io/husky/) • [React Hook Form](https://react-hook-form.com/)
[yup](https://github.com/jquense/yup) • [React Router](https://reactrouter.com/) • [Axios](https://axios-http.com/)<br />
[react-ii18next](https://react.i18next.com/) • [Lodash](https://lodash.com/) • [Tailwind CSS](https://tailwindcss.com/)

The idea is to be able to start doing stuff in no time, as long as you're fine with the selected stack
and some DX choices made here and there.

## Getting started

The simplest way to get started with Fi Frontend Starter is to use the [_Use this template_](https://github.com/instytutfi/frontend-starter/generate) button. This way you can create a repository based off of this one and get right to work.

## Developing

After cloning the repo, install all the dependencies using `npm install`. Some of the commands:

* `npm run dev` to start a dev server
* `npm run lint` and `npm run lint:fix` to run eslint over the entire `src` directory
* `npm run test` to run tests in a watch mode
* `npm run gen` to generate code
* `npm run storybook` to run storybook server

## Folder Structure

Some of the most important concepts and related folders:

#### `src/api`

Whenever you need to call an API, you should use [axios](https://axios-http.com/) and define functions that call relevant API endpoints, and receive any necessary headers or parameters.
   
Important note is that you'll rarely use those API functions directly within your code. Instead, you should create a service, which will expose these APIs through a nicer interface.

#### `src/services`

Service is a broad term that basically means any piece of code, which is responsible for performing a business logic. A service can be responsible for fetching and sending data from and to external APIs. A good example would be a `UsersService`, which could expose methods like `getUser(userId: string)` and `createUser(userData: Record<string, any>)`.
   
But a service can also be responsible for doing some complicated mathematical operations, generating resources, etc. The key takeaway is: put your business logic into a service.

#### `src/hooks`

Here you can keep all your reusable hooks that you use throughout the app.

#### `src/locale`

Fi Frontend Starter comes pre-configured with [react-i18next], which allows you to handle multiple languages within your app, as well as separate the textual content of the app from the presentational layer. The `locale` folder stores the JSON files with all the language strings that you use throughout the app.

#### `src/components`

This directory stores all the components that you use within your app. These can be simple buttons, or complicted forms—it's up to you.
   
The only exception of the rule above are: pages and layouts. We'll talk about them below.

#### `src/layouts`

Layout is a special type of a component, which describes the overall layout of a page. A layout itself usually shouldn't render any particular components. It's role is to define a reusable layout into which other components can be rendered (usually as children or props): navbar, sidebar, main content, footer, etc.

#### `src/pages`

Pages are yet another special types of components. They describe individual views of your app, such as Home Page, About Page, or Products List and Product Details.
   
Each page should use one of the layouts, and feed it with the relevant components. Those pages are then mounted in the `<App>` component.

#### `src/App`

Stores the main `<App>` component, which is responsible for rendering the entire app. It will usually be responsible for rendering all the pages, often times with the help of [React Router](https://reactrouter.com/en/main) library to handle routing.

#### `src/stories`

Contains general Storybook stories, not related to particular components. Useful for creating documentations, troubleshooting pages, etc.

## Plop Generators

The `/src` directory contains quite a few folders by default.
The aim is to keep all the separate parts of the system apart, in a nice and hierarchical folder structure.

Thanks to that, you can do things like importing any component by just calling the main `components` barrel:

```ts
import { SomeComponent } from 'components'
```

While this approach results in a nice Developer Experience, it can be cumbersome to create all the necessary folders and files.
To fix this problem, Fi Frontend Starter uses Plop generators to automate the process of generating new tests, components, hooks, etc.

To use them, simply use the `npm run gen` command. The interactive process will ask you what you want to generate, how to name it, and so on.
Once you respond to all the questions, all the files will be automatically generated, relevant exports added to barrels, etc.

It is fairly easy to extend the provided Plop configuration. The `/plop` directory contains all the configurations and [Handlebars](https://handlebarsjs.com/) templates, that are used to generate the code.
