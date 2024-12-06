import { flow, pipe } from 'fp-ts/function'
import React from 'react'

import { TanstackRouterProvider } from './tanstack-router'

// 각 Provider를 래핑하는 함수
const wrap =
  (Provider: (props: React.PropsWithChildren) => React.ReactNode) =>
  (children: React.ReactNode) => <Provider>{children}</Provider>

const AppProvider =
  <P extends object>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) => {
    const ComposedProviders = ({ children }: { children: React.ReactNode }) =>
      pipe(children, wrap(TanstackRouterProvider))
    return (
      <ComposedProviders>
        <WrappedComponent {...props} />
      </ComposedProviders>
    )
  }

export { AppProvider }
