const units = [500000, 200000, 100000, 50000, 20000, 10000, 5000, 2000, 1000];

// let note = 0;
// let remaining = 0;

function coinexChange(money) {
    if (money > units[0]) {
        // so to` tien 500k
        note = Math.floor(money / units[0]);
        remaining = money % units[0];
        console.log(note + ` notes ${units[0]}. ` + remaining)
    }

    if (remaining > units[1]) {
        // so to` tien 200k
        note = Math.floor(remaining / units[1]);
        remaining = money % units[1];
        console.log(note + ` notes ${units[1]}. ` + remaining)
    }


    if (remaining > units[2]) {
        // so to` tien 100k
        note = Math.floor(remaining / units[2]);
        remaining = money % units[2];
        console.log(note + ` notes ${units[2]}. ` + remaining)
    }

    if (remaining > units[3]) {
        // so to` tien 50k
        note = Math.floor(remaining / units[3]);
        remaining = money % units[3];
        console.log(note + ` notes ${units[3]}. ` + remaining)
    }

    if (remaining > units[4]) {
        // so to` tien 20k
        note = Math.floor(remaining / units[4]);
        remaining = money % units[4];
        console.log(note + ` notes ${units[4]}. ` + remaining)
    }

    if (remaining > units[5]) {
        // so to` tien 10k
        note = Math.floor(remaining / units[5]);
        remaining = money % units[5];
        console.log(note + ` notes ${units[5]}. ` + remaining)
    }

    if (remaining > units[6]) {
        // so to` tien 5k
        note = Math.floor(remaining / units[6]);
        remaining = money % units[6];
        console.log(note + ` notes ${units[6]}. ` + remaining)
    }


    if (remaining > units[7]) {
        // so to` tien 2k
        note = Math.floor(remaining / units[7]);
        remaining = money % units[7];
        console.log(note + ` notes ${units[7]}. ` + remaining)
    }

    if (remaining > units[8]) {
        // so to` tien 1k
        note = Math.floor(remaining / units[8]);
        remaining = money % units[8];
        console.log(note + ` notes ${units[8]}. ` + remaining)
    }

}

// coinexChange(599000)


function coinChange(money) {
    for (let i = 0; i < units.length; i++) {
        let remaining = money;
        if (remaining > units[i]) {
            note = Math.floor(remaining / units[i]);
            remaining = money % units[i];
            console.log(note + ` notes ${units[i]} ` + remaining)
        }

    }
}

// coinChange(599000)



// function coinChange(money) {
//     for (let i = 0; i > units.length; i++) {
//         if (money > 500000) {
//             notes = Math.raound(money / units[i]);
//             remaining = money % units[i]
//             console(`${notes} notes.`)
//         }
//     }
// }

// coinChange(1599000)