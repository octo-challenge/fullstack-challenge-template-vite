import { createRootRoute } from '@tanstack/react-router'
import { pipe } from 'fp-ts/function'
import { Outlet } from '@tanstack/react-router'
import { AppProvider } from '~/app/provider/app-provider'
import { FNB } from '~/shared/components/fnb'
import { GNB } from '~/shared/components/gnb'

function App() {
  return (
    <>
      <GNB />
      <div className="mt-[var(--gnb-h)]">
        <Outlet />
      </div>
      <FNB />
    </>
  )
}

export const Route = createRootRoute({
  component: pipe(App, AppProvider),
})
