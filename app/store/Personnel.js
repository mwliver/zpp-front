Ext.define('plan_web.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    flex: 100,  

    fields: [
        'name', 'email', 'phone'
    ],

    data: { items: [
        { name: 'Jean Luc', email: "jeanluc.picard@enterprise.com", login: "555-111-1111" },
        { name: 'Worf',     email: "worf.moghsson@enterprise.com",  login: "555-222-2222" },
        { name: 'Deanna',   email: "deanna.troi@enterprise.com",    login: "555-333-3333" },
        { name: 'Data',     email: "mr.data@enterprise.com",        login: "555-444-4444" }
    ]},

    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            rootProperty: 'items'
        }
    }
});
