sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("simplelistreport.controller.Header", {
        
        onDetailProduct: function () {
            var oSmartTable = this.byId("smartTable"); 
            var oTable = oSmartTable.getTable(); 
        
            var aSelectedIndices = oTable.getSelectedIndices();
        
            if (aSelectedIndices.length > 0) {
                var oCtx = oTable.getContextByIndex(aSelectedIndices[0]);
                var sProductId = oCtx.getProperty("ProductID");
        
                this.getOwnerComponent().getRouter().navTo("Detail", {
                    productId: sProductId
                });
            } else {
                sap.m.MessageToast.show("Please select a product first.");
            }
        }        
	});
});