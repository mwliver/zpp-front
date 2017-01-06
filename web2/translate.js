/**
 * Funkcja tłumaczeń stałych zawartych w aplikacji.
 * Każda stała powinna być definiowana w następujący sposób np. title: _("Przykładowy tytul")
 */
(function(){
    var translations = {};
    
    window._=function(value){
        return translations[value] || value || "";
    };
})();