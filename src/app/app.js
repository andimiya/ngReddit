import angular from 'angular'

import '../style/app.css'

let app = () => {
  return {
    template: require('./app.html'),
    controllerAs: 'app'
  }
}

const MODULE_NAME = 'app'

angular.module(MODULE_NAME, [])
  // .config(($stateProvider) => {
  //   $stateProvider
  //      .state(DefaultState.name, DefaultState)
  // })
  // .run(($state) => {
  //   $state.go('default')
  // })

export default MODULE_NAME
