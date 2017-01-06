/**
 * Główny  viewport aplikacji
 */
Ext.define("PLAN.view.PLAN_VIEWPORT", {
    alias: "widget.PLAN_VIEWPORT",
    requires: [
        "PLAN.utils.Router",
        "PLAN.model.MenuTreeStore",
        "PLAN.view.HOME_PANEL",
        "PLAN.view.MSG_PANEL"
    ],
    extend: "Ext.container.Viewport",
    layout: "fit",
    plugins: "viewport",
    viewModel: {},
    initComponent: function () {
        var PLAN_VIEWPORT = this, viewModel = PLAN_VIEWPORT.getViewModel();
        var _menuPosChangeFn

        //To powinien zwracac jakis serwis
        viewModel.set("navItems", PLAN.model.MenuTreeStore.getMenu());

        /**
         * Funkcja prywatna obsługująca ziane pozycji menu
         * 
         * @type private
         */
        _menuPosChangeFn = function (itemData) {
            if (!itemData.config) {
                return
            }

            switch (itemData.config.type) {
                case 'pulpit':
                    PLAN.utils.Router.open({
                        formName: "PLAN_DASHBOARD",
                        contextForm: true
                    })
                    break
                case 'dodNau':
                    PLAN.utils.Router.open({
                        formName: "PLAN_DODNAU",
                        contextForm: true
                    })
                    break
                case 'dodZaj':
                    PLAN.utils.Router.open({
                        formName: "PLAN_DODZAJ",
                        contextForm: true
                    })
                    break
                case 'dodGru':
                    PLAN.utils.Router.open({
                        formName: "PLAN_DODGRU",
                        contextForm: true
                    })
                    break
                case 'lisUzy':
                    PLAN.utils.Router.open({
                        formName: "PLAN_LISUZY",
                        contextForm: true
                    })
                    break
                case 'wiadom':
                    PLAN.utils.Router.open({
                        formName: "PLAN_WIADOM",
                        contextForm: true
                    })
                    break
                case 'profil':
                    PLAN.utils.Router.open({
                        formName: "PLAN_PROFIL",
                        contextForm: true
                    })
                    break
            }
        }


        /**
         * Górna belka
         *
         * @type Ext.panel.Panel
         */
        PLAN_VIEWPORT.topPanel = Ext.create({
            xtype: "panel",
            title: _("WEB-PLAN"),
            titleAlign: "center",
            cls: "PLAN-topbar-login",
            bodyStyle: {
                "background-image": "url(public/startBG.jpg) !important",
                "background-repeat": "no-repeat"
            },
        });

        PLAN_VIEWPORT.leftContextMenu = Ext.create({
            xtype: "panel",
            region: "west",
            iconCls: "fa fa-fire",
            collapsible: false,
            collapseMode: "header",
            collapseDirection: "left",
            title: "WEB-PLAN",
            width: 250,
            split: true,
            reference: "treelistContainer",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            cls: "PLAN-menu-panel",
            collapisible: true,
            border: false,
            scrollable: "y",
            items: [{
                xtype: "treelist",
                listeners: {
                    selectionchange: function (self, item) {
                        _menuPosChangeFn(item.getData())
                    }
                },
                reference: "treelist",
                bind: "{navItems}"
            }]
        });

        /**
         * Główny kontener aplikacji do którego będą wrzucane kolejne widoki aplikacji
         *
         * @type Ext.panel.Panel
         */
        PLAN_VIEWPORT.contentContainer = Ext.create({
            xtype: "panel",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            flex: 100
        });

        PLAN_VIEWPORT.items = [{
            xtype: "panel",
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [PLAN_VIEWPORT.topPanel, {
                xtype: "panel",
                flex: 100,
                layout: {
                    type: "hbox",
                    align: "stretch"
                },
                items: [
                    PLAN_VIEWPORT.leftContextMenu,
                    PLAN_VIEWPORT.contentContainer
                ]
            }]
        }];

        PLAN_VIEWPORT.callParent(arguments);
    },

});