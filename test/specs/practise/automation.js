describe('automation practice', () => {
    it('ap_TC_01', async() => {
        let element=await $("[value='position:asc']")
        let search=await $("//button[@class='btn btn-default button-search']")
        let prod=await $$("//a[@class='product-name']")
        console.log("+++++++++============ is displayed====================+++++++++++");
        console.log(await search.isDisplayed()); 

        console.log("+++++++++============ get text ====================+++++++++++");
        console.log(await search.getText()); 

        console.log("+++++++++============ is selected====================+++++++++++");
        console.log(await element.isSelected())

        console.log("+++++++++============ next element ====================+++++++++++");
        // await prod.forEach(async(element) => {
           console.log(await prod[1].getText()); 
        // });
        // console.log(await nextEle.getText());

    });
});

const cpson=Event.getModifierState