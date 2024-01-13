export class AuthToken {
  private token: string

  constructor() {
    this.token = ''
  }

  getToken() {
    return this.token
  }

  setToken(newToken: string) {
    this.token = newToken
  }
}
