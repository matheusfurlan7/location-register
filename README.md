![Node.js v22](https://img.shields.io/badge/Node.js-v22-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-FF69B4?style=for-the-badge&logo=prettier&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-F7B93E?style=for-the-badge&logo=vitest&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-1D63ED?style=for-the-badge&logo=vitest&logoColor=white)

# Location register

A location system that links countries, states, cities, and addresses, for lookup via postal code.

## Table of Contents

- [Overview](#overview)
- [Technologies](#technologies)
- [Tools](#tools)
- [Installation](#installation)
- [Scripts](#scripts)
- [Docker](#docker)
- [Contact](#contact)

## OverView

This project will join some geolocation relate country, state, city and address.
Brazil addresses have one postal code that just condense all points in one.
To optimize the process, an online query (via http) will be used that utilizes the postal code, returning the address (street, neighborhood, and city).

## Technologies

This project leverages the following core technologies:

- **Node.js** v22
- **TypeScript** for static typing and enhanced developer experience
- **Docker** for containerization
- **Vitest** for fast and efficient testing

<p align="left"> <img src="https://skillicons.dev/icons?i=nodejs,typescript,vitest,docker" /> </p>

## Tools

- [**TypeScript**](https://github.com/microsoft/TypeScript) - Adds static types to JavaScript.
- [**tsc-alias**](https://github.com/justkey007/tsc-alias) - Resolves TypeScript import aliases to absolute paths.
- [**Nodemon**](https://github.com/remy/nodemon) - Automatically restarts the server on file changes during development.
- [**ts-node**](https://github.com/TypeStrong/ts-node) - Runs TypeScript code directly without precompilation.
- [**ESLint**](https://github.com/eslint/eslint) - Lints JavaScript/TypeScript code to enforce consistent style and catch errors.
- [**Prettier**](https://github.com/prettier/prettier) - Code formatter for maintaining consistent styling.
- [**Husky**](https://github.com/typicode/husky) - Git hooks to enforce pre-commit checks.
- [**Lint-staged**](https://github.com/lint-staged/lint-staged) - Runs linters on staged files before commit.
- [**Vitest**](https://github.com/vitest-dev/vitest) - A fast testing framework for JavaScript and TypeScript.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** v22+ (or use NVM for version management)
- **Docker** (for containerization)
- **Git** (for version control)

### Setup

To get started, clone this repository and install dependencies:

```bash
git clone git@github.com:matheusfurlan7/location-register.git
cd location-register
npm install
```

## Scripts

This project includes the following predefined scripts for development and production workflows.

### Development

**Start development server with hot reload:**

```bash
npm run dev
```

This command runs the application in developer mode with nodemon for automatic restarts on file changes.

### Build

**Compile TypeScript for production:**

```bash
npm run build
```

This compiles TypeScript to JavaScript and rewrites path aliases for proper Node.js execution.

### Code Quality

**Run Husky to prepare Git hooks:**

```bash
npm run prepare
```

**Lint the code:**

```bash
npm run lint
```

Check for issues such as unused variables and improper code patterns.

**Fix linting issues automatically:**

```bash
npm run lint:fix
```

**Format code with Prettier:**

```bash
npm run format
```

Fix spacing and style issues automatically.

**Check formatting without changing:**

```bash
npm run format:check
```

**Run Tests with Vitest:**

```bash
npm run test
```

This runs all the tests and watches for new ones.

**Run tests once:**

```bash
npm run test:run
```

**Check test coverage:**

```bash
npm run test:coverage
```

## Docker

This project includes Docker configurations for both development and production environments.

Make sure Docker is installed before proceeding.`

### Development Mode

To run the project in a development Docker container with live reload:

```bash
# Build the Docker image for development
docker build -f Dockerfile.dev -t location-register-dev .

# Run the container with live reload and volume mount
docker run -it -v .:/app -p 3000:3000 location-register-dev
```

### Production Mode

To run the project in production mode:

```bash
# Build the production-ready Docker image
docker build -f Dockerfile.prod -t location-register-prod .

# Run the container in detached mode
docker run -d -p 3000:3000
```

### Dockerfile Breakdown

| Mode        | File              | Purpose                                   | Hot Reload | Dependencies     |
| ----------- | ----------------- | ----------------------------------------- | ---------- | ---------------- |
| Development | `Dockerfile.dev`  | Development setup with hot reload         | ✅ Yes     | All dependencies |
| Production  | `Dockerfile.prod` | Optimized build for production deployment | ❌ No      | Production only  |

### Useful Docker Commands

```bash
# List running containers
docker ps

# Stop a running container
docker stop <container_id>

# Remove a stopped container
docker rm <container_id>

# View logs of a container
docker logs -f <container_id>

# Access a container's shell
docker exec -it <container_id> sh

# Clean up unused images and containers
docker system prune -a
```

## Contact

Connect with me:

- [GitHub](https://github.com/matheusfurlan7)
- [Linkedin](https://www.linkedin.com/in/matheusfurlan7)
