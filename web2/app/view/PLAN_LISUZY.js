Ext.define("PLAN.view.PLAN_LISUZY", {
    alias: "widget.PLAN_LISUZY",
    extend: "Ext.form.Panel",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    cls: "PLAN-menu-item-panel",
    flex: 100,
    initComponent: function (){
        var PLAN_LISUZY = this;

        PLAN_LISUZY.dodawanieNauczyciela = Ext.create({
            xtype: "panel",
            title: "TODO - Lista użytkowników",
            flex: 100
        });

        PLAN_LISUZY.items = [PLAN_LISUZY.dodawanieNauczyciela];

        PLAN_LISUZY.callParent(arguments);
    }
});
