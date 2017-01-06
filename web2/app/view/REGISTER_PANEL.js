/**
 * Widok rejestracji użytownika
 */
Ext.define("PLAN.view.REGISTER_PANEL", {
    alias: "widget.REGISTER_PANEL",
    requires: [
        "PLAN.controller.PLAN_REGISTER",
        "PLAN.utils.Helpers",
        //"PLAN.controller.PLAN_RECHAPTA"
    ],
    extend: "Ext.panel.Panel",
    layout: "center",
    cls: "PLAN-topbar-login",
    bodyStyle: {
        "background-image": "url(public/startBG.jpg) !important",
        "background-repeat": "no-repeat"
    },
    flex: 100,
    border: false,
    initComponent: function() {
        var REGISTER_PANEL = this,
            viewModel = REGISTER_PANEL.getViewModel();

        REGISTER_PANEL.name = Ext.create({
            xtype: "textfield",
            height: 44,
            emptyText: _("Imię"),
            padding: "10 10 0 10",
            bind: "{params.firstname}"
        });

        REGISTER_PANEL.surname = Ext.create({
            xtype: "textfield",
            height: 44,
            emptyText: _("Nazwisko"),
            padding: "0 10 0 10",
            bind: "{params.lastname}"
        });

        REGISTER_PANEL.email = Ext.create({
            xtype: "textfield",
            height: 44,
            emptyText: _("E-mail"),
            padding: "0 10 0 10",
            bind: "{params.email}"
        });

        REGISTER_PANEL.phone = Ext.create({
            xtype: "textfield",
            height: 44,
            maskRe: /[0-9]+/,
            emptyText: _("Telefon"),
            padding: "0 10 0 10",
            bind: "{params.mobile}"
        });

        REGISTER_PANEL.reCAPTCHA = Ext.create({
            xtype: "panel",
            cls: "PLAN-panel-recaptcha",
            height: 130,
            bodyStyle: {
                padding: "0 10 0 20"
            },
            id: "reCaptcha",
            border: false,
            listeners: {
                afterrender: function() {
                    REGISTER_PANEL.showRechapta("reCaptcha");
                }
            }
        });

        REGISTER_PANEL.bottomTextArea = Ext.create({
            xtype: "textarea",
            flex: 10,
            height: 55,
            editable: false,
            value: _(' Wyrażam zgodę na przetwarzanie moich danych osobowych zawartych w mojej ofercie pracy dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. z 2002r. Nr 101, poz. 926 ze zm.)'),
            padding: "10 10 0 10"
        });

        REGISTER_PANEL.agreementCmp = Ext.create({
            xtype: "panel",
            border: false,
            padding: "0 10 15 10",
            layout: {
                type: "hbox",
                align: "stretch"
            },
            items: [{
                xtype: "checkboxfield",
                flex: 1,
                bind: "{params.check}"
            }, REGISTER_PANEL.bottomTextArea]
        });

        REGISTER_PANEL.registerBtn = Ext.create({
                xtype: "button",
                scale: "large",
                iconCls: "fa fa-angle-right",
                iconAlign: "rigth",
                cls: "PLAN-register-btn",
                text: _("Zarejestruj"),
                handler: function() {
                }
        });

        REGISTER_PANEL.loginBtn = Ext.create({
            xtype: "button",
            scale: "large",
            cls: "PLAN-login-btn",
            text: _("Zaloguj się"),
            handler: function() {

                PLAN.utils.Router.open({
                      formName: "LOGIN_PANEL"
                  });
              }
        });

        REGISTER_PANEL.regAndLogVbox = Ext.create({
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
              REGISTER_PANEL.registerBtn, {
                xtype: "panel",
                border: false,
                height: 10
              },
              REGISTER_PANEL.loginBtn
            ]
        });

        REGISTER_PANEL.register = Ext.create({
            xtype: "panel",
            border: false,
            layout: {
                type: "vbox",
                align: "stretch"
            },
            width: 400,
            height: 550,
            items: [
                REGISTER_PANEL.welcomeField,
                REGISTER_PANEL.topTextArea,
                REGISTER_PANEL.name,
                REGISTER_PANEL.surname,
                REGISTER_PANEL.email,
                REGISTER_PANEL.password,
                REGISTER_PANEL.phone,
                REGISTER_PANEL.reCAPTCHA,
                REGISTER_PANEL.agreementCmp,
                REGISTER_PANEL.regAndLogVbox
            ]
        });

        REGISTER_PANEL.items = [REGISTER_PANEL.register];

        REGISTER_PANEL.callParent(arguments);
    },
    showRechapta: function(element) {
        // var privateKey;

        // PLAN.controller.PLAN_RECHAPTA.getCS({}, function(cs){
        //     privateKey= cs.responseText;
        // });

        // $.getScript("https://www.google.com/recaptcha/api/js/recaptcha_ajax.js",
        //     function() {
        //         Recaptcha.create(privateKey, element, {
        //             "theme": "light",
        //             callback: Recaptcha.focus_response_field
        //         });
        //     });
    }
});
