import { ClientFunction } from 'testcafe';

class helperActions
{
 browserscroll = ClientFunction(function() {
    window.scrollBy(0,1000)
});
}

export const helperActionsModel = new helperActions();
