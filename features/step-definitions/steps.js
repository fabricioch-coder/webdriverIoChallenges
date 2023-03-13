const { Given, When, Then } = require('@wdio/cucumber-framework');

const HomePage = require('../pageobjects/home.page');
const ItemPage = require('../pageobjects/item.page');

const pages = {
    home: HomePage,
    item: ItemPage
}

Given('Abro el sitio de Ebay {string}', async function (page) {

    await pages[page].open()

});


When('El usuario busca {string}', async function (item) {

    await HomePage.search(item);

});

Then(/^El usuario ve los resultados de la busqueda$/, async function () {


    await expect(ItemPage.txtTotalItems).toBeExisting()



    console.log(`El Numero de resultados en Ebay para esta busqueda es de mas de: ${ await ItemPage.txtTotalItems.getText() } Items`)

/*
    await ItemPage.txtTotalItems.getText().then((text) => {
        console.log(`El Numero de resultados en Ebay para esta busqueda es de mas de: ${text} Items`);
    });
*/


});

Then('El usuario ve el numero de resultados de la busqueda en la consola de la terminal',  function () {

        console.log(`El Numero de resultados en Ebay para esta busqueda es de mas de: ${this.context.items} Items`);

});
