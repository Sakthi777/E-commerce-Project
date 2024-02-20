import "../../styles/user/myWallet.css";
import HeaderPage from "../../components/user/HeaderPage";

function MyWallet({ walletData }) {
	return (
		<>
			<HeaderPage />
			<div className="wallet-section">
				<div className="wallet-banner">
					<img src={walletData.bannerImage} alt="Wallet Banner" />
					<div className="wallet-banner-content">
						<h1>MY WALLET</h1>
					</div>
					<div className="wallet-banner-anchors">
						<p>
							<a href="/">Home</a> / Wallet
						</p>
					</div>
				</div>

				<div className="wallet-details">
					<div className="wallet-details">
						<div className="my-wallet">
							<h2>Current Balance</h2>
							<p>$500.00</p> {/* Replace with actual balance value */}
						</div>
						<div className="add-wallet">
							<h2>Add Amount</h2>
							<input type="text" id="add-amount" placeholder="Enter amount" />
							<button>Add</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyWallet;
