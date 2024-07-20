import { useMutation } from '@tanstack/react-query'
import { createLazyFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { Button } from '~/shared/components/ui/button'
import { Input } from '~/shared/components/ui/input'
import { Label } from '~/shared/components/ui/label'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { useAuth } from '~/shared/hooks/use-auth'
import { postSignIn } from '~/api/sign-in'

export const Route = createLazyFileRoute('/_auth/signin')({
  component: Signin,
})

function Signin() {
  const navigate = useNavigate()
  const setAuth = useAuth().signin
  const { mutate } = useMutation({
    mutationFn: postSignIn(),
    onSuccess(e) {
      setAuth(e)
      navigate({ to: '/dashboard' })
    },
    onError(e) {
      console.log('onError', e)
    },
  })
  const form = useForm({
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
              <Label htmlFor="email">이메일</Label>
              <Controller
                control={form.control}
                name="user_email"
                render={({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="example@email.com"
                    required
                    tabIndex={1}
                  />
                )}
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center">
                <Label htmlFor="password">비밀번호</Label>
                <Link
                  to="/"
                  className="ml-auto inline-block text-sm underline"
                  tabIndex={5}
                >
                  비밀번호 찾기
                </Link>
              </div>
              <Controller
                control={form.control}
                name="password"
                render={({ field }) => (
                  <Input {...field} type="password" required tabIndex={2} />
                )}
              />
            </div>
            <Button type="submit" className="w-full" tabIndex={3}>
              로그인
            </Button>
            <div className="mt-4 text-center text-sm">
              계정이 없으신가요?{' '}
              <Link to="/" className="underline" tabIndex={4}>
                회원가입
              </Link>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
