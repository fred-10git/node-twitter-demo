const mongoose = require('mongoose');
const env = require(`../env/${ process.env.NODE_ENV }.env`);

exports.mongoosePromise = mongoose.connect(env.databaseUrl);
//         .then( () => {
//             console.log("Connexion Atlas OK");
//         })
//         .catch( (error) => console.log(error));
// }

        