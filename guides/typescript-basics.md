# TypeScript Basics for Testers

This guide explains the most important TypeScript concepts you’ll see in your automation exercises, using simple language and examples.

---

## What is TypeScript?
TypeScript is a programming language. It looks a lot like JavaScript, but helps you catch mistakes early. We use it to write our automation scripts.

---

## Basic Concepts

### 1. Variables
A variable is a name for a value. Think of it as a box where you store something.
```typescript
let name = 'Google'; // We put the word 'Google' in a box called 'name'
```

### 2. Functions
A function is a set of instructions you can run. It’s like a recipe.
```typescript
function sayHello() {
  console.log('Hello!'); // This prints Hello! to the screen
}
```

### 3. Imports
We use `import` to bring in tools from other files or libraries.
```typescript
import { test, expect } from '@playwright/test'; // Get Playwright's test tools
```

### 4. Comments
Comments are notes in the code. They help explain what’s happening. The computer ignores them.
```typescript
// This is a comment
```

### 5. Test Case
A test case is a script that checks if something works.
```typescript
test('Check something', async ({ page }) => {
  // Steps go here
});
```

### 6. Strings
A string is just text, written between quotes.
```typescript
let website = 'https://www.google.com';
```

### 7. Await
`await` means "wait for this step to finish before moving on." It’s used for actions that take time, like opening a web page.
```typescript
await page.goto('https://www.google.com'); // Wait for the page to open
```

---

## Tips for Beginners
- Read the comments in each exercise—they explain what’s happening.
- Don’t worry about memorizing everything. Focus on understanding the steps.
- Try changing things and see what happens!
- If you get stuck, ask for help or search online.


