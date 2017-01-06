Ext.define("PLAN.view.PLAN_DODGRU", {
    alias: "widget.PLAN_DODGRU",
    extend: "Ext.form.Panel",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    cls: "PLAN-menu-item-panel",
    flex: 100,
    initComponent: function (){
        var PLAN_DODGRU = this;

        PLAN_DODGRU.dodawanieNauczyciela = Ext.create({
            xtype: "panel",
            title: "TODO - dodawanie grup",
            flex: 100
        });

        PLAN_DODGRU.items = [PLAN_DODGRU.dodawanieNauczyciela];

        PLAN_DODGRU.callParent(arguments);
    }
});
