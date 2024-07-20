import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/logout')({
  beforeLoad: ({ context }) => {
    if (context.auth.value) {
      context.auth.logout()
      throw redirect({ to: '/login' })
    }
  },
  component: () => <div>Hello /_auth/logout!</div>,
})
