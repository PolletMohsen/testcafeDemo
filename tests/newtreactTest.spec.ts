import 'testcafe'
import { waitForReact } from 'testcafe-react-selectors';
import { ReactSelector } from 'testcafe-react-selectors';

fixture `App tests`
    .page('https://staging.app.notify.ly//login?code=_thTYIBY&email=pollet.mohsen@crowdanalyzer.com')
    .beforeEach(async () => {
        await waitForReact();
    });

    test('should delete el url',async t=>{
        const item1 = await ReactSelector('monitor-info');
        await t.click(item1);
    });
