import angular from 'angular'
import uiRouter from 'angular-ui-router'
import { DefaultState, DefaultCtrl } from './default'

import '../style/app.css'

let app = () => {
  return {
    template: require('./app.html'),
    controllerAs: 'app'
  }
}

const MODULE_NAME = 'DefaultState.Controller'

angular.module('app', [])
  .controller('DefaultState.Controller', DefaultCtrl)
  .config(($stateProvider) => {
    $stateProvider
       .state(DefaultState.name, DefaultState)
  })
  .run(($state) => {
    $state.go('default')
  })

export default MODULE_NAME
