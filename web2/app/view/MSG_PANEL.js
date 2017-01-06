Ext.define("PLAN.view.MSG_PANEL", {
    alias: "widget.MSG_PANEL",
    extend: "Ext.form.Panel",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    cls: "PLAN-menu-item-panel",
    flex: 100,
    initComponent: function (){
        var MSG_PANEL = this;

        MSG_PANEL.dashBoard = Ext.create({
            xtype: "panel",
            title: "TODO - wiadomości",
            flex: 100
        });

        MSG_PANEL.items = [MSG_PANEL.dashBoard];

        MSG_PANEL.callParent(arguments);
    }
});
