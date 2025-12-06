# ControlUp – Playwright + TypeScript Tests

End-to-end and API tests for a demo setup using **Playwright**, **TypeScript**, **ESLint 9**, and **Prettier**.

- **UI tests**: against the [SauceDemo](https://www.saucedemo.com) sample app  
- **API tests**: against the [AirportGap](https://airportgap.com) demo API  

---

## Tech Stack

- [Playwright](https://playwright.dev/) (with HTML report & traces)
- TypeScript
- ESLint 9 (flat config)
- Prettier
- Node.js + npm

---

## Project Structure

```text
.
├─ tests/
│  ├─ ui-tests.spec.ts        # UI tests (SauceDemo)
│  └─ api-tests.spec.ts       # API tests (AirportGap)
├─ helpers/
│  ├─ ui
│  │  ├─ auth.spec.ts           # Shared login functionality
│  │  └─ inventory.spec.ts      # Light POM-like helper for Inventory page
├─ playwright.config.ts       # Playwright config + projects
├─ package.json
````

The Playwright config defines separate projects for:

* **UI (desktop)**: Chromium, Firefox, WebKit
* **UI (mobile)**: Mobile Chrome (Pixel 5), Mobile Safari (iPhone 12)
* **API**: AirportGap tests (no browser, just HTTP client)

---

## Getting Started

### Prerequisites

* **Node.js** (LTS recommended, e.g. 18+)
* **npm** (comes with Node.js)

Check versions:

```bash
node -v
npm -v
```

### Install Dependencies

Install all project dependencies:

```bash
npm install
```
---

## Running Tests

### Run All Playwright Tests

Runs every configured project (UI + API):

```bash
npm test
# or
npx playwright test
```

### Run Only UI Tests (All Devices)

```bash
npm run test:ui
```

This executes the UI suite against:

* Desktop Chromium, Firefox, WebKit
* Mobile Chrome (Pixel 5)
* Mobile Safari (iPhone 12)

### Run Only Desktop UI Tests

```bash
npm run test:ui:desktop
```

### Run Only Mobile UI Tests

```bash
npm run test:ui:mobile
```

### Run Only API Tests

```bash
npm run test:api
```

---

## Debugging & Watch Mode (Local)

### Debug a Single UI Project (headed)

```bash
npm run test:ui:debug
```

Starts Playwright in headed mode with the inspector enabled to help debug failing scenarios.

### Interactive UI Mode (Watch)

```bash
npm run test:ui:watch
```

Opens the Playwright UI Test Runner for quick feedback and interactive reruns.

---

## Linting & Formatting

### Lint TypeScript Files

```bash
npm run lint
```

Automatically fix simple lint issues:

```bash
npm run lint:fix
```

### Format with Prettier

Format all supported files:

```bash
npm run format
```

Check formatting without modifying files:

```bash
npm run format:check
```

---

## Reports

After a test run, Playwright generates an HTML report in the `playwright-report` folder.

To open the latest report locally:

```bash
npx playwright show-report
```