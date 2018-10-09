import UIComponent from "sap/ui/core/UIComponent";
import models from "iamsoft/test/lib/model/models";

/*eslint no-unused-vars: ["error", { "varsIgnorePattern": "polyfill" }]*/
//import polyfill from "iamsoft/libs/external/polyfill";

export default UIComponent.extend("iamsoft.test.lib.Component", {

    metadata: {
        manifest: "json"
    },

    /**
     * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
     * @public
     * @override
     */
    init: async function() {
        
        await Promise.resolve(1);

        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        // set the device model
        this.setModel(models.createDeviceModel(), "device");
    }

});

