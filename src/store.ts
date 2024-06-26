import { atom } from 'jotai'
import { FetchState } from './types'
import { createDefaultStore } from './utils/store'

export const appStore = atom(createDefaultStore())
export const fetchStateStore = atom<FetchState>({ type: 'idle' })