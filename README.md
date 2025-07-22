# Cypress Workshop Assistant

A comprehensive workshop project for learning Cypress end-to-end testing framework.

## Overview

This project provides hands-on exercises and examples to help developers master Cypress testing capabilities, from basic test writing to advanced testing patterns.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Basic JavaScript knowledge
- Understanding of web development concepts

## Installation

```bash
# Clone the repository
git clone <repository-url>
cd qa-WorkshopAssistant

# Install dependencies
npm install

# Install Cypress
npm install cypress --save-dev
```

## Project Structure

```
qa-WorkshopAssistant/
├── cypress/
│   ├── e2e/           # Test specifications
│   ├── fixtures/      # Test data files
│   ├── support/       # Custom commands and utilities
│   └── screenshots/   # Test failure screenshots
├── src/               # Sample application (if applicable)
├── cypress.config.js  # Cypress configuration
└── package.json
```

## Getting Started

1. **Open Cypress Test Runner:**
    ```bash
    npx cypress open
    ```

2. **Run tests in headless mode:**
    ```bash
    npx cypress run
    ```

3. **Run specific test file:**
    ```bash
    npx cypress run --spec "cypress/e2e/example.cy.js"
    ```

## Workshop Modules

### Module 1: Cypress Basics
- Setting up your first test
- Understanding Cypress commands
- Working with selectors

### Module 2: Advanced Testing
- Custom commands
- Page Object Model
- API testing

### Module 3: Best Practices
- Test organization
- Data management
- CI/CD integration

## Available Scripts

```bash
npm run cypress:open    # Open Cypress Test Runner
npm run cypress:run     # Run tests headlessly
npm run test           # Run all tests
```

## Configuration

Cypress configuration is managed in `cypress.config.js`. Key settings include:

- Base URL for tests
- Viewport dimensions
- Test file patterns
- Screenshot/video settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new features
5. Submit a pull request

## Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Best Practices Guide](https://docs.cypress.io/guides/references/best-practices)
- [Cypress Examples](https://github.com/cypress-io/cypress-example-kitchensink)

## License

This project is licensed under the MIT License.