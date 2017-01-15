Ext.define("PLAN.view.PLAN_PLAN", {
    alias: "widget.PLAN_PLAN",
    extend: "Ext.form.Panel",
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 100,
    scrollable: true,
    initComponent: function () {
        var me = this

        me.leftPanel = Ext.create({
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            scrollable: true,
            width: 150,
            items: (function () {
                var i
                var hoursArr = []

                for (i = 1; i < 15; i++) {
                    hoursArr.push({
                        xtype: 'panel',
                        layout: 'fit',
                        width: 50,
                        height: 100,
                        items: [{
                            xtype: 'button',
                            text: (i + 6) + ":00"
                        }]
                    })
                }
                return hoursArr
            })()
        })

        me.topPanel = Ext.create({
            xtype: 'panel',
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            flex: 50,
            minHeight: 50,
            items: (function () {
                var i
                var hoursArr = []
                var mapTyg = ['Godzina/Dzień', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb', 'Nd']

                for (i = 0; i < 8; i++) {
                    hoursArr.push({
                        xtype: 'panel',
                        titleAlign: 'center',
                        width: 150,
                        title: mapTyg[i]
                    })
                }
                return hoursArr
            })()
        })

        me.centerPanel = Ext.create({
            xtype: 'panel',
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            flex: 20,
            items: (function () {
                var i
                var hoursArr = []

                for (i = 0; i < 14; i++) {
                    hoursArr.push({
                        xtype: 'panel',
                        layout: {
                            type: 'hbox',
                            align: 'stretch'
                        },
                        width: 50,
                        height: 100,
                        items: (function () {
                            var days = []
                            var j

                            for (j = 1; j < 8; j++) {
                                days.push({
                                    xtype: 'panel',
                                    border: false,
                                    frame: false,
                                    layout: 'fit',
                                    items: [{
                                        xtype: 'button',
                                        style: {
                                            'background-color': '#1E2525'
                                        },
                                        text: j,
                                        width: 150
                                    }]
                                })
                            }

                            return days
                        })()
                    })
                }
                return hoursArr
            })()
        })

        me.items = [me.topPanel, {
            xtype: 'panel',
            scrollable: true,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: [me.leftPanel, me.centerPanel]
        }]

        me.callParent(arguments)
    }
});