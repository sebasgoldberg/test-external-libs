# SAPUI5 External Library Usage Test

## Intro

This is a basic app example that shows how you can consume an external lib.

Particularly the used lib encapsulate:

- The babel polyfills nedded for async/await statements.
- MyControl.

The lib is consumed as node package and you can find its code in the following repository:

- [https://github.com/sebasgoldberg/external-libs.git](https://github.com/sebasgoldberg/external-libs.git)

## Code For Reuse The Library

You can found the specific code for reuse in the following files:

- `./webapp/index.html`:
This is only for test environment, you do not need this in SAP Gateway Server.
```html
    <!-- Here we told told to SAPUI5 where it can find our library resources using the attribute data-sap-ui-resourceroots -->
    <!-- Note that the library is loaded at bootstrap with attribute data-sap-ui-libs -->
    <script id="sap-ui-bootstrap"
        src="https://sapui5.hana.ondemand.com/1.52.13/resources/sap-ui-core.js"
        data-sap-ui-libs="sap.m,iamsoft.libs.external.polyfill"
        data-sap-ui-theme="sap_belize"
        data-sap-ui-compatVersion="edge"
        data-sap-ui-preload="async"
        data-sap-ui-resourceroots='{
            "sap.ui.demo.basicTemplate": "./",
            "iamsoft.libs.external.polyfill": "resources/external-libs/dist/"
            }'>
    </script>
```
Obiously `resources` was mapped with node_modules folder in `Grunfile.js` and external-libs was added as node package dependency.

- `./manifest.json`: This is the important part. We indicate our custom library as dependency.
```json
    "sap.ui5": {
        "dependencies": {
            "libs": {
                "<other library>": {},
                "iamsoft.libs.external.polyfill": {}
            }
        }
    }
```

- `./webapp/view.App.view.xml`: This is an example where is used one of the controls of the library.
```xml
    <mvc:View
        controllerName="sap.ui.demo.basicTemplate.controller.App"
        <!-- Here we define the namespace -->
        xmlns:pf="iamsoft.libs.external.polyfill.control"
        xmlns:mvc="sap.ui.core.mvc"
        displayBlock="true"
        xmlns="sap.m">
        <App>
            <pages>
                <Page
                    id="page"
                    title="{i18n>title}">
                    <content>
                        <!-- Here we use the control -->
                        <pf:MyControl/>
                    </content>
                </Page>
            </pages>
        </App>
    </mvc:View>
```

## Getting started

1.Install node.js (get it from [nodejs.org](http://nodejs.org/)).
  * If working behind a proxy, you need to configure it properly (HTTP_PROXY / HTTPS_PROXY / NO_PROXY environment variables)

2.Install grunt-cli globally

```sh
npm install grunt-cli -g
```

3.Clone the repository and navigate into it

```sh
git clone https://github.com/sebasgoldberg/test-external-libs.git
cd test-external-libs
```

4.Install all npm dependencies

```sh
npm install
```

5.Run grunt to lint, build and run a local server (have a look into `Gruntfile.js` to see all the tasks).

```sh
grunt
```

7.Open the app in your browser: [http://localhost:8083](http://localhost:8083)

## Some notes

1.You can code using ES8.

2.Is possible to use async/await (babel-polyfills already imported in Component).

3.Transpiled version and Dist version are served in different ports (see grunt file).

4.UI5 preload compatible version was set for the current LTS version: 1.52.

5.Remember to change to your own namespace.
