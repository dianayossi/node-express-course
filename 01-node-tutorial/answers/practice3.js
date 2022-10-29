fs = require('fs').promises;
const {writeFile} = require('fs').promises;

async function makeFile(){
    try{
        await writeFile('./content/practice2.txt', 'This is my first line.\n')
        for (let i = 2; i <= 10; i++){
            console.log(`Line ${i}`);
        await writeFile('./content/practice2.txt', `This is line ${i}.\n`, {
            encoding : 'utf8', flag: 'a'});
        }
    } catch (err) {
        console.log('error');
    }
}
 makeFile();