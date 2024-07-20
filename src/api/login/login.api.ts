import { AxiosResponse } from 'axios'
import { ApiClient } from '~/shared/api'
import {
  type TPostResLoginDto,
  type TPostPayloadLoginDto,
  postResLoginDto,
} from '.'

const axios = ApiClient()

/**
 * @API문서
 * @description login
 */
export function postLogin() {
  return async function (body: TPostPayloadLoginDto) {
    type R = typeof body
    type T = TPostResLoginDto
    const result = await axios
      .post<T, AxiosResponse<T>, R>('/auth/login', body)
      .then((res) => res.data)

    return result
  }
}
