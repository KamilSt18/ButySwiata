import React from 'react'
import './categories.css'
import { Container, Row, Col } from "react-bootstrap"

import SportShoes from "../../images/sport_shoes.svg"
import HighHeels from "../../images/high_heels.svg"
import FlipFlops from "../../images/flip_flops.png"
import Boots from "../../images/boots.png"
import Sandals from "../../images/sandals.svg"
import Pumps from "../../images/pumps.svg"

const Categories = () => {
    return ( 
        <Container>
				<Row className="my-5">
					<Col>
						<Row>
							<div
								className="shoes-bg-circle"
								style={{ backgroundColor: "#ffef95" }}>
								<img
									src={SportShoes}
									alt="Obuwie sportowe"
									className="shoes-img-circle"
								/>
							</div>
						</Row>
						<Row className="shoes-text-circle" style={{ fontWeight: "bold" }}>
							Obuwie sportowe
						</Row>
					</Col>
					<Col>
						<Row>
							<div className="shoes-bg-circle">
								<img
									src={HighHeels}
									alt="Obuwie sportowe"
									className="shoes-img-circle"
								/>
							</div>
						</Row>
						<Row className="shoes-text-circle">Buty na obcasie</Row>
					</Col>
					<Col>
						<Row>
							<div className="shoes-bg-circle">
								<img
									src={FlipFlops}
									alt="Obuwie sportowe"
									className="shoes-img-circle"
								/>
							</div>
						</Row>
						<Row className="shoes-text-circle">Japonki</Row>
					</Col>
					<Col>
						<Row>
							<div className="shoes-bg-circle">
								<img
									src={Boots}
									alt="Obuwie sportowe"
									className="shoes-img-circle"
								/>
							</div>
						</Row>
						<Row className="shoes-text-circle">Botki</Row>
					</Col>
					<Col>
						<Row>
							<div className="shoes-bg-circle">
								<img
									src={Sandals}
									alt="Obuwie sportowe"
									className="shoes-img-circle"
								/>
							</div>
						</Row>
						<Row className="shoes-text-circle">Sandały</Row>
					</Col>
					<Col>
						<Row>
							<div className="shoes-bg-circle">
								<img
									src={Pumps}
									alt="Obuwie sportowe"
									className="shoes-img-circle"
								/>
							</div>
						</Row>
						<Row className="shoes-text-circle">Czółenka</Row>
					</Col>
				</Row>
			</Container>
     );
}
 
export default Categories;