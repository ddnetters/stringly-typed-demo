# Stringly-Typed Demo

This repository demonstrates the [stringly-typed](https://github.com/ddnetters/stringly-typed) GitHub Action - an AI-powered tool that validates UI strings against brand voice guidelines.

## What's Inside

- **`src/`** - Sample JavaScript/TypeScript files with UI strings
- **`content/`** - Sample markdown content
- **`.github/workflows/`** - GitHub Action workflow configuration
- **`STYLE_GUIDE.md`** - Brand voice guidelines for validation

## Try It Out

1. Fork this repository
2. Add your `OPENAI_API_KEY` as a repository secret
3. Make changes to any file with strings
4. Open a pull request and watch the action run!

## Example Violations

The `src/bad-examples.ts` file contains intentional violations:
- Overly technical jargon
- Inconsistent tone
- Strings that are too long

The `src/good-examples.ts` file shows compliant strings.

