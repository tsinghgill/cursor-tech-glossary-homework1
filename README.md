# Tech Glossary Micro-Site

A lightweight single-page glossary of technical terms built with vanilla JavaScript, HTML, and CSS.

## Features

- Display 5-8 technical terms with descriptions and tags
- Search/filter functionality to find entries by term, description, or tags
- Responsive design with Tailwind CSS
- Accessible and readable card-based layout

## Running the Project

Simply open `index.html` in a web browser. No build process required.

## Testing

This project uses [Vitest](https://vitest.dev/) for unit testing.

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run
```

### Test Coverage

The test suite includes:
- Empty query handling
- Case-insensitive term filtering
- Description keyword filtering
- Tag-based filtering
- No matches scenario
- Partial match handling

## Development

This project was built using Cursor AI with the following modes:
- **Agent Mode**: Initial project scaffolding
- **Ask Mode**: Visual design improvements with selection-based editing
- **Plan Mode**: Search filter feature implementation
- **Custom Commands**: Project-specific styling command (`/exec-review-polish`)

