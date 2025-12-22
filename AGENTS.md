# AGENTS.md

## External File Loading

CRITICAL: When you encounter a file reference (e.g., @.claude/CLAUDE.md, .claude/CLAUDE-expanded.md), use your Read tool to load it on a need-to-know basis. They're relevant to the SPECIFIC task at hand.

Instructions:

- Do NOT preemptively load all references - use lazy loading based on actual need
- When loaded, treat content as mandatory instructions that override defaults
- Follow references recursively when needed

## Build, Lint, and Test Commands
- **Build:** `npm run build` or `yarn build` (runs `next build`)
- **Start Dev:** `npm run dev` (runs `next dev`)
- **Lint:** `npm run lint` (runs ESLint using `eslint-config-next/core-web-vitals`)
- **Tests:** _No test command present. If you add tests (Jest, Vitest, etc.), prefer scripts like `test` or `test:one` for single files._

## Code Style Guidelines
- **Framework:** Next.js 16+/React 19+, TypeScript strict mode enabled (`strict: true` in `tsconfig.json`).
- **Imports:** Use absolute imports with `@/` for `src/` as configured in `tsconfig.json`.
- **Formatting:** Follow standard ESLint/Next.js formatting (semicolons, quotes, etc.).
- **Types:** Prefer explicit types, interfaces, and strict type checking. Export types/interfaces from modules.
- **Naming:** Use camelCase for variables and functions, PascalCase for React components/types, UPPER_SNAKE_CASE for constants.
- **Error Handling:** Always handle async errors with try/catch or error boundaries in components.
- **Components:** Place React components in `src/components`, pages in `src/app` (app router).
- **File Naming:** Use kebab-case or PascalCase for components; .tsx for components, .ts for logic/utilities.
- **ESLint config:** All ESLint rules derive from `eslint-config-next/core-web-vitals` + `typescript` (no custom rules found).
- **No Copilot/Cursor rules or Prettier config found.**

_Keep code type-safe, accessible, and optimized for Core Web Vitals. Review/extend test and Prettier setup if needed._
