class ProductPage {
    get productTitle() {
        return $("div.title-group > h1 > span[itemprop='name']");
    }

    get addToCartBtn() {
        return $("a#addToBasket_inf041");
    }

    get productPrice() {
        return $("ins#cena_d");
    }

    async getProductPrice():Promise<string> {
        const price:WebdriverIO.Element = await this.productPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async getProductTitleValue():Promise<string> {
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async clickOnAddToCartBtn() {
        const btn:WebdriverIO.Element = await this.addToCartBtn;
        await btn.waitForDisplayed();
        await btn.click();
    }

    async productTitleIsVisible() {
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
    }

    async addToCartBtnIsVisible() {
        const btn:WebdriverIO.Element = await this.addToCartBtn;
        await btn.waitForDisplayed();
    }
}

export default new ProductPage();