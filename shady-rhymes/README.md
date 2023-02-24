This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# SHADY RHYMES (NEXT.JS - PRACTICE)

### Author

- Ha Nguyen

### Overview

- This document provides a detailed estimate of the Next.js practice.

### Timeline

- 10 days
  - Start day: 21th February
  - End day: 6th March

### Team size

- 1 Dev

## Technical stack

- [Next.js](https://nextjs.org/) (12.2)

  - Used by some of the world's largest companies, Next.js enables you to create full-stack web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.

- React latest version (v18.2.0)

  - React is declarative, efficient, and flexible Javascript library for building user interfaces. It let you compose complex UIs from small and isolated pieces of code called "component".

- [Chakra UI](https://chakra-ui.com/) (v2.5.1)

  - Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React application.

- [Mockapi](http://mockapi.io/)

  - MockAPI is a simple tool that lets you easily mock up APIs, generate custom data, and preform operations on it using RESTful interface. MockAPI is meant to be used as a prototyping/testing/learning tool.

- [Storybook](https://storybook.js.org/) (v6.5.16)

  - Chakra UI is a simple, modular and accessible component library that gives you the building blocks you need to build your React applications.

- [Unit Test](https://testing-library.com/docs/react-testing-library/intro/) (v14.0.0)

  - The Testing Library family of libraries is a very light-weight solution for testing without all the implementation details. The main utilities it provides involve querying for nodes similarly to how users would find them. In this way, testing-library helps ensure your tests give you confidence in your UI code.

- [TypeScript](https://www.typescriptlang.org/) (4.9.5)

  - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

- Vercel

  - Vercel is the platform for frontend developers, providing the speed and reliability innovators need to create at the moment of inspiration.

- Developer tools:

  - [Eslint](https://eslint.org/docs/latest/user-guide/getting-started) (v8.34.0)

    - ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

  - [Prettier](https://prettier.io/) (v2.8.4)

    - An opinionated code formatter
    - Supports many languages
    - Integrates with most editors
    - Has few options

  - [Husky](https://www.npmjs.com/package/husky) (v8.0.0)

    - Husky is a tool that allows us to easily wrangle Git hooks and run the scripts we want at those stages.
    - Husky improves your commits and more

  - [Lint-staged](https://www.npmjs.com/package/lint-staged) (v13.1.2)

    - Lint-staged is a tool that prevents bad code from leaving a developer's computer. It allows us to run commands on staged files when a developer runs git commit . If any of the commands fail then the commit also fails—preventing bad commits from being pushed to GitHub.

  - Check performance score: [PageSpeed Insights](https://pagespeed.web.dev/) / Lighthouse

  - Gitlab (Save and management source code)

  - Github

    - GitHub is a website and cloud-based service that helps developers store and manage their code, as well as track and control changes to their code

### Development environment

- Visual Studio Code v1.39.1 (text editor)

### Target

- Analysis design
- Build Next.js app with version 12.2
- Build React app with the latest version (v18+)
- Practice with next.js
  - Next.config.js
  - handle Script (with Partytown)
  - Data fetching
  - Dynamic routes
  - APIs
    - Next/link
    - next/script
    - next/head
    - next/image
- Apply Storybook
- Apply Unit Test
- Deploy with vercel
- PageSpeed score is mandatory minimum 98

### Design

- Implement UI with: [Design](<https://www.figma.com/file/OW8qHTWp5H4WUyeHkr2mNr/shady-rhymes-interior-design-landing-page-(Community)?node-id=0%3A1&t=xlj0igo0NzNq18R3-0>)

### Installation

| Command                                                                    | Action                                                           |
| :------------------------------------------------------------------------- | :--------------------------------------------------------------- |
| `git clone git@gitlab.asoft-python.com:ha.nguyenthanh/nextjs-training.git` | Create a copy of the target repository                           |
| `cd feature/shady-rhymes`                                                  | Change directory to shady-rhymes                                 |
| `pnpm install`                                                             | Installs dependencies                                            |
| `pnpm run dev`                                                             | Start local dev server at localhost:3000                         |
| `pnpm lint`                                                                | Check warning & error following ESLint                           |
| `pnpm storybook`                                                           | Run the storybook to review all the components at localhost:6006 |
| `pnpm test`                                                                | Run unit test                                                    |
