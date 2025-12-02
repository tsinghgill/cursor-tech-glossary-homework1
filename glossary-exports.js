// Export file for tests
// Since glossary.js can't use ES modules in browser (file:// CORS issue),
// we define the exports here for test environment only

// Import the file as a module for tests
import * as glossaryModule from './glossary.js';

// Re-export for tests
export const { glossaryData, renderGlossary, filterGlossary } = glossaryModule;

