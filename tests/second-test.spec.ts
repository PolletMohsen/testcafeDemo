 import ('testcafe');
 import {gmailmodel} from '../pages/gmail-models'
 import {landingPage} from '../pages/landing-notify-models'
 import {sourcepageModel} from '../pages/select-sources-models'


    fixture('login to gmail');
    test('should connect with email',async t=> {
       await t.navigateTo('https://staging.app.notify.ly/');
       await landingPage.getMagicLink();
    });

    test('login to app', async t => {
      await t.navigateTo('https://mail.google.com/');
      await gmailmodel.gmailLogin('pollet.mohsen@crowdanalyzer.com','*********');
      await t.wait(9000);
      // await gmailmodel.getMailSubject();
       });

    
