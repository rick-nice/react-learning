import { ActionCreator, AnyAction } from 'redux'
import { IStoreState } from './reducers'

export const SAVE_TO_LS = 'SAVE_TO_LS'
export type SAVE_TO_LS = typeof SAVE_TO_LS

export const LOAD_FROM_LS = 'LOAD_FROM_LS'
export type LOAD_FROM_LS = typeof LOAD_FROM_LS

export interface ISaveToLS {
  type: SAVE_TO_LS
  key: keyof IStoreState
}

export const saveToLS = (key: keyof IStoreState): ISaveToLS => ({
  type: SAVE_TO_LS,
  key,
})

export interface ILoadFromLS {
  type: LOAD_FROM_LS
  key: keyof IStoreState
  setter: ActionCreator<AnyAction>
}

export const loadFromLS = (
  key: keyof IStoreState,
  setter: ActionCreator<AnyAction>
) => ({
  type: LOAD_FROM_LS,
  key,
  setter,
})
