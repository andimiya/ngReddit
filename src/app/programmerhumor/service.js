export const PgHumorServiceName = 'aww'
export const PgHumorService = [
  '$http',
  class PgHumorService {
    constructor ($http) {
      this.$http = $http
      this.endpoint = 'https://www.reddit.com/r/programmerhumor.json'
    }

    getPosts () {
      return this.$http.get(this.endpoint)
    }
  }
]
