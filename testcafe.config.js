const createTestCafe = require('testcafe');
async function setupTestCafe () {
    const testcafe = await createTestCafe ('localhost');
    try{
        const runner = testcafe.createRunner();
        const failCount = await runner
        .src('tests/*.spec.ts')
        .browsers(['chrome'])
        .run();
        console.log(`Failed tests : ${failCount}`);
        testcafe.close();
    }
    catch(error){
        console.log(error);
        testcafe.close();
    }
}

setupTestCafe();