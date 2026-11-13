# Planetary Exploration

A bilingual science-exploration site about six Earth analog locations used to study specific lunar and Martian terrain questions. The site distinguishes documented observations from illustrative game content and approximate map points.

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

## Language and accessibility

Use the language button to switch the interface and game between Arabic and English. The setting is saved in the browser. The in-game control remains available during missions and while game panels are open. Page images, map labels, dialogs, and game sample reports are localized alongside visible text.

## Science and data limits

Map coordinates are approximate reference points, not surveyed boundaries or measurement stations. NASA imagery documents scenes and locations; it is not itself a soil, mineral, or climate measurement. Game samples are educational models, not physical specimens or laboratory results. Earth analog sites represent specific test questions, not complete replicas of the Moon or Mars.

## Deployment

`.github/workflows/pages.yml` bundles the game and publishes `index.html`, `src/`, `assets/`, and `vendor/` with GitHub Pages after a push to `main` or `master`.