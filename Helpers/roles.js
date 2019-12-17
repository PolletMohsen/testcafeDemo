import { Role } from 'testcafe';
import {loginModel} from '../pages/login-models'

export const admin = Role('https://app.crowdanalyzer.com/signin', async t => {
        await loginModel.login('pollet.mohsen@crowdanalyzer.com', 'Abcd@123');
    }, { preserveUrl: true });