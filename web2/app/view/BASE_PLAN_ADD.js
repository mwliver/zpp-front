Ext.define("PLAN.view.BASE_PLAN_ADD", {
    alias: "widget.BASE_PLAN_ADD",
    extend: "Ext.form.Panel",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    cls: "PLAN-menu-item-panel",
    flex: 100,
    viewModel: {},
    initComponent: function () {
        var me = this;
        var viewModel = me.getViewModel()

        viewModel.set('tmpData', {})

        me.listaStore = Ext.create("Ext.data.Store", {
            autoLoad: true,
            fields: {
                PLAN_DODGRU: ['id', 'name'],
                PLAN_DODNAU: ['id', 'name', 'name', 'login'], // TODO
                PLAN_DODZAJ: ['id', 'building', 'number'], // TODO
                PLAN_LISUZY: ['id', 'name', 'name', 'login'],
                PLAN_DODPLAN: ['id', 'timeFrom', 'timeTo'],
            }[me.getXType()],
            proxy: {
                type: 'ajax',
                cors: true,
                useDefaultXhrHeader: false,
                url: PLAN.utils.Ajax.apiPath + {
                    PLAN_DODGRU: '/team/list',
                    PLAN_DODNAU: '/user/list', // TODO
                    PLAN_DODZAJ: '/room/list',
                    PLAN_LISUZY: '/user/list',
                    PLAN_DODPLAN: '/event/list'
                }[me.getXType()],
                reader: {
                    type: 'json',
                    rootProperty: 'id'
                }
            },
        })

        me.listaGrid = Ext.create({
            xtype: 'grid',
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 1
                })
            ],
            store: me.listaStore,
            height: '100%',
            title: {
                PLAN_DODGRU: _('Lista grup'),
                PLAN_DODNAU: _('Lista nauczycieli'),
                PLAN_DODZAJ: _('Lista zajęć'),
                PLAN_LISUZY: _('Lista użytkowników'),
                PLAN_DODPLAN: _('Lista zdarzeń')
            }[me.getXType()],
            flex: 100,
            columns: [].concat({
                PLAN_DODGRU: [{
                    text: _('Lp'),
                    xtype: 'rownumberer',
                    width: 60
                }, {
                    text: _('Nazwa grupy'),
                    flex: 2,
                    dataIndex: 'name',
                    editor: {
                        xtype: 'textfield'
                    }
                }],
                PLAN_DODZAJ: [{
                    text: _('Lp'),
                    xtype: 'rownumberer',
                    width: 60
                }, {
                    text: _('Budynek'),
                    flex: 2,
                    dataIndex: 'building',
                    editor: {
                        xtype: 'textfield'
                    }
                }, {
                    text: _('Numer'),
                    flex: 2,
                    dataIndex: 'number',
                    editor: {
                        xtype: 'textfield'
                    }
                }],
                PLAN_DODPLAN: [{
                    text: _('Lp'),
                    xtype: 'rownumberer',
                    width: 60
                }, {
                    text: 'Grupa',
                    dataIndex: 'team',
                    editor: {
                        xtype: 'combobox',
                        valueField: 'name',
                        displayField: 'name',
                        store: Ext.create("Ext.data.Store", {
                            autoLoad: true,
                            fields: ['id', 'name'],
                            proxy: {
                                type: 'ajax',
                                cors: true,
                                useDefaultXhrHeader: false,
                                url: PLAN.utils.Ajax.apiPath + '/team/list',
                                reader: {
                                    type: 'json',
                                    rootProperty: 'id'
                                }
                            },
                        }),
                        listeners: {
                            select: function (combo, record) {
                                var teamTmp = {}

                                teamTmp.id = record.data.id
                                teamTmp.name = record.data.name
                                viewModel.set('tmpData.teamTmp', teamTmp)
                                // TODO ogarnać to reerencją do konkretnych wierszy

                            }
                        }
                    },
                    renderer: function (value, meta, rec) {
                        return Ext.isObject(value) ? value.name : value
                    },
                }, {
                    text: 'Pokój',
                    dataIndex: 'room',
                    editor: {
                        xtype: 'combobox',
                        valueField: 'building',
                        displayField: 'building',
                        store: Ext.create("Ext.data.Store", {
                            autoLoad: true,
                            fields: ['id', 'building', 'number'],
                            proxy: {
                                type: 'ajax',
                                cors: true,
                                useDefaultXhrHeader: false,
                                url: PLAN.utils.Ajax.apiPath + '/room/list',
                                reader: {
                                    type: 'json',
                                    rootProperty: 'id'
                                }
                            },
                        }),
                        listeners: {
                            select: function (combo, record) {
                                var roomTmp = {}

                                roomTmp.id = record.data.id
                                roomTmp.building = record.data.building
                                roomTmp.number = record.data.number
                                viewModel.set('tmpData.roomTmp', roomTmp)
                            }
                        }
                    },
                    renderer: function (value) {
                        return Ext.isObject(value) ? value.building : value
                    },
                }, {
                    text: 'Nauczyciel',
                    dataIndex: 'user',
                    flex: 2,
                    editor: {
                        xtype: 'combobox',
                        valueField: 'name',
                        displayField: 'name',
                        store: Ext.create("Ext.data.Store", {
                            autoLoad: true,
                            fields: ['id', 'name', 'name', 'login'],
                            proxy: {
                                type: 'ajax',
                                cors: true,
                                useDefaultXhrHeader: false,
                                url: PLAN.utils.Ajax.apiPath + '/user/list',
                                reader: {
                                    type: 'json',
                                    rootProperty: 'id'
                                }
                            },
                        }),
                        listeners: {
                            select: function (combo, record) {
                                var userTmp = {}

                                userTmp.id = record.data.id
                                userTmp.login = record.data.login
                                userTmp.name = record.data.name
                                userTmp.password = record.data.password
                                viewModel.set('tmpData.userTmp', userTmp)
                            }
                        },
                    },
                    renderer: function (value) {
                        return Ext.isObject(value) ? value.name : value
                    },
                }, {
                    xtype: "datecolumn",
                    format: 'Y-m-d',
                    text: _('Data od'),
                    flex: 2,
                    dataIndex: 'timeFrom',
                    editor: {
                        xtype: 'datefield'
                    },
                    renderer: function (value) {
                        return new Date(value).toLocaleString()
                    }
                }, {
                    xtype: "datecolumn",
                    format: 'Y-m-d',
                    text: _('Data do'),
                    flex: 2,
                    dataIndex: 'timeTo',
                    editor: {
                        xtype: 'datefield'
                    },
                    renderer: function (value) {
                        return new Date(value).toLocaleString()
                    }
                }],
                PLAN_LISUZY: [{
                    text: _('Lp'),
                    xtype: 'rownumberer',
                    width: 60
                }, {
                    text: _('Login'),
                    flex: 2,
                    dataIndex: 'login',
                    editor: {
                        xtype: 'textfield'
                    }
                }, {
                    text: _('Nazwa'),
                    flex: 2,
                    dataIndex: 'name', // TODO w bazie
                    editor: {
                        xtype: 'textfield'
                    }
                }, {
                    text: _('Hasło'),
                    flex: 2,
                    dataIndex: 'password',
                    editor: {
                        xtype: 'textfield'
                    }
                }]
            }[me.getXType()]),
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                items: [{
                    xtype: 'button',
                    iconCls: 'fa fa-plus',
                    handler: function () {
                        me.listaGrid.getStore().add({
                            PLAN_DODGRU: {
                                name: ''
                            },
                            PLAN_DODZAJ: {
                                building: '',
                                number: ''
                            },
                            PLAN_LISUZY: {
                                login: '',
                                name: '',
                                password: ''
                            },
                            PLAN_DODPLAN: {
                                timeFrom: '',
                                timeTo: ''
                            },
                        }[me.getXType()])
                    }
                }, {
                    xtype: 'button',
                    iconCls: 'fa fa-minus',
                    handler: function () {
                        var id = me.listaGrid.getSelection()[0].data.id

                        Ext.Msg.show({
                            title: 'Komunikat',
                            message: 'Czy napewno chcesz usunąć zaznaczony rekord ??',
                            buttons: Ext.Msg.YESNO,
                            icon: Ext.Msg.QUESTION,
                            fn: function (btn) {
                                if (btn === 'yes') {
                                    $.ajax({
                                        url: PLAN.utils.Ajax.apiPath + {
                                            PLAN_DODGRU: '/team/remove',
                                            PLAN_DODZAJ: '/room/remove',
                                            PLAN_LISUZY: '/user/remove',
                                            PLAN_DODPLAN: '/event/remove'
                                        }[me.getXType()],
                                        contentType: "application/x-www-form-urlencoded",
                                        type: "POST",
                                        data: {
                                            PLAN_DODGRU: 'teamId',
                                            PLAN_DODZAJ: 'roomId',
                                            PLAN_LISUZY: 'userId',
                                            PLAN_DODPLAN: 'eventId'
                                        }[me.getXType()] + '=' + id,
                                        success: function (data, textStatus, jqXHR) {

                                            me.listaGrid.getStore().reload()
                                        },
                                        error: function (jqXHR, textStatus, errorThrown) {
                                            me.listaGrid.getStore().reload()
                                        }
                                    });
                                }
                            }
                        });
                        me.listaGrid.getStore().remove(me.listaGrid.getSelection()[0])

                    }
                }, {
                    xtype: 'label',
                    flex: 100
                }, {
                    xtype: 'label',
                    text: {
                        PLAN_DODGRU: _('Zarządzanie grupami'),
                        PLAN_DODNAU: _('Zarządzanie nauczycielami'),
                        PLAN_DODZAJ: _('Zarządzanie zajęciami'),
                        PLAN_LISUZY: _('Zarządzanie użytkownikami'),
                        PLAN_DODPLAN: _('Zarządzanie planem'),
                    }[me.getXType()]
                }, {
                    xtype: 'button',
                    iconCls: 'fa fa-floppy-o',
                    text: _('Zapisz'),
                    handler: function () {
                        var storeData = PLAN.utils.Helpers.cleanStoreData(me.listaGrid.getStore().getData())
                        
                        for (var i = 0; i < storeData.length; i++) {
                            if (Ext.isString(storeData[i].id) && storeData[i].id.match(/ext/)) {
                                storeData[i].id = Math.floor((Math.random() * 100) + 1)
                                storeData[i].team = viewModel.get('tmpData.teamTmp')
                                storeData[i].user = viewModel.get('tmpData.userTmp')
                                storeData[i].room = viewModel.get('tmpData.roomTmp')
                            }
                        }
                        
                        $.ajax({
                            url: PLAN.utils.Ajax.apiPath + {
                                PLAN_DODGRU: '/team/list/save',
                                PLAN_DODNAU: '/user/list/save',
                                PLAN_DODZAJ: '/room/list/save',
                                PLAN_LISUZY: '/user/list/save',
                                PLAN_DODPLAN: '/event/list/save'
                            }[me.getXType()],
                            headers: {
                                'Access-Control-Allow-Origin': "*",
                                'Access-Control-Request-Method': 'POST',
                                'Access-Control-Request-Headers': 'Content-Type',
                                'Content-Type': 'application/json'
                            },
                            type: "POST",
                            dataType: 'json',
                            data: JSON.stringify(storeData),
                            success: function (data, textStatus, jqXHR) {

                                me.listaGrid.getStore().reload()
                            },
                            error: function (jqXHR, textStatus, errorThrown) {
                                me.listaGrid.getStore().reload()
                            }
                        });
                    }
                }]
            }]
        });

        me.items = [me.listaGrid];

        me.callParent(arguments);
    }
})