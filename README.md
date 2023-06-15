# Human Exponent Frontend Task
##
##

[![Netlify Status](https://api.netlify.com/api/v1/badges/781d7296-e49c-44e3-bf21-74cc2dc33d6f/deploy-status)](https://app.netlify.com/sites/human-exponent/deploys)

## Clone repo & install dependencies

Clone the repo `git clone https://github.com/mzalevski/human-exponent-frontend-task.git`<br />
and then install the dependencies with `npm install` or `yarn install` in the project directory<br />

## Available Scripts

In the project directory, you can run:<br />

### `npm run dev`

Builds tailwindCSS classes and then runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.<br />

### `npm test`

Launches the test runner in the interactive watch mode.<br />

### `npm run build`

Builds tailwindCSS classes and then builds the app for production to the `build` folder.<br />
If `process.env.PURGE === 'true'` then unused css classes generated by tailwind<br />
are purged with postcss plugin (see `/postcss.config.js`, loc 5). It's recommended<br />
to set PURGE to `'true'` for production.<br />
