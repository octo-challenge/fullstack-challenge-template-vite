import React from 'react'
import { pipe, flow } from 'fp-ts/function'
import { BrwoserRouterEventContainer } from '~/app/provider/react-router-dom'

// 각 Provider를 래핑하는 함수
const wrap =
  (Provider: (props: React.PropsWithChildren) => React.ReactNode) =>
  (children: React.ReactNode) => <Provider>{children}</Provider>

const AppProvider =
  <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) => {
    const ComposedProviders = ({ children }: { children: React.ReactNode }) =>
      pipe(children, wrap(BrwoserRouterEventContainer))
    return (
      <ComposedProviders>
        <WrappedComponent {...props} />
      </ComposedProviders>
    )
  }

export { AppProvider }
