# Planetary Exploration

An English-language science-exploration site about six Earth analog locations used to study specific lunar and Martian terrain questions. The site distinguishes documented observations from illustrative game content and approximate map points.

## Project layout

```text
index.html                 GitHub Pages entry point
src/
	app.js                   Routes, pages, maps, and game flow
	game-samples.js          Sample catalog and bilingual sample copy
	i18n.js                  Arabic/English UI and dynamic-text localization
	space-game.js            Three.js and Cannon game-engine source
	styles.css               Site and game styles
assets/                    Images, crew portraits, and equipment artwork
vendor/                    Leaflet and the generated game-engine bundle
docs/                      Project notes and review documentation
.github/workflows/         GitHub Pages build and deployment
```

`index.html` stays at the repository root for GitHub Pages. `vendor/space-game.js` is generated from `src/space-game.js`; do not edit the generated bundle directly.

## Review the project

Start with `index.html` for the page structure, then follow `src/app.js` for site sections and the mission flow. The translation system is in `src/i18n.js`; game sample data and the 3D engine have their own source files in `src/`. Site images are grouped under `assets/` by use, and project-specific notes are kept in `docs/`.

## Run locally

```powershell
npm install
npm run build
npm start
```

Open `http://localhost:4173`. NASA GIBS map imagery and web fonts require an internet connection. Leaflet and the bundled game engine are served locally; `node_modules` is not deployed.
The development server binds to `127.0.0.1` by default and serves only the app entry point and public asset folders.

## Language and accessibility

The interface and game can switch between Arabic and English without reloading or restarting a mission. The language setting is saved in the browser, and the game localizes its live HUD, equipment, sample reports, alerts, and mission screens. The local assistant handles common greetings, small talk, and simple arithmetic; science answers use the project's local records and do not rely on an external AI service or live web search.

## Science and data limits

Map coordinates are approximate reference points, not surveyed boundaries or measurement stations. NASA imagery documents scenes and locations; it is not itself a soil, mineral, or climate measurement. Game samples are educational models, not physical specimens or laboratory results. Earth analog sites represent specific test questions, not complete replicas of the Moon or Mars.

## Deployment

`.github/workflows/pages.yml` bundles the game and publishes `index.html`, `src/`, `assets/`, and `vendor/` with GitHub Pages after a push to `main` or `master`.