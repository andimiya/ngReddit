export const AwwCtrl = ['$scope', 'aww', class AwwCtrl {
  constructor ($scope, AwwService) {
    $scope.posts = []
    this.title = 'Aww Title from the Controller'
    AwwService.getPosts()
      .then(posts => {
        console.log(posts, 'posts')
        $scope.posts = res.data.children
      })
  }
}]
