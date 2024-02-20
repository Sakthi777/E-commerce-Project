import "../../styles/user/offers.css";

function Offers({ offerData }) {
	const offerCard = () => {
		const elements = [];
		for (var i = 0; i < 11; i++) {
			elements.push(
				<div className="offer-card" key={i}>
					<img src={offerData.offerImage} alt="" />
					<div className="offer-tag">
						<p>
							Offer <a href="/">Copy</a>
						</p>
					</div>
				</div>,
			);
		}
		return elements;
	};
	return (
		<div className="offers-section">
			<div className="offers-banner">
				<img src={offerData.bannerImage} alt="Offer Banner" />
				<div className="offer-banner-content">
					<h1>DISCOUNTS & OFFERS</h1>
				</div>
				<div className="banner-anchors">
					<p>
						<a href="/">Home</a> / Offers
					</p>
				</div>
			</div>
			<div className="offer-cards">
				<div className="offers-list">{offerCard()}</div>
			</div>
		</div>
	);
}

export default Offers;
