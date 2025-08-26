/**
 * Exercise 2: Website Health Checker
 * 
 * OBJECTIVE:
 * Create a simple program that checks if a website is working and displays its title.
 * 
 * WHAT YOU'LL LEARN:
 * - Basic browser automation with Playwright
 * - Navigating to websites
 * - Getting page information (title)
 * - Printing results to console
 * - Basic error handling
 * 
 * INSTRUCTIONS:
 * 1. Open a browser using Playwright
 * 2. Visit a website (start with https://example.com)
 * 3. Get the page title and display it
 * 4. Print a success message
 * 5. Close the browser
 * 
 * EXPECTED OUTPUT:
 * Checking website: https://example.com
 * The website title is: Example Domain
 * Website is working!
 * 
 * BONUS CHALLENGES (try after basic version works):
 * - Check multiple websites in a loop
 * - Add error handling for failed websites
 * - Add timestamps to your output
 * - Take a screenshot of each website
 * 
 * HINTS:
 * - Use page.goto() to visit a website
 * - Use page.title() to get the page title
 * - Use console.log() to print messages
 * - Remember to use 'await' for async operations
 * 
 * TO RUN THIS EXERCISE:
 * npx playwright test exercises/playwright-exercises/02_website_health_checker.spec.ts --headed
 * 
 * COPY THIS FILE TO PLAYGROUND TO EXPERIMENT:
 * cp exercises/playwright-exercises/02_website_health_checker.spec.ts playground/my-health-checker.spec.ts
 */