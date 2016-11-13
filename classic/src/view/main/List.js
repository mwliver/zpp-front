/**
 * This view is an example list of people.
 */
Ext.define('plan_web.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'plan_web.store.Personnel'
    ],

    title: 'Użytkownicy',

    flex: 100,

    store: {
        type: 'personnel',
        autoLoad: true,
        proxy: {
            type: 'ajax',
            url: 'http://localhost:8080/user/list',
            reader: {
                type: 'json'
            }
        },
    },
    columns: [
        { text: 'Login', dataIndex: 'login' },
        { text: 'Imię', dataIndex: 'name' },
        { text: 'Email', dataIndex: 'email', flex: 1 }
    ],
    listeners: {
        select: function () {
            alert('TODO')
        } 
    }
});
