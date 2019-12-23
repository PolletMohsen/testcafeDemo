import { Selector ,t} from 'testcafe';

class addNewAlert{
    addBtn: Selector = Selector('button')
    .withAttribute('data-testid','create-monitor-btn');

    addkeywordBtn: Selector = Selector('button')
    .withAttribute('data-testid','keywordCardButton');

    keywordcardDiv: Selector = Selector('div')
    .withAttribute('data-testid','keywordCard');
    monitorTxt: Selector =Selector('input')
    .withAttribute('name','name');
    keywordsTxt: Selector =Selector('input')
    .withAttribute('placeholder','Keyword, Hashtag, Expression');
    addkeywordTxtBtn: Selector = Selector('button').withText('Add');
    excludekeywordsTxt: Selector =Selector('input')
    .withAttribute('placeholder','Exclude Irrelevant Keywords');
    submitBtn: Selector = Selector('button')
    .withAttribute('data-testid','nextBtn');


    
    async clickOnAddNewAlert(){
        await t.click(this.addBtn);
        await t.expect(this.keywordcardDiv.exists).ok;
    }
    
    async addKeyword(monitor,keyword,excludeKeywords){
        await t.click(this.addkeywordBtn);
        await t.typeText(this.monitorTxt,monitor);
        await t.typeText(this.keywordsTxt,keyword);
        await t.pressKey('enter');
        await t.typeText(this.excludekeywordsTxt,excludeKeywords);
        await t.pressKey('enter');
        await t.click(this.submitBtn);


    }
}

export const addAlertPage = new addNewAlert();