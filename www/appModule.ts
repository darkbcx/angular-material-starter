
import 'angular-component'
import 'angular-ui-router'
import 'angular-material'
import 'angular-material/angular-material.css'

import appComponent from './appComponent'
import appRouterConfig from './appRouterConfig'

export default angular.module('appModule', [
    'ui.router',
    'ngMaterial'
])
    .component('app', appComponent)
    .config(appRouterConfig)
