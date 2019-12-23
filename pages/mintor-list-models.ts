import { Selector ,t} from 'testcafe';

class montiorList{
    mintorContent: Selector = Selector('div').withAttribute('data-testid','monitor-info');
    mintoractionsBtn: Selector = Selector('img').withAttribute('alt','settings-icon');
    deletekeywordBtn:Selector =Selector('span').withText('Delete');

    async deleteMonitor(){
        await t.click(this.mintoractionsBtn);
        await t.click(this.deletekeywordBtn); 
    }
}
