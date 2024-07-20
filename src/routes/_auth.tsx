import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: () => (
    <div className="min-h-[calc(100dvh-var(--gnb-h))] pt-[var(--head-area)]">
      <Outlet />
    </div>
  ),
})
