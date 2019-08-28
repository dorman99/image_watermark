const sharp = require("sharp");
const fs = require("fs");

fs.readFile('./inspi.png', (err, image) => {
    let imageMainBuff = image;
    fs.readFile('./lock.png', (err, lockImage) => {
        let imageLockBuff = lockImage;
        sharp(imageMainBuff)
        .composite([{input: imageLockBuff, gravity: 'center'}])
        .sharpen()
        .toFile('./output.png')
        .catch(err => {
            console.log(err);
        })
    })
})