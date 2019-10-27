/* eslint-disable camelcase */
export interface IBeer extends IBeerShort {
  tagline: string
  first_brewed: string
  abv: number
  ibu: number
  food_pairing: string[]
}

export interface IBeerShort {
  id: number
  name: string
  description: string
  image_url: string
}
