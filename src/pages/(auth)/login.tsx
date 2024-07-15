import { Link } from 'react-router-dom'
import { Button } from '~/shared/components/ui/button'
import { Input } from '~/shared/components/ui/input'
import { Label } from '~/shared/components/ui/label'

export default function Login() {
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">로그인</h1>
        <p className="text-muted-foreground">
          계정의 이메일을 입력하여 로그인하세요.
        </p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">이메일</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@email.com"
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center">
            <Label htmlFor="password">비밀번호</Label>
            <Link to="#" className="ml-auto inline-block text-sm underline">
              비밀번호 찾기
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          로그인
        </Button>
        <div className="mt-4 text-center text-sm">
          계정이 없으신가요?{' '}
          <Link to="#" className="underline">
            회원가입
          </Link>
        </div>
      </div>
    </div>
  )
}
