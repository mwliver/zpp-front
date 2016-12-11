Ext.define("PLAN.view.Login", {
    extend: "Ext.window.Window",
    requires: [
        "PLAN.controller.LoginController"
    ],
    views: ["Home"],
    alias: "widget.login",
    autoShow: true,
    height: 200,
    width: 400,
    resizable: false,
    layout: {
        type: "fit"
    },
    title: "Logowanie",
    closable: false,
    initComponent: function () {
        var Login = this;

        Login.username = Ext.create({
            xtype: "textfield",
            fieldLabel: "Login",
            padding: 3
        });

        Login.password = Ext.create({
            xtype: "textfield",
            inputType: "password",
            fieldLabel: "Hasło",
            padding: 3
        });

        Login.items = [{
                xtype: "panel",
                layout: {
                    type: "vbox",
                    align: "stretch"
                },
                flex: 1,
                items: [
                    Login.username,
                    Login.password
                ]
            }];

        Login.dockedItems = [{
                xtype: "toolbar",
                dock: "bottom",
                items: [{
                        xtype: "tbfill"
                    }, {
                        xtype: "button",
                        text: "Anuluj"
                    }, {
                        xtype: "button",
                        text: "Zaloguj",
                        handler: function () {
                            if (Login.username.getValue() && Login.password.getValue()) {
                                var logParams = {
                                    username: Login.username.getValue(),
                                    password: Login.password.getValue()
                                };
                                PLAN.controller.LoginController.log(logParams);
                            }
                        }
                    }]
            }];
        this.callParent(arguments);
    }
});