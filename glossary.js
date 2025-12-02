// Glossary data and rendering logic

const glossaryData = [
    {
        term: "API (Application Programming Interface)",
        description: "A set of protocols and tools for building software applications. APIs define how different software components should interact, allowing developers to access functionality or data from other services or applications.",
        tags: ["backend", "integration", "web"]
    },
    {
        term: "Microservices",
        description: "An architectural approach where applications are built as a collection of small, independent services that communicate over well-defined APIs. Each service is responsible for a specific business function.",
        tags: ["architecture", "backend", "scalability"]
    },
    {
        term: "TypeScript",
        description: "A superset of JavaScript that adds static type definitions. TypeScript compiles to plain JavaScript and helps catch errors during development through type checking.",
        tags: ["language", "frontend", "types"]
    },
    {
        term: "GraphQL",
        description: "A query language and runtime for APIs that allows clients to request exactly the data they need. Unlike REST, GraphQL provides a single endpoint and lets clients specify the structure of the response.",
        tags: ["api", "query", "backend"]
    },
    {
        term: "Docker",
        description: "A platform for containerization that packages applications and their dependencies into lightweight, portable containers. Containers ensure consistent behavior across different environments.",
        tags: ["devops", "containers", "deployment"]
    },
    {
        term: "CI/CD (Continuous Integration/Continuous Deployment)",
        description: "A set of practices that automate the integration and deployment of code changes. CI automatically tests code when changes are merged, while CD automates the release process to production.",
        tags: ["devops", "automation", "testing"]
    },
    {
        term: "JWT (JSON Web Token)",
        description: "A compact, URL-safe token format used for securely transmitting information between parties. JWTs are commonly used for authentication and authorization in web applications.",
        tags: ["security", "authentication", "backend"]
    },
    {
        term: "Serverless",
        description: "A cloud computing model where cloud providers manage server infrastructure. Developers write and deploy code without worrying about server provisioning, scaling, or maintenance.",
        tags: ["cloud", "architecture", "scalability"]
    }
];

// Filter glossary entries by search query
function filterGlossary(query) {
    if (!query || query.trim() === '') {
        return glossaryData;
    }
    
    const searchTerm = query.toLowerCase().trim();
    
    return glossaryData.filter(entry => {
        // Search in term
        if (entry.term.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // Search in description
        if (entry.description.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // Search in tags
        if (entry.tags.some(tag => tag.toLowerCase().includes(searchTerm))) {
            return true;
        }
        
        return false;
    });
}

// Render glossary entries
function renderGlossary(data = glossaryData) {
    const container = document.getElementById('glossary-container');
    if (!container) return;
    
    if (data.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12">
                <p class="text-gray-500 text-lg">No matching entries found.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = data.map(entry => `
        <div class="glossary-card">
            <h2 class="glossary-term">${entry.term}</h2>
            <p class="glossary-description">${entry.description}</p>
            <div class="glossary-tags">
                ${entry.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Initialize on page load (only in browser environment)
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
        renderGlossary();
        
        // Set up search input handler
        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value;
                const filteredData = filterGlossary(query);
                renderGlossary(filteredData);
            });
        }
    });
}

// Note: No exports here - browser loads as regular script
// Tests import via glossary-exports.js which uses dynamic import

