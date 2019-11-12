const dotenv = require('dotenv');

// Set default to "development"
const nodeEnv = process.env.ENV_FILE || 'development';
const dotenvResult = dotenv.config({
    path: `./env/${nodeEnv}.env`,
});

if (dotenvResult.error) {
    throw dotenvResult.error;
}
