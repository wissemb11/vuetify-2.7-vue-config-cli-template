module.exports = {
  lintOnSave: false, // Disable ESLint on save
  transpileDependencies: ["vuetify"],
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "@/assets/styles/variables.scss";
          `,
      },
    },
  },
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vuetify-2.7-vue-config-cli-template/"
      : "/",
};
