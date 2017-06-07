let env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
  let config = require('./config.json');
  let envConfig = config[env];

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}

/**
* only develoment and test environment variables should be
  configured locally -- via some file
* production environment vars are always configured via heroku
  command line tools or heroku web app
* when you require JSON, it automatically parses it into a
  JS obj
*/
