import { z } from 'zod'

import { postPayloadSignInDto, postPayloadSignInRdo, postResSignInDto } from '.'

/**
 * post sign-in
 */
export type TPostResSignInDto = z.infer<typeof postResSignInDto>
export type TPostPayloadSignInDto = z.infer<typeof postPayloadSignInDto>
export type TPostPayloadSignInRdo = z.infer<typeof postPayloadSignInRdo>
