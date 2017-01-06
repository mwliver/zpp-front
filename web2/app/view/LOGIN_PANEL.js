/**
 * Widok logowania się do aplikacji
 */
Ext.define("PLAN.view.LOGIN_PANEL", {
    alias: "widget.LOGIN_PANEL",
    requires: [
        "PLAN.controller.PLAN_LOGIN",
        "PLAN.utils.Helpers"
    ],
    extend: "Ext.panel.Panel",
    layout: "center",
    flex: 100,
    border: false,
    cls: "PLAN-topbar-login",
    bodyStyle: {
        "background-image": "url(public/startBG.jpg) !important", // TODO jakiś bardziej cywilizowany sposób
        "background-repeat": "no-repeat"
    },
    initComponent: function() {
        var LOGIN_PANEL = this,
            viewModel = LOGIN_PANEL.getViewModel();

        LOGIN_PANEL.topImage = Ext.create({
            xtype: "panel",
            border: false,
            minWidth: 320,
            layout: "fit",
            items: [{
                xtype: "panel",
                border: false,
                width: 380,
                height: 270,
                bodyStyle: {
                    "background-image": "url(public/generator_bg.jpg) !important",
                    "background-repeat": "no-repeat"
                },
                padding: "10 10 10 10"
            }]
        });
        /**
         * Komponent pola email
         *
         * @type Ext.form.field.Text
         */
        LOGIN_PANEL.email = Ext.create({
            xtype: "textfield",
            emptyText: "E-mail",
            height: 44,
            bind: "{params.email}",
            padding: "0 10 0 10"
        });
        /**
         * Komponent pola hasło
         *
         * @type Ext.form.field.Text
         */
        LOGIN_PANEL.password = Ext.create({
            xtype: "textfield",
            height: 44,
            emptyText: _("Hasło"),
            inputType: "password",
            bind: "{params.password}",
            padding: "0 10 0 10"
        });

        LOGIN_PANEL.bottomTextArea = Ext.create({
            xtype: "textarea",
            editable: false,
            value: _("Aby zacząć korzystać z WEB-PLAN, wystarczy bezpłatnie założyć konto,") +
                _("podając swoje dane i adres email. To zajmuje tylko kilkanaście sekund i do niczego") +
                _("nie zobowiązuje."),
            padding: "10 10 0 10"
        });
        /**
         * Panel tworzący layout hbox info + prycisko logowania
         *
         * @type Ext.panel.Panel
         */
        LOGIN_PANEL.passwordRemember = Ext.create({
            xtype: "panel",
            border: false,
            padding: "0 10 10 0",
            layout: {
                type: "hbox",
                align: "stretch"
            },
            items: [{
                xtype: "label",
                padding: "0 10 0 10",
                style: {
                    "font-size": "10px",
                    "text-decoration": "underline;"
                },
                text: _("Nie pamiętasz hasła ?"),
                flex: 1
            }]
        });
        /**
         * [create description]
         */
        LOGIN_PANEL.logIn = Ext.create( {
            xtype: "button",
            scale: "large",
            iconCls: "fa fa-angle-right",
            iconAlign: "rigth",
            cls: "PLAN-login-btn",
            text: _("Zaloguj się"),
            handler: function() {
                var canSend = PLAN.utils.Helpers.validateRequiredFields(
                    [{
                        email: "Email"
                    }, {
                        password: "Hasło"
                    }],
                    viewModel.get("params")
                );
                if (canSend) {
                    // PLAN.controller.PLAN_LOGIN.login(
                    //     viewModel.get("params"),
                    //     function(callBack) {
                    //     }
                    // );

                    // PLAN.utils.Router.open({
                    //     formName: "PLAN_HOME",
                    //     contextForm: true
                    // });
                            PLAN.utils.Router.open({
                              formName: "PLAN_DASHBOARD",
                              contextForm: true
                            });
                }
            }
        });
        /**
         * Komponent przycisku przejścia do rejestracji
         *
         * @type Ext.panel.Panel
         */
        LOGIN_PANEL.createAccount = Ext.create({
            xtype: "button",
            scale: "large",
            iconCls: "fa fa-user-plus",
            iconAlign: "right",
            cls: "PLAN-register-btn",
            text: _("Utwórz nowe konto"),
            handler: function() {
                PLAN.utils.Router.open({
                    formName: "REGISTER_PANEL"
                });
            }
        });

        LOGIN_PANEL.logAndRegVbox = Ext.create({
            xtype: "panel",
            border: false,
            bodyStyle: {
              paddingLeft: "10px",
              paddingRight: "10px"
            },
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [
                LOGIN_PANEL.logIn, {
                  xtype: "panel",
                  border: false,
                  height: 10
                },
                LOGIN_PANEL.createAccount,
            ]
        });
        /**
         * Lewa strona hboxa logowania
         *
         * @type Ext.panel.Panel
         */
        LOGIN_PANEL.login = Ext.create({
            xtype: "panel",
            border: false,
            flex: 50,
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [
                LOGIN_PANEL.topImage,
                LOGIN_PANEL.email,
                LOGIN_PANEL.password,
                LOGIN_PANEL.passwordRemember,
                LOGIN_PANEL.logAndRegVbox
            ]
        });

        /**
         * Skleja całość w responsywny layout
         *
         * @type Ext.panel.Panel
         */
        LOGIN_PANEL.vbox = Ext.create({
            xtype: "panel",
            border: false,
            width: 400,
            height: 550,
            layout: {
                type: "vbox",
                align: "stretch"
            },
            items: [
                LOGIN_PANEL.login
            ]
        });

        LOGIN_PANEL.items = [LOGIN_PANEL.vbox];

        LOGIN_PANEL.callParent(arguments);
    }
});
