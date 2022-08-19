
export interface CardDetailed  {
    quote: string,
    character: string,
    image: string
}

export interface PropsSearch {
    characterName: string,
    setCharacterName(characterName: string): void,
}

export interface PropsCount {
    count: number,
    setCount(value: number): void,
}