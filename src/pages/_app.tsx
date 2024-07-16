import { pipe, flow } from 'fp-ts/function'
import { Outlet } from 'react-router-dom'
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

export default pipe(App, AppProvider)
