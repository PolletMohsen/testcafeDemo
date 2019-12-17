import { Selector ,t} from 'testcafe';

    class menuHandler{
    musicddl: Selector  = Selector('ul').child('li').withText('Music');
    menuddl: Selector = Selector('ul').withAttribute('id','menu');
    element = Selector('li > ul > li').withText("Music");


    async chooseMusic(){
        
        await  t.click(this.musicddl);
        var elementsCount = await this.element.count;
         console.log('New count which should include all music fileds ',elementsCount);
        const elementcount = this.menuddl.childElementCount;
        console.log('Countttttttttttttt',elementcount);


     // await  t.click(Selector('.menu>ul>li').nth(1));
    }
}

export const menuModel = new menuHandler();