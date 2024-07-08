export default ({ app }) => {
    app.router.afterEach((to) => {
      if (to.hash) {
        const element = document.getElementById(to.hash.replace('#', ''));
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    });
  };