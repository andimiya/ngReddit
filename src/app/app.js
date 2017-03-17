import angular from 'angular'
import uiRouter from 'angular-ui-router'
import { DefaultState, DefaultCtrl } from './default'
import { AwwServiceName, AwwState, AwwCtrl, AwwService } from './aww'
import { ThumbName, Thumb } from './thumb'

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
  .directive(ThumbName, Thumb)
  .controller('DefaultCtrl', DefaultCtrl)
  .controller('AwwCtrl', AwwCtrl)
  .controller('AwwCtrl', AwwCtrl)
  .service(AwwServiceName, AwwService)
  .config(($stateProvider) => {
    $stateProvider
       .state(DefaultState.name, DefaultState)
       .state(AwwState.name, AwwState)
  })
  .run(($state) => {
    $state.go('default')
  })

export default MODULE_NAME
