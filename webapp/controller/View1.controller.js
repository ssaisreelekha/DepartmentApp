sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel) {
        "use strict";

        return Controller.extend("com.departmentapp.departmentapp.controller.View1", {
            onInit: function () {
                // set explored app's demo model on this sample
                var obj = {
                    "results":[
                        {
                            "Name":"S Sai Sreelekha",
                            "City":"Vizag"
                        },
                        {
                            "Name":"S Sai Sindhuja",
                            "City":"Bangalore"
                        },
                        {
                            "Name":"S Sakshi",
                            "City":"Mumbai"
                        },
                        {
                            "Name":"S Shrinika",
                            "City":"Delhi"
                        }
                    ]
                }
                var oModel = new JSONModel(obj);
                this.getView().setModel(oModel);
                }
        });
    });