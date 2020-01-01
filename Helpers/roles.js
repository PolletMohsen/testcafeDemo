import{ Role } from'testcafe';
import{ loginModel } from'../pages/login-models';

// eslint-disable-next-line new-cap
export const admin = Role('https://app.crowdanalyzer.com/signin', async() => {
    await loginModel.login('pollet.mohsen@crowdanalyzer.com', 'Abcd@123');
}, { preserveUrl: true });
