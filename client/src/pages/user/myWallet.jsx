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
					<div className="my-wallet">
						<h2 className="cb">Current Balance</h2>
						<p className="balance-amount">$500.00</p>
						<div className="account-summary">
							<div className="total-credit">
								<p>Total Credit</p>
								<h2>$2347</h2>
							</div>
							<div className="total-debit">
								<p>Total Debit</p>
								<h2>$2174</h2>
							</div>
						</div>
					</div>
					<div className="add-wallet">
						<h2 className="cb">Add Amount</h2>
						<input type="text" id="add-amount-input" placeholder="Enter amount" />
						<div className="amount-buttons">
							<div>
								<p>Suggested:</p>
							</div>
							<div className="amounts-list">
								<button className="amt">$50</button>
								<button className="amt">$100</button>
								<button className="amt">$500</button>
								<button className="amt">$1000</button>
							</div>
						</div>
						<button className="add-amount">Add to Wallet</button>
					</div>
				</div>

				<div className="transaction-details">
					<h2 className="cb">Wallet Transaction</h2>
					<div className="pagination">
						<p>Show:</p>
						<select name="rows-per-page" id="rows-per-page">
							<option value="5">5</option>
							<option value="10">10</option>
							<option value="15">15</option>
						</select>
					</div>
				</div>
			</div>
		</>
	);
}

export default MyWallet;
