Ext.define("PLAN.view.PLAN_LISUZY", {
    alias: "widget.PLAN_LISUZY",
    extend: "Ext.form.Panel",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    cls: "PLAN-menu-item-panel",
    flex: 100,
    initComponent: function () {
        var PLAN_LISUZY = this;

        PLAN_LISUZY.listaUzytkownikowStore = Ext.create("Ext.data.Store", {
            autoLoad: true,
            fields: ['id', 'name', 'name', 'login'],
            proxy: {
                type: 'ajax',
                useDefaultXhrHeader: true,
                cors: true,
                headers: {
                    'Access-Control-Request-Headers': '*',
                },
                url: PLAN.utils.Ajax.apiPath + '/user/list',
                reader: {
                    type: 'json',
                    rootProperty: 'id'
                }
            },
        })

        PLAN_LISUZY.listaUzytkownikowGrid = Ext.create({
            xtype: 'grid',
            plugins: [
                Ext.create('Ext.grid.plugin.CellEditing', {
                    clicksToEdit: 1
                })
            ],
            store: PLAN_LISUZY.listaUzytkownikowStore,
            height: '100%',
            title: _('Lista użytkowników'),
            flex: 100,
            columns: [{
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
            }],
            dockedItems: [{
                xtype: 'toolbar',
                dock: 'bottom',
                ui: 'footer',
                items: [{
                    xtype: 'button',
                    iconCls: 'fa fa-plus',
                    handler: function () {
                        PLAN_LISUZY.listaUzytkownikowGrid.getStore().add({
                            name: '',
                            login: ''
                        })
                    }
                }, {
                    xtype: 'button',
                    iconCls: 'fa fa-minus',
                    handler: function () {
                        var selRec = PLAN_LISUZY.listaUzytkownikowGrid.getSelection()[0]

                        PLAN_LISUZY.listaUzytkownikowGrid.getStore().remove(selRec)

                    }
                }, {
                    xtype: 'label',
                    flex: 100
                }, {
                    xtype: 'label',
                    text: _('Zarządzanie użytkownikami')
                }, {
                    xtype: 'button',
                    iconCls: 'fa fa-floppy-o',
                    text: _('Zapisz'),
                    handler: function () {
                        var storeData = PLAN.utils.Helpers.cleanStoreData(PLAN_LISUZY.listaUzytkownikowGrid.getStore().getData())

                        console.log(storeData)
                    }
                }]
            }]
        });

        PLAN_LISUZY.items = [PLAN_LISUZY.listaUzytkownikowGrid];

        PLAN_LISUZY.callParent(arguments);
    }
});
