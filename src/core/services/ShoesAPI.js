import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL

axios.interceptors.response.use(
	ok => ok,
	error => {
		if (!axios.isAxiosError(error)) throw new Error("Unexpected error")
		throw error
	}
)

export const fetchShoesById = async id => {
	const { data } = await axios.get(API_URL + `/shoes/${id}/`)
	return data
}

export const fetchShoes = async (
	query = "",
	category = null,
	size = null,
	color = null
) => {
	let url = API_URL + `/shoes/?search=${query}`
	
  category && (url += `&category__name=${category}`)
  size && (url += `&size__name=${size}`)
  color && (url += `&color__name=${color}`)

	const { data } = await axios.get(url)
	return data
}

export const fetchSizes = async () => {
	const { data } = await axios.get(API_URL + `/size/`)
	return data
}

export const fetchColors = async () => {
	const { data } = await axios.get(API_URL + `/color/`)
	return data
}
