import React from 'react'
import { useLocation } from 'react-router-dom'

export function BrwoserRouterEventContainer({
  children,
}: React.PropsWithChildren) {
  const location = useLocation()
  React.useEffect(() => {
    // 여기서 modalParms를 초기화해준다.
    // TODO: @imwebme/generouted-react-router에서 해줄 작업
    if (history.state && history.state.usr && history.state.usr.modal === '') {
      delete history.state.usr.modalParams
    }
  }, [location])
  return <>{children}</>
}
