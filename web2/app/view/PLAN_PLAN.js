Ext.define("PLAN.view.PLAN_PLAN", {
    alias: "widget.PLAN_PLAN",
    extend: "Ext.form.Panel",
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    flex: 100,
    scrollable: true,
    viewModel: {},
    initComponent: function () {
        var me = this
        var viewModel = me.getViewModel()

        _createCalender = function (events) {
            var daysName = ['Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sb', 'Nd']
            var monthDays = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień',
                'Październik', 'Listopad', 'Grudzień']

            var firstDayInSelectedMonth = new Date(viewModel.get('data').getFullYear(), viewModel.get('data').getMonth(), 1)
            var startDay = firstDayInSelectedMonth.getDay()
            var dayInMonthCount = new Date(viewModel.get('data').getFullYear(), viewModel.get('data').getMonth() + 1, 0).getDate()

            me.headerMonthPanel.setTitle(monthDays[viewModel.get('data').getMonth()])

            me.weekDayPanel.removeAll()
            var weekDaysCmp = []

            for (var i = 0; i < daysName.length; i++) {

                me.weekDayPanel.insert({
                    xtype: 'panel', border: false,
                    titleAlign: 'center',
                    title: daysName[i],
                    width: 150
                })
            }

            var dayCmp
            var weekPanel = null
            var day = 1

            me.conentPanel.removeAll()

            for (var c = 0; c < 6; c++) {
                weekPanel = Ext.create({
                    xtype: 'panel', border: false,
                    flex: 100,
                    layout: {
                        type: 'hbox',
                        align: 'stretch'
                    },
                    items: []
                })
                for (var cc = 0; cc <= 6; cc++) {
                    dayCmp = {
                        xtype: 'panel',
                        layout: {
                            type: 'vbox',
                            align: 'stretch'
                        },
                        disabled: true,
                        width: 150,
                        height: 150
                    }
                    if (day <= dayInMonthCount && (c > 0 || cc >= startDay)) {
                        var date = new Date(viewModel.get('data').getFullYear(), viewModel.get('data').getMonth(), day)
                        var cls = 'PLAN-days'

                        switch (daysName[date.getDay()]) {
                            case 'Sb':
                            case 'Nd':
                                cls = 'PLAN-weekend'
                                break
                        }
                        dayCmp.disabled = false
                        dayCmp.items = [{
                            xtype: 'label',
                            margin: '10 10 10 10',
                            cls: cls,
                            date: date,
                            text: day
                        }]
                        if (events) {
                            for (var d = 0; d < events.length; d++) {
                                if (events[d].timeFrom && events[d].timeTo) {
                                    var timeFromZero = new Date(events[d].timeFrom).getTime()
                                    var timeToZero = new Date(events[d].timeTo).getTime()

                                    if (timeFromZero <= date && date <= timeToZero) {
                                        dayCmp.items.push({
                                            xtype: 'label',
                                            cls: 'PLAN-event',
                                            text: events[d].room.building + ' ' + events[d].room.number,
                                            valueObj: events[d]
                                        })
                                    }
                                }
                            }
                        }

                        day++
                    }
                    weekPanel.insert(dayCmp)

                    if (day > dayInMonthCount) {
                        me.conentPanel.insert(weekPanel)
                        return;
                    }
                }
                me.conentPanel.insert(weekPanel)
            }
        }

        me.navPanel = Ext.create({
            xtype: 'toolbar',
            items: [{
                xtype: 'panel', border: false,
                frame: false,
                border: false,
                layout: 'vbox',
                items: [{
                    xtype: 'datefield',
                    fieldLabel: 'Data',
                    bind: '{data}'
                }]
            }, {
                xtype: 'button',
                text: _('Generuj plan'),
                iconCls: 'fa fa-cog',
                handler: function () {
                    Ext.Ajax.request({
                        url: PLAN.utils.Ajax.apiPath + '/event/list',
                        method: 'GET',
                        success: function (response, opts) {
                            var res = Ext.decode(response.responseText);
                            var eventsArr = []

                            if (res && res.length) {
                                for (var i = 0; i < res.length; i++) {
                                    eventsArr.push(res[i])
                                }

                            }
                            _createCalender(eventsArr)
                        },

                        failure: function (response, opts) {
                            console.log('server-side failure with status code ' + response.status);
                        }
                    })
                    _createCalender()
                }
            }]
        })

        me.headerMonthPanel = Ext.create({
            xtype: 'panel',
            border: false,
            titleAlign: 'center',
            width: 1050
        })

        me.weekDayPanel = Ext.create({
            xtype: 'panel', border: false,
            layout: {
                type: 'hbox',
                align: 'stretch'
            },
            items: []
        })

        me.conentPanel = Ext.create({
            xtype: 'panel', border: false,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: []
        })

        me.items = [{
            xtype: 'panel', border: false,
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [me.navPanel/*, me.headerMonthPanel*/, me.weekDayPanel, me.conentPanel]
        }]

        me.callParent(arguments)
    }
});