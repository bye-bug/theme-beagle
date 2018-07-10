'use strict';

module.exports = {
  name: 'theme-beagle',

  included: function(app) {
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/material-design-icons/fonts/Material-Design-Iconic-Font.eot', { destDir: 'fonts' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/material-design-icons/fonts/Material-Design-Iconic-Font.svg', { destDir: 'fonts' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/material-design-icons/fonts/Material-Design-Iconic-Font.ttf', { destDir: 'fonts' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/material-design-icons/fonts/Material-Design-Iconic-Font.woff', { destDir: 'fonts' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/material-design-icons/fonts/Material-Design-Iconic-Font.woff2', { destDir: 'fonts' });
  },
};
