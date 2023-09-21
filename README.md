# Build guide

1. Clone [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci.git) repository
1. Open `lighthouse-ci/scripts/build-app.js` and disable JS minification by setting the `minify` to `false`
1. Execute `npx lerna run --scope @lhci/viewer build` command to build viewer module
1. Go to `lighthouse-ci/packages/viewer/dist` folder and copy all the content inside
1. Go to `vividus-lighthouse-viewer-adaptation` repository and create a new branch using `viewer-<lighthouse-ci commit hash used to build dist>` pattern
1. Past previously copied content to current folder and commit changes using `Build: <lighthouse-ci commit hash used to build dist>` message format
1. Open `chunks/entry-<rand>.js` bundle and replace `baseReport` initialization in `App` component with the following code:

    ```
    const [baseReport, setBaseReport] = h2({
      lhr: __LIGHTHOUSE_JSON_BASE__
    });
    ```

1. Open `chunks/entry-<rand>.js` bundle and replace `compareReport` initialization in `App` component with the following code:

    ```
    const [compareReport, setCompareReport] = h2({
      lhr: __LIGHTHOUSE_JSON_COMPARE__
    });
    ```

1. Open `index.html` file and add the following script after `<div id="preact-root"></div>` element:

    ```
    <script type="application/javascript">
        window.__LIGHTHOUSE_JSON_BASE__ = ${baseline};
        window.__LIGHTHOUSE_JSON_COMPARE__ = ${checkpoint};
    </script>
    ```

1. Perform the following replacements in `index.html` file
    * `./chunks/` should be replaced with `../../webjars/viewer/chunks/`
    * `assets/` should be replaced with `../../webjars/viewer/assets/`
1. Perform the following replacements in `chunks/entry-<rand>.js` file
    * `./assets/` should be replaced with `../../webjars/viewer/assets/`
    * `chunks/` should be replaced with `../../webjars/viewer/chunks/`
1. Perform the following replacements in `chunks/entry-<rand>.css` file
    * `../assets/` should be replaced `../../viewer/assets/`
    * `chunks/` should be replaced with `../../webjars/viewer/chunks/`
1. Commit the changes using `Customization` message format
1. Minify `chunks/entry-<rand>.js` using [JS minification tool](https://www.toptal.com/developers/javascript-minifier) and replace `chunks/entry-<rand>.js` file content with the minified content
1. Commit the changes using `Minified` message format
1. Push the branch
