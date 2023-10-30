import axios from 'axios'

const BASE_URL = 'https://ecommerce.routemisr.com/api/v1/'

const HEADERS = {
  'Content-Type': 'application/json',
}

const userToken = localStorage.getItem('token')

const authenticatedAxios = axios.create({
  baseURL: BASE_URL,
  headers: {
    ...HEADERS,
    token: `${userToken}`,
  },
})

const guestAxios = axios.create({
  baseURL: BASE_URL,
  headers: HEADERS,
})

export { authenticatedAxios, guestAxios }

export const register = (data) => guestAxios.post('/auth/signup', data)
export const login = (data) => guestAxios.post('/auth/signin', data)
export const getProducts = () => guestAxios.get('/products')
export const showProduct = (product) => guestAxios.get(`/products/${product}`)
export const getAllCategories = () => guestAxios.get('/categories')

export const addToCartRoute = (data) => authenticatedAxios.post('/cart', data)
