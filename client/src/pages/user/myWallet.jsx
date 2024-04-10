import "../../styles/user/myWallet.css";
import HeaderPage from "../../components/user/HeaderPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import banner from "../../assets/images/banner/single-banner.jpg";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

function MyWallet() {
	//url
	const url = "http://localhost:8000";

	const [addAmtVal, setAddAmtVal] = useState(0);
	const [currBal, setCurrBal] = useState(0);
	const [transactionList, setTransactionList] = useState([]);

	const token = useSelector((state) => state.tokenDetails.token);

	const handleAddToWallet = async () => {
		if (addAmtVal != 0) {
			const postData = {
				token: token,
				amountToAdd: addAmtVal,
			};
			await axios
				.post(`${url}/walletData`, postData)
				.then((res) => {
					setCurrBal(res.data.currentBalance);
					setTransactionList(res.data.transactionList);
				})
				.catch((err) => {
					console.log(err);
				});
			setAddAmtVal(0);
		}
	};

	const handlePurchase = async () => {
		if (addAmtVal != 0) {
			const postData = {
				token: token,
				amountToAdd: -addAmtVal,
			};
			await axios
				.post(`${url}/walletData`, postData)
				.then((res) => {
					setCurrBal(res.data.currentBalance);
					setTransactionList(res.data.transactionList);
				})
				.catch((err) => {
					console.log(err);
				});
			setAddAmtVal(0);
		}
	};

	useEffect(() => {
		const fetchWalletData = async () => {
			const walletData = await axios.get(`${url}/walletData/${token}`);
			if (walletData) {
				setCurrBal(walletData.data.currentBalance);
				setTransactionList(walletData.data.transactionList);
				console.log(transactionList);
			}
		};

		fetchWalletData();
	}, []);

	let credits = 0;
	const totalCredit = () => {
		if (transactionList) {
			transactionList.forEach((amt) => {
				if (amt > 0) credits += amt;
			});
			return credits;
		}
	};

	let debits = 0;
	const totalDebit = () => {
		if (transactionList) {
			transactionList.forEach((amt) => {
				if (amt < 0) debits += amt;
			});
			return -debits;
		}
	};

	const renderTable = () => {
		if (transactionList) {
			const reversedList = [];
			for (let i = transactionList.length - 1; i >= 0; i--) {
				const amt = transactionList[i];
				reversedList.push(
					<tr key={i}>
						<td>{transactionList.length - i}</td>
						<td>02 February 2021</td>
						<td>Order Altered</td>
						<td>Order (26881)</td>
						<td>${amt}</td>
						<td>${amt}</td>
						<td className="transaction-paid">Paid</td>
					</tr>,
				);
			}
			return reversedList;
		}
	};

	useEffect(() => {
		totalCredit();
		totalDebit();
		renderTable();
	}, [transactionList]);

	return (
		<>
			<HeaderPage />

			<div className="wallet-section">
				<div className="wallet-banner">
					<img src={banner} alt="Wallet Banner" />
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
						<p className="balance-amount">${currBal}</p>
						<div className="account-summary">
							<div className="total-credit">
								<p>Total Credit</p>
								<h2>${totalCredit()}</h2>
							</div>
							<div className="total-debit">
								<p>Total Debit</p>
								<h2>${totalDebit()}</h2>
							</div>
						</div>
					</div>
					<div className="add-wallet">
						<h2 className="cb">Add Amount</h2>
						<input type="number" id="add-amount-input" value={addAmtVal} onChange={(e) => setAddAmtVal(e.target.value)} />
						<div className="amount-buttons">
							<div>
								<p>Suggested:</p>
							</div>
							<div className="amounts-list">
								<button className="amt" onClick={() => setAddAmtVal(50)}>
									$50
								</button>
								<button className="amt" onClick={() => setAddAmtVal(100)}>
									$100
								</button>
								<button className="amt" onClick={() => setAddAmtVal(500)}>
									$500
								</button>
								<button className="amt" onClick={() => setAddAmtVal(1000)}>
									$1000
								</button>
							</div>
						</div>
						<button className="add-amount" onClick={handleAddToWallet}>
							Add to Wallet
						</button>
						<button className="add-amount" onClick={handlePurchase}>
							Purchase
						</button>
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
					<div className="transaction-table">
						<table>
							<thead>
								<tr>
									<th>SL.</th>
									<th>Transaction Date</th>
									<th>Payment Method</th>
									<th>Document Type</th>
									<th>Received Amount</th>
									<th>Order Amount</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>{renderTable()}</tbody>
						</table>
					</div>
					<div className="showing-results">
						<div className="sr-text">
							<p>Showing 12 of 60 results</p>
						</div>

						<div className="transaction-page-buttons">
							<button>
								<FontAwesomeIcon icon={faArrowLeft} />
							</button>
							<button>1</button>
							<p>....</p>
							<button>60</button>
							<button>
								<FontAwesomeIcon icon={faArrowRight} />
							</button>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default MyWallet;
