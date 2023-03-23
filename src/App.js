import React from "react"

import SearchView from "./search/containers/SearchView"
import Details from "./details/containers/DetailsView"

import { createBrowserRouter, RouterProvider } from "react-router-dom"

import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

const router = createBrowserRouter([
	{
		path: "/",
		element: <SearchView />,
		errorElement: <SearchView />,
	},
	{
		path: "/details/:id",
		element: <Details />,
	},
])

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	)
}

export default App
