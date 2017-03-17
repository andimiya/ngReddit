import angular from 'angular'
import uiRouter from 'angular-ui-router'
import { DefaultState, DefaultCtrl } from './default'
import { AwwServiceName, AwwState, AwwCtrl, AwwService } from './aww'
import { ThumbName, Thumb } from './thumb'
import { PgHumorServiceName, PgHumorState, PgHumorCtrl, PgHumorService } from './programmerhumor'

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
  .controller('PgHumorCtrl', PgHumorCtrl)
  .service(AwwServiceName, AwwService)
  .service(PgHumorServiceName, PgHumorService)
  .config(($stateProvider) => {
    $stateProvider
       .state(DefaultState.name, DefaultState)
       .state(AwwState.name, AwwState)
       .state(PgHumorState.name, PgHumorState)
  })
  .run(($state) => {
    $state.go('default')
  })

export default MODULE_NAME
