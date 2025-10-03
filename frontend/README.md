# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Features

- Lightweight: No heavy UI frameworks - uses only vanilla CSS and React
- Modern UI: Clean, responsive design with KAVIA brand styling
- Fast: Minimal dependencies for quick loading times
- Simple: Easy to understand and modify

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

## Navigation and Screens

A global navigation bar is available at the top of the app with the following routes:
- `/` Home (index of screens)
- `/take-this-jobs` Take This Jobs screen (converted from static assets)
- `/jobs-detail-open` Jobs Detail - Open screen (converted from static assets)
- `/profile` Profile screen (converted from static assets)
- `/download-here` Download Here screen (converted from static assets)

The Home page lists all screens with their routes and original source filenames.

## Assets

All images required by these screens are served from `public/assets/...`.
The images were copied from `assets/figmaimages` to avoid broken references.
Page-specific CSS is located in `src/styles/`.

## Development Notes

- Converted pages use JSX with `className` attributes and closed tags.
- Inline scripts from the original static HTML are removed; minimal behavior is provided via `src/utils/appInteractions.js` as needed.
- Each page wraps content in a scoped root class to reduce CSS leakage across pages.

## Tests and Builds

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

## Learn More

To learn React, check out the React documentation: https://reactjs.org/
