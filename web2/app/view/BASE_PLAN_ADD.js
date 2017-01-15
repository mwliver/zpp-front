Ext.define("PLAN.view.BASE_PLAN_ADD", {
    alias: "widget.BASE_PLAN_ADD",
    extend: "Ext.form.Panel",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    cls: "PLAN-menu-item-panel",
    flex: 100,
    initComponent: function () {
        var me = this;

        me.listaStore = Ext.create("Ext.data.Store", {
            autoLoad: true,
            fields: {
                PLAN_DODGRU: ['id', 'name'],
                PLAN_DODNAU: ['id', 'name', 'name', 'login'], // TODO
                PLAN_DODZAJ: ['id', 'building', 'number'], // TODO
                PLAN_LISUZY: ['id', 'name', 'name', 'login'],
                PLAN_DODPLAN: ['id', 'name', 'name', 'login'],
            }[me.getXType()],
            proxy: {
                type: 'ajax',
                useDefaultXhrHeader: false,
                cors: true,
                // headers: {
                //     'Access-Control-Request-Headers': '*',
                //     'Access-Control-Allow-Origin': "*"
                // },
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
                PLAN_DODNAU: [], // TODO
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
                PLAN_DODPLAN: [],
                PLAN_LISUZY: [{
                    text: _('Lp'),
                    xtype: 'rownumberer',
                    width: 60
                }, {
                    text: _('Imię'),
                    flex: 2,
                    dataIndex: 'name',
                    editor: {
                        xtype: 'textfield'
                    }
                }, {
                    text: _('Nazwisko'),
                    flex: 2,
                    dataIndex: 'surname', // TODO w bazie
                    editor: {
                        xtype: 'textfield'
                    }
                }, {
                    text: _('Login'),
                    flex: 2,
                    dataIndex: 'login',
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
                            name: '',
                            login: ''
                        })
                    }
                }, {
                    xtype: 'button',
                    iconCls: 'fa fa-minus',
                    handler: function () {
                        var selRec = me.listaGrid.getSelection()[0]

                        me.listaGrid.getStore().remove(selRec)

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
                        console.log(storeData[0])

                        $.ajax({
                            url: PLAN.utils.Ajax.apiPath + '/user/save', 
                            headers: {
                                'Access-Control-Allow-Origin': "*",
                                'Access-Control-Request-Method': 'POST',
                                'Access-Control-Request-Headers': 'Content-Type',
                                'Content-Type': 'application/json'
                            },
                            type: "POST",
                            dataType: 'json',
                            data: JSON.stringify(storeData[0]),
                            success: function (data, textStatus, jqXHR) {
                                //data - response from server
                            },
                            error: function (jqXHR, textStatus, errorThrown) {

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