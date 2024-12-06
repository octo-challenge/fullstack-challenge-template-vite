import { z } from 'zod'

export const 상수_인증상태 = {
  인증만료: 'expired',
} as const

export type T상수_인증상태 = z.infer<z.ZodNativeEnum<typeof 상수_인증상태>>
