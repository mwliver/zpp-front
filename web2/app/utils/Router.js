/**
 * Klasa routingu aplikacji
 * Na podstawie przekazanych danych do funkcji 'PLAN.utils.Router.open()' otwiera
 * odpowiednią formatkę
 */
Ext.define("PLAN.utils.Router", {
    /**
     * Zob. [Ext.Class.singleton]
     */
    singleton: true,
    /**
     * Funkcja otwierająca głowny widok aplikacji
     */
    home: function() {
        var Router = this;

        Router.open({
            formName: "LOGIN_PANEL",
            contextForm: null,
            home: true
        });
    },
    /**
     * Główny viewport aplikacji
     */
    PLAN_VIEWPORT: null,
    /**
     * Aktualnie otwarta formatka
     */
    currentForm: null,
    /**
     * Główna funkcja routingu aplikacji.
     * Otwiera konkretną formatkę wg przekazanych parametrów
     *
     * @param Object params parametry formatki która ma zostać dodana do głównego viewPortu apliacji
     */
    open: function(params) {
        var Router = this,
            contentContainer;

        if (!Router.PLAN_VIEWPORT) {
            Router.PLAN_VIEWPORT = Ext.create("PLAN.view.PLAN_VIEWPORT");
        }
        if(params.contextForm) {
            Router.PLAN_VIEWPORT.leftContextMenu.setHidden(false);
            Router.PLAN_VIEWPORT.topPanel.setHidden(true);
        }
        if(params.home) {
            Router.PLAN_VIEWPORT.leftContextMenu.setHidden(true);
        }

        Router.currentParams = params;
        contentContainer = Router.PLAN_VIEWPORT.contentContainer;
        contentContainer.removeAll();
        Router.currentForm = Ext.create("PLAN.view." + params.formName, Ext.merge({
            viewModel: new Ext.app.ViewModel()
        }));
        contentContainer.add(Router.currentForm);
    }
});
