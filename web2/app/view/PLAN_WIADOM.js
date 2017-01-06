Ext.define("PLAN.view.PLAN_WIADOM", {
    alias: "widget.PLAN_WIADOM",
    extend: "Ext.form.Panel",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    cls: "PLAN-menu-item-panel",
    flex: 100,
    initComponent: function (){
        var PLAN_WIADOM = this;

        PLAN_WIADOM.dodawanieNauczyciela = Ext.create({
            xtype: "panel",
            title: "TODO - Wiadomości",
            flex: 100
        });

        PLAN_WIADOM.items = [PLAN_WIADOM.dodawanieNauczyciela];

        PLAN_WIADOM.callParent(arguments);
    }
});
