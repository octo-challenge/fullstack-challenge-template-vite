import { ApiClient } from '~/shared/api'
import {
  getResAuthenticateDto,
  type TGetResAuthenticateDto,
  type TGetParamsAuthenticateDto,
} from '.'

const axios = ApiClient()

/**
 * @description
 */
export function getAuthenticate() {
  return async function (params: TGetParamsAuthenticateDto) {
    const result = await axios
      .get<TGetResAuthenticateDto>('/auth/authenticate', { params })
      .then((res) => res.data)

    try {
      getResAuthenticateDto.parse(result.data)
    } catch (error) {
      console.error(error)
    }
    return result.data
  }
}
