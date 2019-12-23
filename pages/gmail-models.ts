import { Selector ,t} from 'testcafe';
import { ClientFunction } from 'testcafe';



class email{
    emailTxt: Selector = Selector('#identifierId');
    nextBtn: Selector = Selector('#identifierNext');
    passwordTxt: Selector = Selector('#password');
    loginBtn: Selector = Selector('#passwordNext');
    mailsearchTxt: Selector = Selector ('input').withAttribute
    ('placeholder','Search mail');
    subject: Selector= Selector('.zF').withAttribute('email',
    'info@peoplehremails.com');
     
    magicLink: Selector = Selector('#qa');

    async gmailLogin(username:string, password:string)
    {
         await  t.typeText(this.emailTxt,username);
         await  t.click(this.nextBtn);
         await  t.typeText(this.passwordTxt,password);
         await  t.click(this.loginBtn);
         await  t.wait(900);
         //zF
         await  t.click(() => document.getElementsByClassName('yP')[1]);
         await t.wait(900);
         let x =ClientFunction(() =>
             document.getElementsByClassName('m_6196007734776176597columns')[1]
             .textContent);
             let y =ClientFunction(() =>
             document.getElementsByClassName('m_6196007734776176597columns')[1]
             .innerHTML);
          await console.log('xxxxxxxx',x);
          await console.log('chrildreeennn',y);

        // let x =ClientFunction(() =>
        //     document.getElementsByClassName('m_8799246983569157982row')[1].getAttribute('value'));
        //     let tableRows = ;
        //            var count    = await tableRows.count;
       
        //            for (let i = 0; i < count; i++)
        //            {
        //                console.log(await tableRows.nth(i).find('td').innerText);
        //            }
            // let firstCheckboxSelector = Selector
            // (elementByXPath('//*[@id=":qa"]/div[1]/table/tbody/tr/td/table[2]/tbody/tr/th/table/tbody/tr/th[1]'));
            //  console.log(await firstCheckboxSelector.textContent);

            //  console.log(await firstCheckboxSelector.value);
        //  await t.click(() => document.getElementsByClassName('yP'));
        
        //   Selector  clickInput = 
        //      ClientFunction(() => document.getElementsByName('hello')[0]);
        //      await t.click(clickInput);
        //  let notifymail= document.getElementsByName('hello');
        //  await t.click(notifymail.item);
        // await t.click(Selector('span').withText('hello'));

        // t
        // .typeText('#identifierId',username)
        // .click('#identifierNext')
        // .typeText('#password',password)
        // .click('#passwordNext')
        // //.wait(10000)
        
        // await t.typeText(this.emailTxt,username);
        // await t.click(this.nextBtn);
        // await t.typeText(this.passwordTxt,password);
        // await t.click(this.loginBtn);
    }

    async getMailSubject(){
        const x=this.subject.textContent;
        console.log('XXXXXXXXX',x);
        await t.click(this.subject);
        // const emailSubject = Selector('zF').value;
        // await console.log("Subjectttttt",emailSubject);
    }
}

const elementByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null )
    const items = [];

    let item = iterator.iterateNext();

    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }

    return items;
});

export const gmailmodel =new email();