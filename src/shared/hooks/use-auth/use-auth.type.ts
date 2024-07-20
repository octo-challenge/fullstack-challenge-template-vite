export interface TAuthBase {
  access_token: string
}

export interface TAuth {
  value?: TAuthBase
  logout: () => void
  login: (auth: TAuthBase) => void
}
