import { findAncestor } from 'typescript';
import { WishlistAction } from './wishlist.action';
import { RemoveWishlist } from './wishlist.action';

const initialValues = {
  wishlistArr: [],
};

export function wishlistReducer(state = initialValues, action) {
  switch (action.type) {
    case 'ADD_WISHLIST':
      return {
        wishlistArr: [...state.wishlistArr, action.payload],
      };
      case 'REMOVE_WISHLIST':
        return{
          wishlistArr:action.payload,
        }
    default:
      return state;
  }
}
