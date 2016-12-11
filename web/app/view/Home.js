Ext.define("PLAN.view.Home", {
    extend: 'Ext.form.Panel',
    flex: 100,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    initComponent: function () {
        var me = this

        me.items = [{
            xtype: 'button',
            text: 'test'
        }]

        me.callParent(arguments)
    }
})