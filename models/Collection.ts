export interface ICollectionItem {
  email: string,
  beer_id: number,
  name?: string,
  image_url?: string,
  tagline?: string,
  description?: string,
  brewers_tips?: string,
  first_brewed?: string,
  notes?: string
  rating?: number
}

// add beer to collection
export interface IAddBeerToCollectionParams {
  collectionItem: ICollectionItem 
}

export interface IAddBeerToCollectionApiResponse {
  collectionItem: ICollectionItem 
}

// get beer collection
export interface IGetBeerCollectionParams {
  email: string,
  search?: string;
}

export interface IGetBeerCollectionApiResponse {
  collection: ICollectionItem[]
}

// get beer details
export interface IGetBeerDetailsParams {
  email: string,
  beerId: number
}

export interface IGetBeerDetailsApiResponse {
  collectionItem: ICollectionItem 
}

// get is beer in the collection
export interface IGetIsBeerInCollectionParams {
  email: string,
  beerId: number
}

export interface IGetIsBeerInCollectionApiResponse {
  isBeerInCollection: boolean
}

// remove beer from collection
export interface IRemoveBeerFromCollectionParams {
  email: string,
  beerId: number
}

export interface IRemoveBeerFromCollectionApiResponse {
  success: boolean
}

// update beer details
export interface IUpdateBeerDetailsParams {
  collectionItem: ICollectionItem 
}

export interface IUpdateBeerDetailsApiResponse {
  collectionItem: ICollectionItem 
}
