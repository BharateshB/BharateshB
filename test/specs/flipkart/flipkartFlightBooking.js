// test script for flight booking using flipkart
// import required data and pages
let data=require('../../commonData.json')
let FKloginpage=require('../../pageobjects/flipkart/loginPage')
let Fkhomepage=require('../../pageobjects/flipkart/homePage')
let webUtils=require('../../../genericUtility/webUtility')
let flightSearch=require('../../pageobjects/flipkart/flightSearchPage')
let flightSelect=require('../../pageobjects/flipkart/flightSelectionPage')


describe('FK_Flight_Booking', async function() {
    // Retry all tests in this suite up to 2 times
    this.retries(2)

    it('TC_01_Book seat for 1 adult and 1 child', async function() {

        //Check for the application url
        await expect(browser).toHaveUrlContaining('flipkart')

        //Get the title of the page
        let pageTitle=await browser.getTitle()
        console.log("================== Page Title is ==========================="+pageTitle);
        
        //confirm home page
        await expect(browser).toHaveTitleContaining('Online')

        //From home page direct to flight booking
        await Fkhomepage.ClickOnFlightBookingLink();
        await expect(browser).toHaveUrlContaining('travel')
        await browser.pause(2000)

        //scroll window for better search
        await webUtils.scrollWindow();

        //get required date from commondata.json
        let monthYear=data.month+" "+data.year;
        let date=data.date;

        //get departure and arrival cities from commondata.json
        let departCity= data.departureCity;
       let arrivCity=data.arrivalCity;

       //choose seat count for child
       let childrenCount=data.childrenCount;
    //    console.log("========================================================++++++++++"+date+" "+monthYear+" "+" "+departCity+" "+arrivCity+" "+childrenCount);

        //method to enter departure city
        await flightSearch.selectDepartureCity(departCity);

        // method to enter arrival city
        await flightSearch.selectArrivalCity(arrivCity)

        //method to select date 
        await flightSearch.selectCalendar();
        await flightSearch.selectDate(monthYear,date);

        //method to enter children count
        await flightSearch.setChildrenCount(childrenCount)

        //method to confirm the entered count
        let selectedChildrenCount= await flightSearch.confirmChildrenCount()
        await expect(selectedChildrenCount).toHaveTextContaining(data.childrenCount)

        
        //method to finalize the travellers count
        await flightSearch.setFinalTravellers()
        
        //method to search flights
        await flightSearch.clickFlightSearch()
        await browser.pause(4000)

        //method to select flight
        let priceelements=await $$("//div[@class='_3xFhY1']/descendant::div[@class='_3uUoiD']");
        // let priceelement=$("//div[@class='_3xFhY1']/descendant::div[@class='_3uUoiD']");
        let pricelist=[];
        for (const priceele of priceelements) {
            pricelist.push(await priceele.getText())
        }
        await browser.pause(2000)
        console.log(pricelist);
        

        // console.log(await priceelement.getText());
        // await flightSelect.selectFlight()
        // await browser.pause(4000)
    });
});