import { Selector ,t} from 'testcafe';

const elementByClassName = Selector(className => {
    return document.getElementsByClassName(className);
});
