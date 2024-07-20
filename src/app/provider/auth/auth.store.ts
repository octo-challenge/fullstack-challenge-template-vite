import React from 'react'
import { SetStateAction, atom, useAtom, useAtomValue, useSetAtom } from 'jotai'
import { RESET, atomFamily, atomWithReset, useResetAtom } from 'jotai/utils'
import { TAuthBase } from '.'

type AtomKey = {
  atomKey?: string
}
type AtomType = {
  key: string
  value?: TAuthBase
}
const authState = atomFamily(
  ({ key }: AtomType) => {
    const rat = atomWithReset<AtomType>({
      key,
    })

    const at = atom(
      (get) => get(rat).value,
      (_get, set, update: SetStateAction<AtomType['value']> | typeof RESET) => {
        if (update === RESET) {
          set(rat, RESET)
          return
        }
        if (typeof update === 'function') {
          set(rat, (prev) => {
            const v = update(prev.value)
            return { key, value: v }
          })
          return
        }
        set(rat, { key, value: update })
      },
    )
    at.debugLabel = key
    return at
  },
  (a, b) => a.key === b.key,
)

export const useAuthAtom = {
  key: (p?: AtomKey) => `auth${p?.atomKey ? '' : '(' + p?.atomKey + ')'}`,
  atom: (p?: AtomKey) =>
    authState({
      key: useAuthAtom.key(p),
    }),
  state: (p?: AtomKey) =>
    useAtom(
      React.useMemo(
        () =>
          authState({
            key: useAuthAtom.key(p),
          }),
        [p],
      ),
    ),
  get: (p?: AtomKey) =>
    useAtomValue(
      React.useMemo(
        () =>
          authState({
            key: useAuthAtom.key(p),
          }),
        [p],
      ),
    ),
  set: (p?: AtomKey) =>
    useSetAtom(
      React.useMemo(
        () =>
          authState({
            key: useAuthAtom.key(p),
          }),
        [p],
      ),
    ),
  reset: (p?: AtomKey) =>
    useResetAtom(
      React.useMemo(
        () =>
          authState({
            key: useAuthAtom.key(p),
          }),
        [p],
      ),
    ),
}
