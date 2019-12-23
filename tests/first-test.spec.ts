import ('testcafe');
import {admin} from '../Helpers/roles';
import {historicalModel} from '../pages/historical-models'
import {dashboardmodel} from '../pages/dashboard-models'


   /* fixture('Landing page - Header').page('http://google.com')
       .before(async t => {
           t.userEmail = 'pollet.test@gmail.com'
           t.password = '********';
       })
       .beforeEach(async ctx => {console.log('fixture 1- before each')})

    test('should display a submit buttin', async t=> {});
    test('2', async () => {});*/

    fixture('Login')
         test('should be able to login', async t => {
         await t.useRole(admin);
         
         await t.navigateTo
          ('https://app.crowdanalyzer.com/5b096dd1c0db1b152d65ca09#!/historicalV2');
        //  //t.wait(1000);
         
          await historicalModel.dowork();
    });

    /*test('should redirect to first dashboard', async t => {
        await dashboardmodel.chooseFirstDashboard();
    });*/

   
