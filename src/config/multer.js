const multer = require(`multer`);
const path = require(`path`);
const crypto = require(`crypto`)

const destination = path.resolve(__dirname, `..`, `..`, `tmp`)

module.exports = {
    dest: destination,
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, destination)
        },
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) cb(err);

                file.key = `${hash.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            })
        }
    })
};
