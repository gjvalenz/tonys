# About

This is the source code for my Tony's Pizza website. I created the design myself as well.

Please feel free to fork and use my site as a template! Credit would be appreciated.

[Tony's](https://tonys-pizza.surge.sh/) is written in Svelte with Tailwind CSS. It is a static single spage application that is hosted using Surge.

# How To Run

## Local

##### Development
Run `npm i && npm run dev`.

##### Production
Run `npm i && npm run build && npm run preview`.

#### Build

Once you run `npm run build`, you will have access to a build directory. The build directory will contain the static files necessary for the application to run in production. If you wish to modify the application, it may be beneficial to modify `svelte.config.js` and replace the imported `@sveltejs/adapter-static` and its corresponding `adapter` logic.