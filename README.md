# Semantic HTML Contact Form with LocalStorage

This is a simple semantic and accessible contact form built using **HTML**, **SCSS**, and **vanilla JavaScript**, styled with [Pico.css](https://picocss.com/). It demonstrates how to:

- Use semantic HTML structure and accessible labeling.
- Compile SCSS into CSS using `sass`.
- Use `localStorage` to persist multiple form submissions.
- Run a live development server with `live-server`.

## Features

- Accessible, semantic markup (with skip link support).
- Responsive layout with `pico.indigo` theme.
- Submits first and last name fields and saves them in the browser's `localStorage`.
- Supports **multiple entries** using an array of objects.
- Uses `JSON.stringify` and `JSON.parse` to store and retrieve structured data.

## How It Works

1. User fills in **First Name** and **Last Name**.
2. On form submission:
   - Data is saved as an object with `firstName`, `lastName`, and `submittedAt`.
   - The object is pushed into a persistent array stored in `localStorage`.
3. The form resets and stays ready for new entries.

## Scripts

```bash
npm run dev
