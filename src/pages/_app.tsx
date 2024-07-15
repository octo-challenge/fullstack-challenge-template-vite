import { Outlet } from 'react-router-dom'
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

export default App
