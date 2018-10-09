# SAPUI5 External Library Usage Test
This is a basic app example that shows how you can consume an external lib.

Particularly the used lib encapsulate:

- The babel polyfills nedded for async/await statements.
- MyControl.

You can found the specific code for reuse in the following files:

- `./webapp/index.html`:
This is only for test environment, you do not need this in SAP Gateway Server.
```javascript
			data-sap-ui-resourceroots='{
                "sap.ui.demo.basicTemplate": "./",
                <!-- Here we told told to SAPUI5 where it can find our library resources -->
                "cencosud.libs.external.polyfill": "/cencosud/libs/external/polyfill/"
```
Obiously there is configured a proxy mapping the resources of the library with the specified path.

- `./manifest.json`: This is the important part. We indicate ourr custom library as dependency.
```json
	"sap.ui5": {
        ...
		"dependencies": {
			...
			"libs": {
                ...
                "cencosud.libs.external.polyfill": {}
			}
		},
```

- `./webapp/view.App.view.xml`: This is an example where is used one of the controls of the library.
```xml
    <mvc:View
        controllerName="sap.ui.demo.basicTemplate.controller.App"
        <!-- Here we define the namespace -->
        xmlns:pf="cencosud.libs.external.polyfill.control"
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

0.Install the library and create a proxy to it:
- Library: [](https://github.com/sebasgoldberg/external-libs.git)
- Proxy: /cencosud/libs/external/polyfill/

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
