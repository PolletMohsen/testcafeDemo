import { Selector ,t} from 'testcafe';

class caLandingPage {
    emailInput : Selector = Selector('input').withAttribute(
          'placeholder',
          'Email',
      );
    passwordInput : Selector = Selector('input').withAttribute(
        'placeholder',
        'Password',
    );
    loginSubmitButton : Selector = Selector('button').withText('Sign In');

    async login(username:string, password:string){
        await t.typeText(this.emailInput, username);
        await t.typeText(this.passwordInput, password);
        await t.click(this.loginSubmitButton);
        
    }
    }

    export const loginModel = new caLandingPage();