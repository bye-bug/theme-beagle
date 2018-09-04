'use strict';

module.exports = {
  name: 'theme-beagle',

  included: function(app) {
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/material-design-icons/fonts/Material-Design-Iconic-Font.eot', { destDir: 'fonts' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/material-design-icons/fonts/Material-Design-Iconic-Font.svg', { destDir: 'fonts' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/material-design-icons/fonts/Material-Design-Iconic-Font.ttf', { destDir: 'fonts' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/material-design-icons/fonts/Material-Design-Iconic-Font.woff', { destDir: 'fonts' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/material-design-icons/fonts/Material-Design-Iconic-Font.woff2', { destDir: 'fonts' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Black.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Black.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Black.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Black.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Black.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-BlackItalic.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-BlackItalic.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-BlackItalic.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-BlackItalic.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-BlackItalic.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Bold.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Bold.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Bold.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Bold.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Bold.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-BoldItalic.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-BoldItalic.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-BoldItalic.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-BoldItalic.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-BoldItalic.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Light.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Light.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Light.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Light.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Light.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-LightItalic.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-LightItalic.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-LightItalic.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-LightItalic.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-LightItalic.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Medium.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Medium.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Medium.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Medium.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Medium.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-MediumItalic.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-MediumItalic.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-MediumItalic.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-MediumItalic.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-MediumItalic.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Regular.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Regular.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Regular.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Regular.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Regular.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-RegularItalic.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-RegularItalic.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-RegularItalic.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-RegularItalic.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-RegularItalic.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Thin.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Thin.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Thin.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Thin.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-Thin.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-ThinItalic.eot', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-ThinItalic.svg', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-ThinItalic.ttf', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-ThinItalic.woff', { destDir: 'lib/roboto' });
    app.import('vendor/beagle-v1.4.2/BS4/dist/starter/assets/lib/roboto/Roboto-ThinItalic.woff2', { destDir: 'lib/roboto' });

    app.import('vendor/beagle-v1.4.2/BS4/dist/html/assets/lib/bs4-breakpoint-check/jquery-breakpoint-check.js');
    app.import('vendor/beagle-v1.4.2/BS4/dist/html/assets/lib/perfect-scrollbar/js/perfect-scrollbar.jquery.js');
  },
};
