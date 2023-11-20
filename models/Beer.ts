export interface IUnitValue {
    unit: string,
    value: number
}

export interface IMethodDescription {
    temp: IUnitValue,
    duration?: number
}

export interface IMethod {
    [key: string]: IMethodDescription | IMethodDescription[] | null
}

export interface IIngredientDescription {
    name: string,
    amount: IUnitValue
}

export interface IIngredient {
    [key: string]: IIngredientDescription | string
}

export interface IBeer {
    id: number,
    name: string,
    tagline: string,
    first_brewed: string,
    description: string,
    image_url: string,
    abv: number,
    ibu: number,
    target_fg: number,
    target_og: number,
    ebc: number,
    srm: number,
    ph: number,
    attenuation_level: number,
    volume: IUnitValue,
    boil_volume: IUnitValue,
    method: IMethod,
    ingredients: IIngredient,
    food_pairing: string[],
    brewers_tips: string,
    contributed_by: string
}

// get Beers
export interface IGetBeersParams {
    beer_name?: string;
    page?: number;
    per_page?: number;
}

// get Beer
export interface IGetBeerParams {
    id: number;
}
