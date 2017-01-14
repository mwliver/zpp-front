/**
 * Klasa zwracająca na sztywno dane do zbudowania menu kontekstowego
 * 
 * TODO jakiś automat rekurencyjnie 
 */
Ext.define("PLAN.model.MenuTreeStore", {
    singleton: true,

    getMenu: function () {
        var navItems = {
            type: "tree",
            root: {
                expanded: true,
                children: [{
                    text: "Pulpit",
                    iconCls: "fa fa-desktop",
                    config: {
                        type: 'pulpit'
                    },
                    leaf: true,
                    height: 60
                },{
                    text: "Plan",
                    iconCls: "fa fa-calendar",
                    config: {
                        type: 'plan'
                    },
                    leaf: true,
                    height: 60
                }, {
                    text: "Admin",
                    iconCls: "fa fa-book",
                    children: [{
                        text: "Dodawanie nauczyciela",
                        config: {
                            type: 'dodNau'
                        },
                        iconCls: "fa fa-plus-circle",
                        leaf: true
                    }, {
                        text: "Dodawanie zajęć",
                        config: {
                            type: 'dodZaj'
                        },
                        iconCls: "fa fa-file-o",
                        leaf: true
                    }, {
                        text: "Dodawanie grup",
                        config: {
                            type: 'dodGru'
                        },
                        iconCls: "fa fa-exclamation-triangle",
                        leaf: true
                    }, {
                        text: "Lista użytkowników",
                        config: {
                            type: 'lisUzy'
                        },
                        iconCls: "fa fa-times",
                        leaf: true
                    }]
                }, {
                    text: "Wiadomości",
                    config: {
                        type: 'wiadom'
                    },
                    iconCls: "fa fa-envelope-o",
                    leaf: true
                }, {
                    text: "Profil",
                    config: {
                        type: 'profil'
                    },
                    iconCls: "fa fa-user",
                    leaf: true
                }]
            }
        };

        return navItems;
    }
});
