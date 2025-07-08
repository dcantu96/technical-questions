## Technical questions and answers

#### Written in Typescript and deno with a simple CI using codecov and github actions

![CI](https://img.shields.io/github/actions/workflow/status/dcantu96/technical-questions/ci.yml?branch=main&style=flat-square)
[![codecov](https://codecov.io/gh/dcantu96/technical-questions/branch/main/graph/badge.svg?style=flat-square)](https://codecov.io/gh/dcantu96/technical-questions)

## Local Development

### Prerequisites

- [Deno](https://deno.land/) (version 2.3.1 or later)

### Running Tests Locally

To run all tests:

```bash
deno test
```

To run tests with coverage:

```bash
deno test --coverage=coverage
```

To generate an HTML coverage report:

```bash
deno test --coverage=coverage
deno coverage ./coverage --html
```

To run a specific test file:

```bash
deno test add-two-numbers/main.test.ts
```

### Code Quality

To run the linter:

```bash
deno lint
```

To format code:

```bash
deno fmt
```
