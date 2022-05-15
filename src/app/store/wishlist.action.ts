import { Action } from "@ngrx/store";


export class WishlistAction implements Action{
    readonly type = "ADD_WISHLIST";
    constructor(public payload : object){

    }
}

export class RemoveWishlist implements Action{
    readonly type = "REMOVE_WISHLIST";
    constructor(public payload : Array<object>){

    }
}