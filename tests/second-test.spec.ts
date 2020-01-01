 import ('testcafe');
 import {gmailmodel} from '../pages/gmail-models'
 import {landingPage} from '../pages/landing-notify-models'



    fixture('login to gmail');
    test('should connect with email',async t=> {
       await t.navigateTo('https://staging.app.notify.ly/');
       await landingPage.getMagicLink();
    });

    test('login to app', async t => {
      await t.navigateTo('https://mail.google.com/');
<<<<<<< HEAD
      await gmailmodel.gmailLogin('pollet.mohsen@crowdanalyzer.com','*******');
=======
      await gmailmodel.gmailLogin('pollet.mohsen@crowdanalyzer.com','*********');
>>>>>>> 358364997690738170d396d53d55363af85b946f
      await t.wait(9000);
      // await gmailmodel.getMailSubject();
       });

    
