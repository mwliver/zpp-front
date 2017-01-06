Ext.define("PLAN.view.DETAIL_GRID", {
    alias: "widget.DETAIL_GRID",
    extend: "Ext.Window",
    width: 700,
    height: 400,
    closable: false,
    modal: true,
    header: false,
    bind: {
      title: "{grid.title}",
      iconCls: "{grid.iconCls}"
    },
    iconAlign: "right",
    viewModel: {},
    initComponent: function () {
        var DETAIL_GRID = this;

        DETAIL_GRID.grid = Ext.create({
            xtype: "grid",
            flex: 100,
            columns: [{
                text: "Lp",
                flex: 2
            }, {
                text: "Nazwa",
                flex: 5
            }, {
                text: "Dotyczy",
                flex: 5
            }, {
                text: "Data Od",
                flex: 5
            }, {
                text: "Data do",
                flex: 5
            }]
        });

        DETAIL_GRID.items = [
          DETAIL_GRID.grid
        ];

        DETAIL_GRID.dockedItems = [{
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
                    DETAIL_GRID.hide();
                }
            }]
        }];

        DETAIL_GRID.callParent(arguments);
    }
});
