import { postResLoginDto, postPayloadLoginDto, postPayloadLoginRdo } from '.'
import { z } from 'zod'

export type TPostResLoginDto = z.infer<typeof postResLoginDto>
export type TPostPayloadLoginDto = z.infer<typeof postPayloadLoginDto>
export type TPostPayloadLoginRdo = z.infer<typeof postPayloadLoginRdo>
