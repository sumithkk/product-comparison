import * as types from '../constants/types'
import { store } from '../../src'

export const getProducts = () =>
  dispatch =>
    fetch(`http://www.mocky.io/v2/5e86ec5531000011d8814754`, { method: "GET" })
      .then(response => response.json())
      .then(response => {
        dispatch({
          type: types.FETCH_PRODUCTS,
          payload: response,
        })
        console.log(response);
      })

export const compare = product => ({
  type: types.COMPARE_PRODUCT,
  product
})

export const remove = (idx) => {
  let sp = store.getState().product.selectedProducts;
  const index = sp.indexOf(idx)
  sp.splice(index, 1)

  return {
    type: types.REMOVE_PRODUCT,
    sp
  }
}
