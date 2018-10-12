const env = process.env;
console.log(env.APP_SECRET);

const config = {
  secret: env.APP_SECRET
}

module.exports = config;