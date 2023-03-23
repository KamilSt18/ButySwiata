import React from "react"

export function ErrorMessage({ children: error }) {
	return <p className="alert alert-danger my-2">{error}</p>
}
