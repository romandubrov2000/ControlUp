# ControlUp – Playwright + TypeScript Tests

End-to-end and API tests for a demo setup using **Playwright**, **TypeScript**, **ESLint 9**, and **Prettier**.

- **UI tests**: against the [SauceDemo](https://www.saucedemo.com) sample app
- **API tests**: against the [AirportGap](https://airportgap.com) demo API

---

## Tech Stack

- [Playwright](https://playwright.dev/)
- TypeScript
- ESLint&Prettier
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
└─ ...
```
