import ('testcafe');
import {addAlertPage} from '../pages/addalert-models'
import {sourcepageModel} from '../pages/select-sources-models'
import {notificationchannelsPage} from '../pages/notification-channels-models'

fixture ('Add new alert')
.page('https://staging.app.notify.ly//login?code=E6mOgm6Q&email=pollet.mohsen@crowdanalyzer.com');

test('should click on add new alert button', async t=>{
    await addAlertPage.clickOnAddNewAlert();
    await addAlertPage.addKeyword('uber','uberEats','uberPlay');
    await sourcepageModel.chooseResource();
    await notificationchannelsPage.chooseNotifyByEmail();
   // await sourcepageModel.authenticateTwitter('pollet_22@yahoo.com','*******');
})


