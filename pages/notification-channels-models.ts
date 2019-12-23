import { Selector ,t} from 'testcafe';

class mintorNotificationChannel{
    mailNotifyToggle:Selector=Selector('div').withAttribute('data-testid','emailToggle');
    nextBtn:Selector = Selector('button').withAttribute('data-testid','nextBtn');
    allmentionsToggle:Selector=Selector('div').withAttribute('data-testid','all-mentionsToggle');
    selectfrequencyDdl:Selector = Selector('div').withAttribute('data-testid','select-frequency');
    

    async chooseNotifyByEmail(){
        await t.click(this.mailNotifyToggle);
        await t.click(this.allmentionsToggle);
        await console.log(this.selectfrequencyDdl.textContent);
        await t.click(this.nextBtn);
        
    }
}

export const notificationchannelsPage = new mintorNotificationChannel();