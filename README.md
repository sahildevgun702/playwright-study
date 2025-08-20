# Playwright Study Boilerplate

This repository helps manual testers learn automation using [Playwright](https://playwright.dev/), TypeScript, and a TestNG-like structure.

## Getting Started

1. **Install dependencies**
    ```bash
    npm install
    ```

2. **Run your first test**
    ```bash
    npx playwright test
    ```
## How to Run a Playwright Exercise Test

By default, Playwright only runs tests in the `tests` folder. To run a Playwright exercise file, use this command in your terminal:

```
npx playwright test exercises/playwright-exercises/01_open_page.spec.ts
```

Replace `01_open_page.spec.ts` with the name of the Playwright exercise you want to run.

## Folder Structure

- `tests/` — Example test files.
- `playwright.config.ts` — Playwright configuration.
- `tsconfig.json` — TypeScript configuration.
- `package.json` — Project metadata and scripts.

## Security and Compliance

- No secrets or credentials are hardcoded.
- Inline comments provided for complex code.
- AI-generated files include a header note.


## Project Files Explained

Here is a simple explanation of the main files in this project:

- **package.json**: Lists the tools and libraries your project uses. Also contains scripts to run tasks like tests.
- **package-lock.json**: Keeps track of the exact versions of those tools and libraries to make sure everyone uses the same ones.
- **playwright.config.ts**: Settings for how Playwright runs your tests (e.g., which browser, timeouts).
- **tsconfig.json**: Settings for how TypeScript works in your project (e.g., which files to include, language options).
- **README.md**: This file! It explains what the project is and how to use it.
- **.gitignore**: Tells Git which files/folders to ignore (not track in version control).
- **tests/**: Folder where your test scripts live.
- **exercises/**: Folder with beginner exercises and guides.

If you see a file and don’t know what it does, check here or ask for help. Most files are there to help your code run smoothly and keep things organized.



## Learn More

- [Playwright Docs](https://playwright.dev/docs/intro)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [TypeScript Basics for Testers](./guides/typescript-basics.md)
- [Git Basics for Beginners](./guides/git-basics.md)
