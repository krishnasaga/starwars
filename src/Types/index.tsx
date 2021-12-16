export interface Character {
    id: number,
    img: string,
    name: string,
    description: string,
    affiliation: string
}

export interface CharacterEntities {
    [key: number] : Character
}

export interface DataSchema {
  info: any
  results: Character[]
}
