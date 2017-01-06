Ext.define("PLAN.view.PLAN_PROFIL", {
    alias: "widget.PLAN_PROFIL",
    extend: "Ext.form.Panel",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    cls: "PLAN-menu-item-panel",
    flex: 100,
    initComponent: function (){
        var PLAN_PROFIL = this;

        PLAN_PROFIL.dodawanieNauczyciela = Ext.create({
            xtype: "panel",
            title: "TODO - profil",
            flex: 100
        });

        PLAN_PROFIL.items = [PLAN_PROFIL.dodawanieNauczyciela];

        PLAN_PROFIL.callParent(arguments);
    }
});
