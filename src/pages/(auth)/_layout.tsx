import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-[calc(100dvh-var(--gnb-h))] pt-[var(--head-area)]">
      <Outlet />
    </div>
  )
}
