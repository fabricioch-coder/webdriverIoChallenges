const Page = require('./page')

class itemPage extends Page {

    get txtTotalItems () {
        return $('/html[1]/body[1]/div[8]/div[4]/div[1]/div[1]/div[2]/div[1]/div[1]/h1[1]/span[1]')
    }

}

module.exports = new itemPage()