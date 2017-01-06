/**
 * Klasa z metodami pomocnicznymi da aplikacji
 */
Ext.define("PLAN.utils.Helpers", {
    singleton: true,
    /**
     * Funkcja wyświetlająca odpowiedni komunikat w przypadku pola wymaganego
     *
     * @params Object[] reqFields pola wymagane
     * @params Object sentObject obiekt wysyłany do API
     */
    validateRequiredFields: function(reqFields, sentObject) {
        var i, key, errorMsgArray = [],
            finded = false, errStringArray = [];

        for (i = 0; i < reqFields.length; i++) {
            finded = false;
            for (key in sentObject) {
                if (reqFields[i][key] && reqFields[i][key] !== "") {
                    finded = true;
                }
            }
            if (!finded) {
                errorMsgArray.push(reqFields[i]);
            }
        }

        if (errorMsgArray.length > 0) {
            
            for(i = 0; i < errorMsgArray.length; i++) {
                for(key in errorMsgArray[i]){
                    errStringArray.push(errorMsgArray[i][key]);
                }
            }
            Ext.Msg.show({
                title: "Uwaga !",
                message: "Proszę wprowadzić " + errStringArray[0],
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.ERROR
            });
        } else {
            return true;
        }
    },
    /**
     * Funkcja czyszcząca ze 'śmieci' dane ze store
     * 
     * @param Object[] storeData 
     */
    cleanStoreData: function (storeData) {
        var cleanedDataArr = []
        var i

        if (!storeData) {
            return
        }

        for (i = 0; i < storeData.items.length; i++) {
            cleanedDataArr.push(storeData.items[i].data)
        }

        return cleanedDataArr
    }
});