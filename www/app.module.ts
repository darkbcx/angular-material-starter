
import 'angular-ui-router';
import 'angular-material';
import 'angular-material/angular-material.css';
import 'angular-component';

const appComponent = {
    template: require('./app.template.html')
}

export default angular.module('appModule', [
    'ui.router',
    'ngMaterial'
])
    .component('app', appComponent)
