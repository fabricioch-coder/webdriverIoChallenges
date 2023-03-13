

const Page = require('./page');

class HomePage extends Page {

    get inputSearchbar () {
        return $('#gh-ac');
    }

    get btnBuscar () {
        return $('#gh-btn');
    }

    async search (item) {
        await this.inputSearchbar.setValue(item)   //sendKeys(item)   //.setValue(item);
        await this.btnBuscar.click();
    }

    open () {
        return super.open('/');
    }
}

module.exports = new HomePage();
