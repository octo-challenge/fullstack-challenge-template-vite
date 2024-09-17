import { createFileRoute, Outlet, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  beforeLoad: ({ location, context }) => {
    // 로그인 페이지로 이동하려하는데 인증된 상태라면 dashboard로 리다이렉트한다
    if (location.pathname === '/signin' && context.auth.token?.accessToken) {
      throw redirect({ to: '/dashboard' })
    }
    return null
  },
  component: () => (
    <div className="pt-[var(--head-area)]">
      <Outlet />
    </div>
  ),
})
