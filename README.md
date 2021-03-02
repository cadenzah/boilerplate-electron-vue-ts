# Electron Application with Vue.ts Boilerplate

## Index
- [Library used](#library-used)
- [Directory Structure](#directory-structure)
- [Preparation](#preparation)
- [How to use](#how-to-use)
- [Update Logs](#update-logs)
- [Appendix](#appendix)

<a name="library-used"></a>
## Library used
- Electron v12
- TypeScript v4.2

<a name="directory-structure"></a>
## Directory Structure

```md
/
|- configs/       : Configuration files for compile, build
  |- env/         : Environment variables (User-defined `.env` file goes here)
|- app/           : Application run on Electron 
|- main.ts        : Main entry logic for Electron Application
```

<a name="preparation"></a>
## Preparation

1. Run npm install to provide required npm modules
2. Go to `/config/env` and make .env file for your project

### | `.env`
You can inject your custom environment variables in your project.

The `.env` file should be located in `/config/env` directory.

The project will inject `{ __NOT_USED__: undefined }` environment variable as `process.env` object if you don't generate `.env` file, which means `.env` file is not a mandatory part of your project.

> **CAUTION:** You can access your predefined `.env`'s values **only by accessing `process.env`, only in build-time**. `process.env` is not available in run-time.

<a name="how-to-use"></a>
## How to use

### | How to run Electron Application
1. Build Web Application (See "How to Build")
2. Run `npm run start`

### | How to run Web Application with webpack-dev-server
1. Run `npm run dev`
2. Visit `http://localhost:3000` (Automatically opens)

### | How to run test
1. Run `npm run test:watch`
2. If you need code coverage report, run `npm run test:coverage`

<a name="update-logs"></a>
## Update Logs

### | v1.0.0
- Initial migration from [Vue.js with Typescript Boilerplate](https://github.com/cadenzah/boilerplate-vue-ts)

<a name="appendix"></a>
## Appendix
TBD
