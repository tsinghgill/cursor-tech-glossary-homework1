import { describe, it, expect } from 'vitest';
import { glossaryData, filterGlossary } from './glossary-exports.js';

describe('filterGlossary', () => {
    it('should return all entries when query is empty', () => {
        const result = filterGlossary('');
        expect(result).toEqual(glossaryData);
        expect(result.length).toBe(glossaryData.length);
    });

    it('should filter by term (case-insensitive)', () => {
        const result = filterGlossary('api');
        expect(result.length).toBeGreaterThan(0);
        expect(result.some(entry => entry.term.toLowerCase().includes('api'))).toBe(true);
    });

    it('should filter by description keyword', () => {
        const result = filterGlossary('container');
        expect(result.length).toBeGreaterThan(0);
        expect(result.some(entry => 
            entry.description.toLowerCase().includes('container')
        )).toBe(true);
    });

    it('should filter by tag', () => {
        const result = filterGlossary('backend');
        expect(result.length).toBeGreaterThan(0);
        expect(result.every(entry => 
            entry.tags.some(tag => tag.toLowerCase().includes('backend'))
        )).toBe(true);
    });

    it('should return empty array when no matches found', () => {
        const result = filterGlossary('nonexistentterm12345');
        expect(result).toEqual([]);
        expect(result.length).toBe(0);
    });

    it('should handle partial matches in term', () => {
        const result = filterGlossary('typescript');
        expect(result.length).toBeGreaterThan(0);
        expect(result.some(entry => 
            entry.term.toLowerCase().includes('typescript')
        )).toBe(true);
    });
});

