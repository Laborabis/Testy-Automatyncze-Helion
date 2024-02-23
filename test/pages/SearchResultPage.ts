class SearchResultPage {
    get pageTitle() {
        return $("h1#pageTitle")
    }

    get booksItem() {
        return $$("ul.list > li");
    }

    get firstBookItem() {
        return $("ul.list > li:nth-child(1)  > a");
    } 

    async clickOnFirstBookItem() {
        const item:WebdriverIO.Element = await this.firstBookItem;
        await item.waitForDisplayed();
        await item.scrollIntoView();
        await item.click();
    }

    async getNumberOfBooks():Promise<number> {
        const books:WebdriverIO.ElementArray = await this.booksItem;
        return await books.length;
    }

    async getPageTitle():Promise<string> {
        const h1:WebdriverIO.Element = await this.pageTitle;
        await h1.waitForDisplayed();
        return await h1.getText();
    }
}

export default new SearchResultPage();