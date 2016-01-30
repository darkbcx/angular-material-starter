/// <reference path="./global.d.ts"/>

import angular = require('angular')
import appModule from './app.module'

angular.element(document).ready( () => {
    if (window.cordova !== undefined) {
        document.addEventListener('deviceready', () => {
            console.info('device is ready, bootstraping with cordova');
            angular.bootstrap(document, [appModule.name], {
                strictDi: true
            })
        }, false);
    } else {
        angular.bootstrap(document, [appModule.name], {
            strictDi: true
        })
    }
});
