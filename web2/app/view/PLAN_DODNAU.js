Ext.define("PLAN.view.PLAN_DODNAU", {
    alias: "widget.PLAN_DODNAU",
    extend: "Ext.form.Panel",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    cls: "PLAN-menu-item-panel",
    flex: 100,
    initComponent: function (){
        var PLAN_DODNAU = this;

        PLAN_DODNAU.dodawanieNauczyciela = Ext.create({
            xtype: "panel",
            title: "TODO - dodawanie nauczyciela",
            flex: 100
        });

        PLAN_DODNAU.items = [PLAN_DODNAU.dodawanieNauczyciela];

        PLAN_DODNAU.callParent(arguments);
    }
});
