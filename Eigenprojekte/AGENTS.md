AGENTS.md

Scope & Purpose
- Scope: This guidance applies only to files under `Ferienprojekte/`. Agents must not change files outside
  this directory unless the repo owner explicitly approves.
- Purpose: Provide build, lint, test commands and coding guidelines so automated agents can operate
  consistently and safely in this repository.

Repository snapshot (what I inspected)
- `Ferienprojekte/Arrays-Ueben/` — .NET console project (`Arrays-Ueben.csproj`, `Program.cs`).
- Static web projects (HTML/CSS/JS):
  - `2025-08-16-food-generator/`
  - `2025-06-28-Uno/`
  - `2024-10-22-Hangman/`
  - `2024-08-11Ferien-projekt-vendingmachine/`
- Python scripts:
  - `2025-02-08-python/main.py`
  - `2024-10-27-Python/main.py`
- No test projects or CI config were found inside `Ferienprojekte/` at the time of inspection.
- No `.cursor/rules/` or `.github/copilot-instructions.md` found under `Ferienprojekte/`. If present
  elsewhere, provide paths and agents will incorporate them.

1) Build / Lint / Test commands (use repo root or explicit paths)
- C# (.NET) — Arrays-Ueben
  - Build:
    `dotnet build Ferienprojekte/Arrays-Ueben/Arrays-Ueben.csproj`
  - Run (console app):
    `dotnet run --project Ferienprojekte/Arrays-Ueben/Arrays-Ueben.csproj`
  - Format (install `dotnet-format` once):
    `dotnet tool install -g dotnet-format`
    `dotnet format Ferienprojekte/Arrays-Ueben/Arrays-Ueben.csproj`
  - Tests (if added later):
    `dotnet test Ferienprojekte/tests/MyTests.csproj`
  - Run a single test (example using FullyQualifiedName):
    `dotnet test Ferienprojekte/tests/MyTests.csproj --filter "FullyQualifiedName~Namespace.ClassName.TestMethodName"`

- Python
  - Run script:
    `python Ferienprojekte/2025-02-08-python/main.py`
  - Format & lint (recommended):
    `pip install black flake8`
    `black .`
    `flake8 .`
  - Tests (pytest):
    `pytest path/to/test_file.py`
    Single test by substring: `pytest -k "test_name_substring"`

- Static web projects (HTML/CSS/JS)
  - Serve locally (quick check):
    From `Ferienprojekte/` run: `python -m http.server 8000` and open
    `http://localhost:8000/<project-folder>/index.html` in a browser.
  - If Node tooling is added:
    `npm install`
    `npm run lint`    # expects eslint configured
    `npm run format`  # expects prettier configured
    `npm test`
  - Single test (Jest example): `npm test -- -t "test name"` or `npx jest -t "test name"`

Single-test summary
- .NET: `dotnet test <test-project> --filter "FullyQualifiedName~Namespace.Class.TestName"`
- pytest: `pytest -k "test_name"`
- Jest: `npx jest -t "test name"`

2) Code style & conventions (agents must follow for edits inside `Ferienprojekte/`)
- General rules
  - Make small, focused changes; one logical change per commit/PR.
  - Preserve existing conventions. If none exist, follow the language-specific rules below.
  - Never add secrets to the repo. Use environment variables and request values from the owner.
  - Ask before large refactors or changes spanning multiple projects.

- C# (Arrays-Ueben)
  - Files & namespaces:
    - One public type per file.
    - Prefer file-scoped namespaces for new files: `namespace ArraysUeben;`
  - Using directives:
    - Order: `System.*` first, then third-party, then project namespaces.
    - Remove unused `using`s.
  - Formatting & tooling:
    - Use `dotnet format` to enforce style. Indent with 4 spaces; avoid tabs.
    - Keep line length to ~120 chars max.
  - Naming:
    - Types, methods, properties: `PascalCase`.
    - Parameters and local variables: `camelCase`.
    - Private fields: `_camelCase` (leading underscore).
    - Async methods: suffix with `Async`.
  - Types & nullability:
    - Prefer nullable reference types where practical; validate public API args with
      `ArgumentNullException.ThrowIfNull(param)`.
    - Use `var` when the type is obvious; otherwise prefer explicit types for clarity.
  - Error handling:
    - Throw domain-specific exceptions. Do not catch `Exception` unless adding context and
      rethrowing or logging.
    - Preserve stack traces (use `throw;` or `throw new Exception("msg", ex)` with care).
  - Logging:
    - Use `ILogger<T>` for applications with lifecycle; `Console.WriteLine` is acceptable in
      short exercises but avoid it in larger programs.

