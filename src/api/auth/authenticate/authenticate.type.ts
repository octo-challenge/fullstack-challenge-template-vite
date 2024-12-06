import { z } from 'zod'

import { getParamsAuthenticateDto, getResAuthenticateDto } from '.'

/**
 * get authenticate
 */
export type TGetResAuthenticateDto = z.infer<typeof getResAuthenticateDto>
export type TGetParamsAuthenticateDto = z.infer<typeof getParamsAuthenticateDto>
