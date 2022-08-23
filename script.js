function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


const fiveHeads = new Promise((resolve, reject) => {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5 && attempts < 101) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result == "heads") {
            headsCount++;
        }
        else {
            headsCount = 0;
        }
    }
    if (attempts < 101) {
        resolve(`It took ${attempts} tries to flip five "heads"`);
    }
    else {
        reject(`The coin has been flipped more than ${attempts} tries to flip five "heads" and still we do not have 5.`)
    }
}
);

fiveHeads
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");





