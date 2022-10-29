const os = require('os');
const {writeFile} = require('fs');
const sentence = require ('./practice2');
const userName = os.userInfo().username;

writeFile('./content/practice.txt', sentence, (err) => {
    if (err) {
        console.log(err);
        
    } console.log(sentence);
});
    writeFile('./content/practice.txt', userName, {flag: 'a'}, (err) => {
        if (err){
            console.log(err);
        
        } console.log(userName);
});