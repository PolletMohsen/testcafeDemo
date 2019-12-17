import { Selector ,t} from 'testcafe';

class caDashboard {
    dashbordlinks : Selector = Selector('.dashboards-list');

    async chooseFirstDashboard () {
       await t.click(this.dashbordlinks);
    }
}

export const dashboardmodel = new caDashboard();