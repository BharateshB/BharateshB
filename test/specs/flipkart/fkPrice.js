
    describe('', () => {
        it('', () => {
    // let searchedPriceList= $$("//div[@class='_-5f1wK']/preceding-sibling::div[@class='_3uUoiD']")
    // let pricelist=[]
    // for(const price of searchedPriceList){
    //     let price=await price.getText()
    //     pricelist.push(price)
    // }
    // console.log(pricelist);
    // let bestprice=pricelist.sort((a,b)=>a-b)
    // console.log(bestprice[0])
     
    
    
    // async bestprice() {
        let searchedPriceList= await $$("//div[@class='_-5f1wK']/preceding-sibling::div[@class='_3uUoiD']")
        let pricelist=[]
        for(const price of searchedPriceList){
             getprice=await price.getText()
            pricelist.push(getprice)
        }
        console.log("====+++++++++++++++++++++++++pricelist+++++++++++++++++++========="+pricelist);
        let bestprice=pricelist.sort((a,b)=>a-b)
        console.log("====+++++++++++++++++++++++++pricelist+++++++++++++++++++========="+bestprice[0])

        let pricelist=[]
        for (let i=0;i<this.searchedPriceList.length;i++) {
            pricelist.push(await this.searchedPriceList[i].getText())
        }
        console.log("=========================================pricelist+++++++++++++++++++++++"+pricelist);
    // }
});
});