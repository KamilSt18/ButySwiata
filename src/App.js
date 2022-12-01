import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Main from "./containers/Main/Main"
import Details from "./containers/Details/Details"

const router = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		errorElement: <Main />,
	},
	{
		path: "/details/:id",
		element: <Details />,
	},
])

const App = () => {
	return <RouterProvider router={router} />
}

export default App
