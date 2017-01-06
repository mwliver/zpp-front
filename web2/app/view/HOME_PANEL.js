
Ext.define("PLAN.view.HOME_PANEL", {
  alias: "widget.HOME_PANEL",
  extend: "Ext.form.Panel",
  requires: [
    "PLAN.view.DETAIL_GRID",
    "PLAN.widget.WIDGET_SEARCH"
  ],
  layout: {
    type: "vbox",
    align: "stretch"
  },
  cls: "PLAN-menu-item-panel",
  flex: 100,
  initComponent: function (){
    var HOME_PANEL = this, viewModel = HOME_PANEL.getViewModel();

    HOME_PANEL.wizytowka = Ext.create({
      xtype: "window",
      width: 700,
      height: 400,
      closable: false,
      title: "Wizytówka",
      listeners: {
        afterrender: function (self) {
          var selfEl = self.getEl();

          selfEl.on("click", function(){
            self.hide("wizytowkaBtn");
          })
        }
      }
    });

    HOME_PANEL.detailGrid = Ext.create({
      xtype: "DETAIL_GRID",
      viewModel: viewModel
    });

    HOME_PANEL.widgetSearch = Ext.create({
        xtype: "WIDGET_SEARCH",
        viewModel: viewModel
    });

    HOME_PANEL.wyloguj = Ext.create({
        xtype: "button",
        scale: "large",
        iconCls: "fa fa-share-square-o",
        tooltip: "Wyloguj",
        handler: function () {
            // TODO wylogowanie
            PLAN.utils.Router.home();
        }
    });
    
    HOME_PANEL.items = [HOME_PANEL.home];

    HOME_PANEL.callParent(arguments);
  }
});
