import Cookies from 'js-cookie'

const cookiesName = {
  refreshToken: 'refresh_token'
}

export const setRefreshToken = (refreshToken: string) => {
  Cookies.set(cookiesName.refreshToken, refreshToken)
}
export const getRefreshToken = () => {
  return Cookies.get(cookiesName.refreshToken)
}
export const removeRefreshToken = () => {
  Cookies.remove(cookiesName.refreshToken)
}
