/**
 * Klasa uruchmieniowa aplikacji.
 * TODO utrzymanie sesji użytkownika np. Cookies Ext.util.Cookies
 * Po wgaśnięciu sesji, użytkownik zostaje przekierowany na strone logowania
 */
Ext.application({
    views: [
        "PLAN_VIEWPORT"
    ],
    name: "PLAN",
    launch: function() {

        PLAN.utils.Router.home();
    }
});
