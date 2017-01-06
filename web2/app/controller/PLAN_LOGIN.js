/**
 * Kontroler obsługujący logowanie sesji użytkownia
 */
Ext.define("PLAN.controller.PLAN_LOGIN", {
    singleton: true,
    requires: ["PLAN.utils.Ajax"],
    login: function(params, successCalback, failureCallback) {
        PLAN.utils.Ajax.request({
            url: "api/get-token", // TODO 
            method: "POST",
            params: params,
            success: successCalback,
            failure: failureCallback
        });
    }
});
