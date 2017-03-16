import angular from 'angular'
import uiRouter from 'angular-ui-router'
import { DefaultState, DefaultCtrl } from './default'
import { AwwState, AwwCtrl, AwwService } from './aww'

import '../style/app.css'

let app = () => {
  return {
    template: require('./app.html'),
    controllerAs: 'app'
  }
}

const MODULE_NAME = 'app'

angular.module(MODULE_NAME, ['ui.router'])
  .directive('app', app)
  .controller('DefaultCtrl', DefaultCtrl)
  .controller('AwwCtrl', AwwCtrl)
  .service('AwwService', AwwService)
  .config(($stateProvider) => {
    $stateProvider
       .state(DefaultState.name, DefaultState)
       .state(AwwState.name, AwwState)
  })
  .run(($state) => {
    $state.go('default')
  })

export default MODULE_NAME
