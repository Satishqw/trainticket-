# Project Instructions

## Project Overview

- This is a small, framework-free movie-ticket booking demo that runs entirely in the browser.
- The application uses static HTML, CSS, and vanilla JavaScript; it has no backend, build system, package manager, or database.
- The main user flow is: choose a movie, enter a seat count, submit the form, and display a booking summary.
- The source consists of `index.html`, `styles.css`, and `script.js`. The root `README.md` is a placeholder and should not be treated as detailed documentation.

## Technology and Structure

- Use semantic HTML in `index.html`.
- Keep presentation styles in `styles.css` and behavioral logic in `script.js`.
- Use native DOM APIs only. Do not introduce dependencies or frameworks unless the user explicitly requests them.
- Preserve the existing page structure and element IDs when changing behavior, because `script.js` targets those IDs directly:
  - `booking-form`
  - `movie`
  - `seats`
  - `summary-text`
- Keep the fixed ticket price in `script.js` consistent with user-facing behavior unless a request explicitly changes pricing.

## Coding Conventions

- Prefer small, readable functions and existing vanilla JavaScript style.
- Use `const` and `let` appropriately; avoid introducing unnecessary classes or abstractions.
- Keep JavaScript and HTML free of inline scripts and inline styles; continue using the linked stylesheet and script.
- Preserve the existing classless/simple CSS style and the current visual layout unless the task requests a redesign.
- Escape or safely render dynamic content when adding features that interpolate user-controlled data.
- Validate seat counts according to the HTML constraints: integer values between 1 and 10.
- Prevent invalid form submissions and provide clear feedback for invalid input.
- Use descriptive names and keep changes scoped to the requested feature.

## Accessibility and UX

- Maintain an accessible label for every form control.
- Preserve keyboard usability and visible focus states.
- Use a clear, meaningful status or summary result after booking.
- Do not rely on color alone to communicate state.
- When changing layout, preserve a usable responsive flow at narrow viewport widths.

## Validation

- For browser behavior, serve the project with a simple local HTTP server and open `index.html` in a browser.
- Verify the movie selection, seat-count validation, submit behavior, and booking summary.
- Test both the minimum and maximum seat values and an invalid out-of-range or empty value.
- There is currently no automated test runner or lint configuration. Do not add tooling solely for a small change.
- If an automated test command or package manifest is added in the future, inspect it and use the narrowest relevant test or validation command.
