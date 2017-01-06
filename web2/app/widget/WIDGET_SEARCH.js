Ext.define("PLAN.widget.WIDGET_SEARCH", {
    alias: "widget.WIDGET_SEARCH",
    extend: "Ext.Window",
    modal: true,
    width: 700,
    height: 400,
    header:false,
    closable: false,
    initComponent: function () {
        var WIDGET_SEARCH = this;

        //TESTOWE DANE => potem do usuniecia
        var searchStore = Ext.create('Ext.data.Store', {
          storeId: 'testSearchStore',
          fields:[ 'lp', 'opis']
        });

        WIDGET_SEARCH.fit = Ext.create({
            xtype: "panel",
            border: false,
            layout: {
                type: "vbox",
                align: "stretch"
            },
            padding: "10 10 10 10",
            items: [{
                xtype: "panel",
                layout: {
                    type: "hbox"
                },
                items: [{
                    xtype: "textfield",
                    flex: 100,
                    fieldLabel: "Wyszukaj"
                }, {
                    xtype: "button",
                    iconCls: "fa fa-search",
                    handler: function () {
                        searchStore.setProxy({
                            type: "memory",
                            reader: {
                                type: "json"
                            },
                            data: [
                              { lp: '1', opis: 'test 1'},
                              { lp: '2', opis: 'test 1'},
                              { lp: '3', opis: 'test 1'},
                              { lp: '4', opis: 'test 1'}
                            ]
                        });
                        searchStore.load();
                    }
                }]
            }, {
                xtype: "grid",
                id: "searchGrid",
                flex: 100,
                store: Ext.data.StoreManager.lookup('testSearchStore'),
                columns: [{
                    text: "Lp",
                    flex: 1,
                    dataIndex: "lp"
                }, {
                    text: "Opis",
                    flex: 9,
                    dataIndex: "opis"
                }]
            }]
        });

        WIDGET_SEARCH.dockedItems = [{
            xtype: "toolbar",
            dock: "top",
            ui: "footer",
            items: [{
                xtype: "label",
                flex: 100
            }, {
              xtype: "button",
              iconCls: "fa fa-times",
              handler: function () {
                  WIDGET_SEARCH.hide();
              }
            }]
        }];

        WIDGET_SEARCH.items = [WIDGET_SEARCH.fit];

        WIDGET_SEARCH.callParent(arguments);
    }
});
