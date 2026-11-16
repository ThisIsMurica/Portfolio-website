# Engineering Portfolio

Personal Electrical & Computer Engineering portfolio built with **React, Vite, and Tailwind CSS**. The website highlights projects spanning embedded systems, avionics, RF, sensing, and software.

## Sections

- **About and experience:** education and technical interests
- **Projects:** embedded flight management computer, ADS-B tracker, automated aviation weather station, and AeroBrief
- **Skills:** programming, embedded hardware, and development tooling
- **Contact:** professional contact and resume links

Project descriptions are maintained in [`src/components/Projects.jsx`](src/components/Projects.jsx). Some hardware projects are still in development; their code repositories will be linked when ready.

## Run locally

Requires a recent Node.js version and npm.

```bash
npm install
npm run dev
```

Open the local address shown by Vite. To check the production bundle:

```bash
npm run lint
npm run build
npm run preview
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

The Vite configuration uses the GitHub Pages base path `/Portfolio-website/`. Verify that Pages is configured for the expected deployment branch before publishing. The resume linked from the site is served from `public/resume.pdf`; review that PDF for currency and contact information before redeploying.

## Repository layout

```text
src/
  components/       Portfolio sections (Hero, Projects, Skills, etc.)
  App.jsx           Page composition
  main.jsx          React entry point
public/
  resume.pdf        Resume linked from the site
```

## Next improvements

- Link hardware projects as their standalone repositories become ready
- Add project photos, diagrams, and validation results
- Verify production deployment and responsive layout
