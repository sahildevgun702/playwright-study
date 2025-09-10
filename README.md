# Playwright Study 

This repository helps manual testers learn automation using Playwright and TypeScript.

## Getting Started

1. **Clone the repository**
    ```bash
    git clone https://github.com/sahildevgun702/playwright-study.git
    cd playwright-study
    ```
    **What these commands do:**
    - `git clone` downloads a copy of this project to your computer
    - `cd playwright-study` changes your terminal location into the project folder
    
    **Think of `cd` like opening a folder on your computer.** You need to be "inside" the project folder for the next commands to work properly.

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Run your first test**
    ```bash
    npx playwright test
    ```

## How to Run a Playwright Test from another folder

By default, Playwright only runs tests in the `tests` folder. To run tests from other folders for e.g. playground/sahil/website_health_checker_practice.spec.ts, use this command in your terminal:

```
npx playwright test playground/sahil/website_health_checker_practice.spec.ts
```


## Folder Structure

- `playground/` — Safe space for experimentation and practice.
- `playwright.config.ts` — Playwright configuration.
- `tsconfig.json` — TypeScript configuration.
- `package.json` — Project metadata and scripts.


## Project Files Explained

Here is a simple explanation of the main files in this project:

- **package.json**: Lists the tools and libraries your project uses. Also contains scripts to run tasks like tests.
- **package-lock.json**: Keeps track of the exact versions of those tools and libraries to make sure everyone uses the same ones.
- **playwright.config.ts**: Settings for how Playwright runs your tests (e.g., which browser, timeouts).
- **tsconfig.json**: Settings for how TypeScript works in your project (e.g., which files to include, language options).
- **README.md**: This file! It explains what the project is and how to use it.
- **.gitignore**: Tells Git which files/folders to ignore (not track in version control).
- **playground/**: Safe experimentation area - try anything here!

## Learn More

- [Playwright Docs](https://playwright.dev/docs/intro)
- [What is Typescript?](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)
- [JavaScript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [TypeScipt in 5 min](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html)
- [Git Basics for Beginners](https://www.w3schools.com/git/default.asp?remote=github)