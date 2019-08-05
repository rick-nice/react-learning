export const SAVE_TO_LS = 'SAVE_TO_LS'
export type SAVE_TO_LS = typeof SAVE_TO_LS

export const LOAD_FROM_LS = 'LOAD_FROM_LS'
export type LOAD_FROM_LS = typeof LOAD_FROM_LS

export interface ISaveToLS {
  type: SAVE_TO_LS
  key: string
}

export const saveToLS = (key: string): ISaveToLS => ({
  type: SAVE_TO_LS,
  key,
})

export interface ILoadFromLS {
  type: LOAD_FROM_LS
  key: string
}

export const loadFromLS = (key: string) => ({
  type: LOAD_FROM_LS,
  key,
})