- JavaScript (static web projects)
  - Modules & imports:
    - Use ES modules (`import`/`export`) for new code.
    - Keep modules small and single-responsibility.
  - Formatting & linting:
    - Prefer Prettier (2 spaces, print width 100–120) and ESLint (`eslint:recommended` +
      `no-unused-vars`, `no-undef`, `prefer-const`).
  - Naming:
    - `camelCase` for variables/functions; `PascalCase` for classes.
    - Constants: `UPPER_SNAKE_CASE` for well-known constants; prefer `const` keyword.
  - Error handling:
    - Always handle promise rejections. Use `try/catch` with `async/await`.
    - Fail fast for invalid assumptions (throw meaningful errors).
  - DOM & performance:
    - Batch DOM reads/writes. Debounce or throttle heavy handlers.
  - Accessibility:
    - Use semantic HTML; provide `alt` attributes for images and labels for inputs.

- HTML/CSS
  - Use semantic HTML tags (`main`, `header`, `nav`, `section`, `footer`).
  - Scoped styles: keep styles per project to avoid cross-project collisions.
  - Class naming: readable names; consider BEM for larger projects.
  - Formatting: be consistent (2 spaces often used for CSS); add comments for non-obvious rules.

- Python
  - Style: follow PEP8. Use `black` for formatting and `flake8` for linting.
  - Naming: `snake_case` for functions and variables; `PascalCase` for classes.
  - Error handling: raise specific exceptions with helpful messages.
  - CLI scripts: return non-zero exit codes on failure.

3) Tests & CI guidance
- Add a small xUnit test project for `Arrays-Ueben` under `Ferienprojekte/tests/` to enable CI
  checks and allow agents to validate behavior.
- Tests should be deterministic and fast; mock external I/O where practical.
- Agents must run `dotnet build` and `dotnet test` locally before committing changes that affect
  runtime behavior.

4) Git & commit behavior (agents)
- Commit messages:
  - Keep subject <= 50 chars with an optional body. Start with a verb: `add:`, `fix:`, `refactor:`.
  - Example: `fix: validate null input in Program.Main`
- Branching:
  - Use feature branches: `feat/<short-desc>` or `fix/<short-desc>`.
- Safety:
  - Do not commit secrets. If a secret is required, instruct the user to provide it via env vars.
  - Avoid destructive git commands: no `git reset --hard`, no forced pushes, no amending pushed commits
    without explicit approval.

5) Cursor / Copilot rules
- No `.cursor/rules/` or `.github/copilot-instructions.md` files were found within `Ferienprojekte/`.
  If you maintain such rules elsewhere, provide their paths or file contents and agents will obey
  them verbatim and these will be included in this document.

6) Recommended agent workflow (for edits inside `Ferienprojekte/`)
1. Read this `AGENTS.md`.
2. Run the relevant build or server:
   - `dotnet build Ferienprojekte/Arrays-Ueben/Arrays-Ueben.csproj` or
   - `python -m http.server` from `Ferienprojekte/` for static sites, or
   - `python path/to/script.py` for Python scripts.
3. Add or run tests; ensure they pass locally.
4. Make a minimal, well-scoped change.
5. Run build/tests again.
6. Commit on a feature branch with a concise message and open a PR if appropriate.
7. If a change impacts many files or CI, ask the repo owner before pushing.

7) Recommended incremental improvements (optional)
1. Add a small xUnit test project for `Arrays-Ueben` to make automated verification possible.
2. Add a top-level `.editorconfig` and adopt `dotnet format` for consistent C# formatting.
3. Add `package.json` + `eslint` + `prettier` to any JS-heavy project that will grow.

Contact / next steps
- I created this file `Ferienprojekte/AGENTS.md` and it contains only guidance for the
  `Ferienprojekte/` folder. If you want further changes (naming specifics, stricter rules,
  CI integration), tell me which area to update.

Agent safety note
- Agents must not modify files outside `Ferienprojekte/` without explicit user approval.
- Agents must avoid destructive git operations and must never introduce secrets.

End of file.
