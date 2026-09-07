import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { RequestModal, type RequestPreset } from './RequestModal'

type Ctx = {
  openRequest: (preset?: RequestPreset) => void
}

const RequestCtx = createContext<Ctx | null>(null)

export function useRequest() {
  const ctx = useContext(RequestCtx)
  if (!ctx) throw new Error('useRequest must be used inside RequestProvider')
  return ctx
}

export function RequestProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [preset, setPreset] = useState<RequestPreset>({})

  const value = useMemo<Ctx>(
    () => ({
      openRequest: (next) => {
        setPreset(next ?? {})
        setOpen(true)
      },
    }),
    [],
  )

  return (
    <RequestCtx.Provider value={value}>
      {children}
      {open ? <RequestModal preset={preset} onClose={() => setOpen(false)} /> : null}
    </RequestCtx.Provider>
  )
}
