const fs = require('fs');
// const folderName = '/Users'
// try {
//     if (!fs.existsSync(folderName)) {
//         fs.mkdirSync(folderName);
//     }
// } catch (err) {
//     console.error(err);
// }




fs.rename('wwtsd', 'Austin', err=> {

    if (err) {
        console.error(err);
        return
    }
    //done
})


fs.rmdir("Austin", { recursive: true }, (err) => {

    if (err) {
        throw err;
    }

    console.log(`${dir} is delete!`);
});
