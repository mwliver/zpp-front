Ext.define("PLAN.view.PLAN_DASHBOARD", {
    alias: "widget.PLAN_DASHBOARD",
    extend: "Ext.form.Panel",
    layout: {
        type: "vbox",
        align: "stretch"
    },
    flex: 100,

    initComponent: function () {
        var PLAN_DASHBOARD = this;

        PLAN_DASHBOARD.topBeam = Ext.create({
            xtype: "panel", frame: false,
            bodyStyle: {
                'background-color': 'rgb(60, 74, 87);',
                color: 'white'
            },
            height: 50,
            layout: {
                type: "hbox",
                align: "stretch"
            },
            items: [{
                xtype: "component",
                padding: "12 0 10 10",
                html: "<span class='fa fa-bars'></span>",
                listeners: {
                    afterrender: function (self) {
                        var selfEl = self.getEl();

                        selfEl.on("click", function () {
                            alert("aaa")
                        });

                        selfEl.on("mouseover", function () {
                            self.addCls("PLAN-cursor-pointer");
                        });

                        selfEl.on("mouseout", function () {
                            self.removeCls("PLAN-cursor-pointer");
                        });
                    }
                }
            }, {
                xtype: "label",
                flex: 1
            }, {
                xtype: "component",
                padding: "12 0 10 10",
                html: "<span class='fa fa-search'></span>"
            }, {
                xtype: "component",
                padding: "12 0 10 10",
                html: "<span class='fa fa-envelope-o'></span>"
            }, {
                xtype: "component",
                padding: "12 0 10 10",
                html: "<span class='fa fa-bell-o'></span>"
            }, {
                xtype: "component",
                padding: "12 0 10 10",
                html: "<span class='fa fa-th'></span>"
            }, {
                xtype: "component",
                padding: "12 0 10 10",
                html: "<span>Imię Nazwisko</span>"
            }, {
                xtype: "component",
                padding: "10 40 0 20",
                html: "<img class='img-circle' src='public/cat.png'>"
            }]
        });

        PLAN_DASHBOARD.adminTiles = Ext.create({
            xtype: "panel", frame: false,
            bodyStyle: {
                "background-image": "url(public/startBG.jpg) !important",
                "background-repeat": "no-repeat"
            },
            border: false,
            layout: {
                type: "vbox",
                align: "stretch"
            },
            flex: 100,
            items: [{
                xtype: "panel", frame: false,
                bodyStyle: {
                    "background-image": "url(public/startBG.jpg) !important",
                    "background-repeat": "no-repeat"
                },
                border: false,
                layout: {
                    type: "hbox",
                    align: "stretch"
                },
                items: [{
                    xtype: "panel", frame: false,
                    flex: 1,
                    height: 190,
                    padding: "15 7 15 7",
                    layout: {
                        type: "vbox",
                        align: "stretch"
                    },
                    items: [{
                        xtype: "panel", frame: false,
                        height: 5,
                        bodyStyle: {
                            "background-color": "blue"
                        }
                    }, {
                        xtype: "panel", frame: false,
                        flex: 100,
                        border: false,
                        layout: "center",
                        items: [{
                            xtype: "panel", frame: false,
                            border: false,
                            layout: {
                                type: "vbox"
                            },
                            items: [{
                                xtype: "label",
                                text: "Dodawanie nauczyciela"
                            }, {
                                xtype: "component",
                                padding: "0 0 0 35",
                                html: "<span class='fa fa-shopping-cart fa-2x'></span>"
                            }]
                        }]
                    }]
                }, {
                    xtype: "panel", frame: false,
                    flex: 1,
                    height: 190,
                    padding: "15 7 15 7",
                    layout: {
                        type: "vbox",
                        align: "stretch"
                    },
                    items: [{
                        xtype: "panel", frame: false,
                        height: 5,
                        bodyStyle: {
                            "background-color": "#FF00FF"
                        }
                    }, {
                        xtype: "panel", frame: false,
                        flex: 100,
                        border: false,
                        layout: "center",
                        items: [{
                            xtype: "panel", frame: false,
                            border: false,
                            layout: {
                                type: "vbox"
                            },
                            items: [{
                                xtype: "label",
                                text: "Dodawanie zajęć"
                            }, {
                                xtype: "component",
                                padding: "0 0 0 35",
                                html: "<span class='fa fa-plus-circle fa-2x'></span>"
                            }]
                        }]
                    }]
                }, {
                    xtype: "panel", frame: false,
                    flex: 1,
                    height: 190,
                    padding: "15 7 15 7",
                    layout: {
                        type: "vbox",
                        align: "stretch"
                    },
                    items: [{
                        xtype: "panel", frame: false,
                        height: 5,
                        bodyStyle: {
                            "background-color": "#00CC00"
                        }
                    }, {
                        xtype: "panel", frame: false,
                        flex: 100,
                        border: false,
                        layout: "center",
                        items: [{
                            xtype: "panel", frame: false,
                            border: false,
                            layout: {
                                type: "vbox"
                            },
                            items: [{
                                xtype: "label",
                                text: "Dodawanie grup"
                            }, {
                                xtype: "component",
                                padding: "0 0 0 35",
                                html: "<span class='fa fa-code fa-2x'></span>"
                            }]
                        }]
                    }]
                }]
            }, {
                xtype: "panel", frame: false,
                bodyStyle: {
                    "background-image": "url(public/startBG.jpg) !important",
                    "background-repeat": "no-repeat"
                },
                border: false,
                layout: {
                    type: "hbox",
                    align: "stretch"
                },
                items: [{
                    xtype: "panel", frame: false,
                    flex: 1,
                    height: 190,
                    layout: {
                        type: "vbox",
                        align: "stretch"
                    },
                    padding: "15 7 15 7",
                    items: [{
                        xtype: "panel", frame: false,
                        height: 5,
                        bodyStyle: {
                            "background-color": "#CCFF33"
                        }
                    }, {
                        xtype: "panel", frame: false,
                        flex: 100,
                        border: false,
                        layout: "center",
                        items: [{
                            xtype: "panel", frame: false,
                            border: false,
                            layout: {
                                type: "vbox"
                            },
                            items: [{
                                xtype: "label",
                                text: "Wiadomości"
                            }, {
                                xtype: "component",
                                padding: "0 0 0 20",
                                html: "<span class='fa fa-envelope-o fa-2x'></span>"
                            }]
                        }]
                    }]
                }, {
                    xtype: "panel", frame: false,
                    flex: 1,
                    height: 190,
                    layout: {
                        type: "vbox",
                        align: "stretch"
                    },
                    padding: "15 7 15 7",
                    items: [{
                        xtype: "panel", frame: false,
                        height: 5,
                        bodyStyle: {
                            "background-color": "#3300CC"
                        }
                    }, {
                        xtype: "panel", frame: false,
                        flex: 100,
                        border: false,
                        layout: "center",
                        items: [{
                            xtype: "panel", frame: false,
                            border: false,
                            layout: {
                                type: "vbox"
                            },
                            items: [{
                                xtype: "label",
                                text: "Profil"
                            }, {
                                xtype: "component",
                                padding: "0 0 0 10",
                                html: "<span class='fa fa-bars fa-2x'></span>"
                            }]
                        }]
                    }]
                }, {
                    xtype: "panel", frame: false,
                    flex: 1,
                    height: 190,
                    layout: {
                        type: "vbox",
                        align: "stretch"
                    },
                    padding: "15 7 15 7",
                    items: [{
                        xtype: "panel", frame: false,
                        height: 5,
                        bodyStyle: {
                            "background-color": "#CC0033"
                        }
                    }, {
                        xtype: "panel", frame: false,
                        flex: 100,
                        border: false,
                        layout: "center",
                        items: [{
                            xtype: "panel", frame: false,
                            border: false,
                            layout: {
                                type: "vbox"
                            },
                            items: [{
                                xtype: "label",
                                text: "Pliki"
                            }, {
                                xtype: "component",
                                html: "<span class='fa fa-file-text fa-2x'></span>"
                            }]
                        }]
                    }]
                }]
            }]
        });

        PLAN_DASHBOARD.items = [
            PLAN_DASHBOARD.topBeam,
            PLAN_DASHBOARD.adminTiles
        ];

        PLAN_DASHBOARD.callParent(arguments);
    }
});
