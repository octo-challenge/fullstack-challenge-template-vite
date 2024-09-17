import { useMutation } from '@tanstack/react-query'
import { match, P } from 'ts-pattern'
import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { Button } from '~/shared/components/ui/button'
import { Input } from '~/shared/components/ui/input'
import { FormProvider, useForm } from 'react-hook-form'
import { postPayloadSignInDto, postSignIn } from '~/api/auth/sign-in'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '~/shared/components/ui/form'
import { IsValid } from '~/shared/calc/is-valid'
import { AuthManager } from '~/shared/managers/auth'
import React from 'react'
import { T_searchAuthState } from '~/shared/calc/search-auth-state'
import { 상수_인증상태 } from '~/api/@x/인증상태'

export const Route = createLazyFileRoute('/_auth/signin')({
  component: Signin,
})

function Signin() {
  const { authState } = Route.useSearch<T_searchAuthState>()

  React.useEffect(() => {
    match(authState)
      .with(상수_인증상태.인증만료, () => {
        toast.error('로그인이 만료되었습니다. 다시 로그인해주세요.')
      })
      .otherwise(() => null)
  }, [])

  const navigate = useNavigate()
  const { mutate } = useMutation({
    mutationFn: postSignIn(),
    onSuccess(e) {
      AuthManager.signin(e)
      navigate({ to: '/dashboard' })
    },
    onError() {
      toast.error('이메일과 패스워드가 맞지 않습니다')
    },
  })
  const form = useForm({
    resolver: zodResolver(postPayloadSignInDto),
    defaultValues: {
      user_email: '',
      password: '',
    },
  })
  const { handleSubmit } = form

  const onSubmit = handleSubmit((payload) => {
    mutate(payload)
  })

  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">로그인</h1>
        <p className="text-muted-foreground">
          계정의 이메일을 입력하여 로그인하세요.
        </p>
      </div>
      <FormProvider {...form}>
        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="user_email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel>이메일</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="hello@example.com"
                        isValid={IsValid(fieldState)}
                        autoComplete="off"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-2">
              <FormField
                control={form.control}
                name="password"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormLabel className="flex items-center">
                      비밀번호{' '}
                      <Link
                        to="/"
                        className="ml-auto inline-block text-sm font-normal underline"
                        tabIndex={5}
                      >
                        비밀번호 찾기
                      </Link>
                    </FormLabel>
                    <FormControl>
                      <Input
                        id="password"
                        type="password"
                        isValid={IsValid(fieldState)}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full" tabIndex={3}>
              로그인
            </Button>
            <div className="mt-4 text-center text-sm">
              계정이 없으신가요?{' '}
              <Link to="/signup" className="underline" tabIndex={4}>
                회원가입
              </Link>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
