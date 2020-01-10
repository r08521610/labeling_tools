module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/scss/_mixins.scss";
        `,
      },
    },
  },
  transpileDependencies: [
    'vuetify',
  ],
};
