class FlightSelectionPage{
    get flightBookLink(){
        return $("//div[@class='_-5f1wK']")
    }

    get searchedPriceList(){
        return $$("//div[@class='_-5f1wK']/preceding-sibling::div[@class='_3uUoiD']")
    }

    // async bestprice(){
    //     for (const value of this.searchedPriceList) {
    //         console.log("===========+++++++ price value ++++++++++========="+value);
    //     }
    // }
    
    
    async selectFlight(){
        await browser.pause(2000)
        // let price1=await this.searchedPriceList[1].getText()
       
        await this.flightBookLink.click()
    }
}

module.exports=new FlightSelectionPage()