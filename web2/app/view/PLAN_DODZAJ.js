Ext.define("PLAN.view.PLAN_DODZAJ", {
    alias: "widget.PLAN_DODZAJ",
    extend: "Ext.form.Panel",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    cls: "PLAN-menu-item-panel",
    flex: 100,
    initComponent: function (){
        var PLAN_DODZAJ = this;

        PLAN_DODZAJ.dodawanieNauczyciela = Ext.create({
            xtype: "panel",
            title: "TODO - dodawanie zajęć",
            flex: 100
        });

        PLAN_DODZAJ.items = [PLAN_DODZAJ.dodawanieNauczyciela];

        PLAN_DODZAJ.callParent(arguments);
    }
});
