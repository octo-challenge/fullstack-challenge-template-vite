import { z } from 'zod'

export const postResLoginDto = z.object({
  access_token: z.string(),
})
export const postPayloadLoginDto = z.any()
