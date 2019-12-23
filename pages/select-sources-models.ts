import { Selector ,t} from 'testcafe';

class sourcesPage{
    twitterCheckbox:Selector = Selector('div').withAttribute('data-testid','twitter-sourceChecker');
    authenticateBtn:Selector = Selector('button').withAttribute('data-testid','authenticate');
    twitteruserTxt:Selector = Selector('#username_or_email');
    twitterpasswordTxt:Selector = Selector('#password');
    nextBtn:Selector = Selector('button').withAttribute('data-testid','nextBtn');


    async chooseResource(){
        await t.click(this.twitterCheckbox);
        await t.click(this.nextBtn);
    }
    
    async authenticateTwitter(twitterUserName,twitterPassword){
        await t.click(this.authenticateBtn);
        await t.typeText(this.twitteruserTxt,twitterUserName);
        await t.typeText(this.twitterpasswordTxt,twitterPassword);
        await t.click('#allow');
    }
}
export const sourcepageModel= new sourcesPage();