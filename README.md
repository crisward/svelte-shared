# Svelte Shared

Simple example app of how to build svelte so it can be linked to from separate pre-bundled components.

This could proved useful if we want to build duocms8 independantly of the site code.

## Setup

```
git clone git@git.duodesign.co.uk:mess/svelte-shared.git
cd svelte-shared
npm install
npm run build
```

## View with

```
npx serve
```

## Notes

Key things to note are

* See index.html from the use of import maps, these link the import statements with the correct bits of code
* See rollup.config.js to see how the bundles are created.

Could probably move the svelte step to it's own rollup config and npm script as this only really needs to be done if svelte is updated.
