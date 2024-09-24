import { createRootRouteWithContext } from '@tanstack/react-router'
import { pipe } from 'fp-ts/function'
import { Outlet } from '@tanstack/react-router'
import { AppProvider } from '~/app/provider/app-provider'
import { FNB } from '~/shared/components/fnb'
import { GNB } from '~/shared/components/gnb'
import { AuthManager } from '~/shared/managers/auth'

function App() {
  return (
    <>
      <main className="mt-[var(--gnb-h)] pt-[var(--head-area)]">
        <GNB />
        <Outlet />
        <FNB />
      </main>
    </>
  )
}

interface RouterContext {
  auth: typeof AuthManager
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: pipe(App, AppProvider),
})
