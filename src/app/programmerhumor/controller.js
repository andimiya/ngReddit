export const PgHumorCtrl = ['$scope', 'aww', class PgHumorCtrl {
  constructor ($scope, PgHumorService) {
    $scope.posts = []
    this.title = 'PgHumor Title from the Controller'
    PgHumorService.getPosts()
      .then(({
        status,
        data: {
          data: {
            children
          }
        }
      }) => {
        if (status !== 200) {
          $scope.error = `Error fetching /r/programmerhumor.json\nStatus: ${status}`
        }
        $scope.posts = children
          .filter(child => child.data.preview)
          .map(child => child.data)
      })
  }
}]
