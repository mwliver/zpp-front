Ext.define("PLAN.view.PLAN_PLAN", {
    alias: "widget.PLAN_PLAN",
    extend: "Ext.form.Panel",
    layout: {
        type: 'vbox',
        aign: 'stretch'
    },
    flex: 100,
    scrollable: true,
    initComponent: function () {
        var me = this

        me.leftPanel = Ext.create({
            xtype: 'panel',
            title: 'left',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            flex: 100,
            // items: (function () {
            //     var i
            //     var hoursArr = []

            //     for (i = 0; i < 14; i++) {
            //         hoursArr.push({
            //             xtype: 'panel',
            //             width: 150,
            //             height: 200,
            //             title: 'test'
            //         })
            //     }
            //     return hoursArr
            // })()
        })

        me.topPanel = Ext.create({
            xtype: 'panel',
            title: 'top',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            flex: 100,
            items: []
        })

        me.centerPanel = Ext.create({
            xtype: 'panel',
            title: 'center',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            flex: 100,
            items: []
        })

        me.items = [me.topPanel, {
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            flex: 100,
            items: [me.leftPanel, me.centerPanel]
        }]

        me.callParent(arguments)
    }
});