import ('testcafe');
import {admin} from '../Helpers/roles';
import {historicalModel} from '../pages/historical-models'


   /* fixture('Landing page - Header').page('http://google.com')
       .before(async t => {
           t.userEmail = 'pollet.mohsen@crowdanalyzer.com'
           t.password = 'Abcd@123';
       })
       .beforeEach(async ctx => {console.log('fixture 1- before each')})

    test('should display a submit buttin', async t=> {});
    test('2', async () => {});*/

    fixture('Login')
         test('should be able to login', async t => {
        await t.useRole(admin);
        // await loginModel.login('pollet.mohsen@crowdanalyzer.com','Abcd@123');
        //  //t.wait(10000);
        //  await t.navigateTo
        //  ('https://app.crowdanalyzer.com/5b096dd1c0db1b152d65ca09#!/historicalV2');
        //  //t.wait(1000);
        // //  await dashboardmodel.chooseFirstDashboard();
        //  await historicalModel.dowork();
    });

    /*test('should redirect to first dashboard', async t => {
        await dashboardmodel.chooseFirstDashboard();
    });*/

   
