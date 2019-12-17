import { Selector ,t} from 'testcafe';

class DatePicker{
    datetimetxt: Selector = Selector('input').withAttribute(
        'id',
        'datepicker'
    );
    

    async chooseSpecificDate(){
         await t.click(this.datetimetxt);
         await t.typeText(this.datetimetxt,'08/15/2019');
         const datetimetxtvalue = await this.datetimetxt.value;
         await console.log('This is checckk',datetimetxtvalue);
         await t.expect(datetimetxtvalue).contains('08/15/2019');
    }
}

export const datePickerModel = new DatePicker();