import { Selector ,t} from 'testcafe';

    class clientDashboard{
        historicalLink: Selector  = Selector('a').withText('Historical');

       async getLinkofHistoricalSearch()
        {
            console.log(this.historicalLink.getAttribute('href'));
        }

}

export const clientdashboard = new clientDashboard();