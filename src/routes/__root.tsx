import { createRootRouteWithContext } from '@tanstack/react-router'
import { pipe } from 'fp-ts/function'
import { Outlet } from '@tanstack/react-router'
import { AppProvider } from '~/app/provider/app-provider'
import { FNB } from '~/shared/components/fnb'
import { GNB } from '~/shared/components/gnb'
import { TAuth } from '~/shared/hooks/use-auth'

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

interface MyRouterContext {
  auth: TAuth
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: pipe(App, AppProvider),
})
