import React from "react";
import "../../styles/user/offers.css";
import HeaderPage from "../../components/user/HeaderPage";

function Offers({ offerData }) {
	const copyOfferTitle = (title) => {
		navigator.clipboard.writeText(title);
		window.alert("Coupon Copied!");
	};
	const offerCard = () => {
		const elements = [];
		for (var i = 0; i < 11; i++) {
			elements.push(
				<div className="offer-card" key={1}>
					<img src={offerData.offerImage} alt="Offer" className="offer-image" />
					<div className="offer-details">
						<div className="offer-info">
							<h4 className="offer-title">{offerData.offerTitle}</h4>
						</div>
						<div className="offer-actions">
							<button className="offer-link" onClick={() => copyOfferTitle(offerData.offerTitle)}>
								Copy
							</button>
						</div>
					</div>
				</div>,
			);
		}
		return elements;
	};

	return (
		<>
			<HeaderPage />
			<div className="offers-section">
				<div className="offers-banner">
					<img src={offerData.bannerImage} alt="Offer Banner" />
					<div className="offer-banner-content">
						<h1>DISCOUNTS & OFFERS</h1>
					</div>
					<div className="offers-banner-anchors">
						<p>
							<a href="/">Home</a> / Offers
						</p>
					</div>
				</div>
				<div className="offer-cards">
					<div className="offers-list">{offerCard()}</div>
				</div>
			</div>
		</>
	);
}

export default Offers;
