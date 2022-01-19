# Shopify_IC

Spacestagram: Image-sharing - Front End Challenge - Summer 2022

## How to use

1. Run `yarn install`
1. Run `yarn start` to check that everything is running as expected

## Scripts

This template includes some basic yarn scripts:

-   **`webpack`:** Alias for webpack that includes the env variable for
    `tsconfig.json` (see [here](https://webpack.js.org/configuration/configuration-languages/#typescript))
-   **`start`:** Starts a webpack development server
-   **`build`:** Creates a webpack production build
-   **`lint`:** Runs eslint to check the code
-   **`format`:** Runs `prettier` and `import-sort` to format the code
-   **`test`:** Runs jest
-   **`test:watch`:** Runs jest on watch mode

## Path aliases

This template uses path aliases for the project.

**_IMPORTANT_**: `tests` folder is included in
[`tsconfig.json`](tsconfig.json) to allow VS Code to give type hints
on tests, but it does not affect the final bundle size
