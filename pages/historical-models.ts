import { Selector ,t} from 'testcafe';

class HistoricalPage {
    fromDatePicker: Selector = Selector(`[data-testid=from-date-input']`);
    toDatePicker: Selector = Selector(`[data-testid=toDate-input]`);
    twitterCheckButton: Selector = Selector(`[data-testid='source-twitter']`); 
    OnlineCheckButton: Selector = Selector(`[data-testid='source-web']`);
    filtersDropDown: Selector = Selector(`[data-testid='filters-dropdown-input']`);
    filtersContentFileds: Selector = Selector(`[data-testid='filters-dropdown-container']`);
    queryText: Selector = Selector(`[data-testid='query-box-container']`); 
    runqueryButton : Selector = Selector('button').withText('Run Query ');
    viewsampleButton : Selector = Selector('button').withText('View sample');
    nameInput : Selector = Selector('#developer-name');
    
    async chooseSpecificFilter(index){
        await t.click(this.filtersDropDown);
    }

    async dowork(){
        //wait for page to load 
        const nameInputElement = await this.fromDatePicker.with({ visibilityCheck: true })();
        await t.wait(9000);
       // await t.click(this.fromDatePicker);
        await t.typeText(this.fromDatePicker,'Dec 04,2019 - 12:00 AM');
        //await t.click(this.toDatePicker);
       // await t.click(this.runqueryButton);
    }
}

export const historicalModel = new HistoricalPage();