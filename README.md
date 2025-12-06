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
├─ playwright.config.ts       # Playwright config + projects
├─ package.json
└─ ...
```
