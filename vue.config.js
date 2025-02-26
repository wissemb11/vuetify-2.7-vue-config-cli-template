module.exports = {
    lintOnSave: false, // Disable ESLint on save
    transpileDependencies: ['vuetify'],
    css: {
      loaderOptions: {
        sass: {
          additionalData: `
            @import "@/assets/styles/variables.scss";
          `
        }
      }
    }
  };