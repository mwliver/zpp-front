/**
 * Kontroler rejestracji nowego użytkownika
 */
Ext.define("PLAN.controller.PLAN_REGISTER", {
    singleton: true,
    requires: ["PLAN.utils.Ajax"],
    register: function(params, successCalback, failureCallback) {
        PLAN.utils.Ajax.request({
            url: "user/register", // TODO 
            method: "POST",
            params: params,
            success: successCalback,
            failure: failureCallback
        });
    }
});
