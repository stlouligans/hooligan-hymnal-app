module.exports = () => {
  if (process.env.APP_ENV === "production") {
    return require("./app.production.json");
  // } else if (process.env.APP_ENV === "staging") {
  //   return require("./app.staging.json");
  } else {
    return require("./app.development.json");
  }
};
export default {
  // ...
  android: {
    googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
    versionCode: "2"
    // ...
  },
};

