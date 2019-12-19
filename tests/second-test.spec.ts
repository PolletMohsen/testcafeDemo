import ('testcafe');
 import {gmailmodel} from '../pages/gmail-models'
 import {landingPage} from '../pages/landing-notify-models'
// import { ClientFunction } from 'testcafe';
// import {menuModel} from './menu.models'

    fixture('login to gmail');
    test('should connect with email',async t=> {
      //  await t.navigateTo('https://staging.app.notify.ly/');
      //  await landingPage.getMagicLink();
    });

    test('login to app', async t => {
      await t.navigateTo('https://mail.google.com/');
      await gmailmodel.gmailLogin('pollet.mohsen@crowdanalyzer.com','Abcd@123lyly');
      await t.wait(9000);
      // await gmailmodel.getMailSubject();
       });

   /* fixture ('choose music').page('https://demoqa.com/menu/');
    test('should select music', async t=>{
       //  await menuModel.chooseMusic();
    })*/
    
