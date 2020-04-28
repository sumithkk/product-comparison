import * as types from '../constants/types'

const INITIAL_STATE = {
  products: [],
  loading: true,
  selectedProducts: []
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload,

      };
    case types.COMPARE_PRODUCT:
      return {
        ...state,
        selectedProducts: state.selectedProducts.concat(action.product)
      };
    case types.REMOVE_PRODUCT:
      return {
        ...state,
        selectedProducts: action.sp
      };
    default:
      return state
  }
}
