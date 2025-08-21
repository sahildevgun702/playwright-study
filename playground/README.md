# Playground Area

This folder is for **experimentation and practice**. Feel free to:

- Create new test files
- Modify existing examples
- Try different approaches
- Break things and learn from it!

## Guidelines:

1. **Name your files clearly**: Use your name or team name
   - `john-login-test.spec.ts`
   - `team-a-practice.spec.ts`
   - `experimental-api-tests.spec.ts`

2. **Copy and modify**: Start by copying files from `exercises/` or `tests/`

3. **No rules**: This is your space to learn and experiment

4. **Git workflow**: 
   - Create your own branch: `git checkout -b playground/your-name-experiments`
   - Commit your playground files to YOUR branch (not main)
   - Push your branch: `git push origin playground/your-name-experiments`
   - This keeps your experiments separate from the main codebase

5. **Privacy options**: Files starting with `personal-` or `temp-` can be ignored by Git (see main .gitignore)

## Getting Started:

```bash
# Make sure you're in the project directory (where package.json is located)
cd playwright-study

# Copy an existing test to start experimenting
cp exercises/playwright-exercises/01_open_page.spec.ts playground/my-first-experiment.spec.ts

# Run your playground tests (direct Playwright command)
npx playwright test playground/

# Or run with visible browser (recommended for learning)
npx playwright test playground/ --headed

```

