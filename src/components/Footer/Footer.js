import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"

import "./footer.css"

const Footer = () => {
	return (
		<>
			<footer
				className="text-white text-center text-lg-start"
				style={{ backgroundColor: "#71e0cf", marginTop: 50 }}>
				<div className="container p-3">
					<div className="row footer-text">
						<div className="col-lg-5 col-md-12 my-3 mb-md-0">
							<h5 className="text-uppercase">Kim jesteśmy?</h5>

							<p>
								Butik damski oferujący światowe obuwie dla kobiet w każdym
								wieku, rozsądne ceny i szybka dostawa.
							</p>
						</div>

						<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
							<h6 className="text-uppercase fw-bold mb-4">Kontakt</h6>
							<p>
								<FontAwesomeIcon
									icon={faHome}
									className="me-3"
								/>{" "}
								Fikcyjna 1, 00-000 Warszawa
							</p>
							<p>
              <FontAwesomeIcon
									icon={faEnvelope}
									className="me-3"
								/>{" "}
								butyswiata@interia.pl
							</p>
							<p>
              <FontAwesomeIcon
									icon={faPhone}
									className="me-3"
								/>{" "}
                +48 123 456
								789
							</p>
						</div>
					</div>
				</div>

				<div
					className="text-center p-3"
					style={{
						backgroundColor: "#ffef95",
						fontSize: 14,
						color: "#2F6030",
					}}>
					ButySwiata.pl <b>© 2022</b> | Wszelkie prawa zastrzeżone
				</div>
			</footer>
		</>
	)
}

export default Footer
