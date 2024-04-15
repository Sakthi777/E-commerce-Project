import "../../styles/user/wishlist.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderPage from "../../components/user/HeaderPage";
import Footer from "./Footer";
import banner from "../../assets/images/banner/single-banner.jpg";
import products from "../../pages/user/productList";
import "../../styles/user/productCard.css";
import "../../styles/user/productDescriptionCard.css";
import { Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { faShoppingBag, faStar } from "@fortawesome/free-solid-svg-icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import ProductDescriptionCard from "../../pages/user/productDescriptionCard";
import { useSelector } from "react-redux";
const Wishlist = () => {
	const [liked, setLiked] = useState(false);
	const url = `http://localhost:8000`;
	const toggleLike = () => {
		setLiked(!liked);
	};
	const [showModal, setShowModal] = useState(false);
	const handleShowModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	const [productDetails, setProductDetails] = useState([]);
	const [wishlist, setWishList] = useState([]);
	const token = useSelector((state) => state.tokenDetails.token);
	// useEffect(() => {
	// 	axios
	// 		.get(`${url}/get-productDetails`)
	// 		.then((response) => {
	// 			setProductDetails(response.data.data);
	// 		})
	// 		.catch((error) => {
	// 			console.error("Error fetching product data:", error);
	// 		});
	// }, [setProductDetails]);

	function timeout(ms) {
		return new Promise((resolve) => {
			setTimeout(resolve, ms);
		});
	}

	let isMounted = true;
	useEffect(() => {
		const fetchWishList = async () => {
			await axios.get(`${url}/wishlist/${token}`).then((res) => {
				setWishList(res.data.productID);
			});
		};
		fetchWishList();
	}, [isMounted]);

	useEffect(() => {
		const fetchProducts = async () => {
			await timeout(500);
			if (isMounted) {
				wishlist.map((id) => {
					axios
						.get(`http://localhost:8000/get-userDetails/${id}`)
						.then((response) => {
							setProductDetails((prevArray) => [...prevArray, response.data.data]);
						})
						.catch((error) => {
							console.error("Error fetching product data:", error);
						});
				});
			}
		};

		fetchProducts();

		return () => {
			isMounted = false;
		};
	}, [wishlist]);

	useEffect(() => {
		if (productDetails) renderTable();
		console.log(productDetails);
	}, [productDetails]);

	const deleteWishList = async (id) => {
		await axios.delete(`http://localhost:8000/wishlist/${token}/${id}`).then((res) => {
			setWishList(res.data.productID);
			// console.log(res.data);
		});
	};

	const renderTable = () => {
		if (productDetails) {
			isMounted = true;
			return productDetails.map((product, index) => (
				<tr>
					<td>{index + 1}</td>
					<td>
						<img src={`http://localhost:8000/uploads/productImage/${product.image}`} alt="" />
					</td>
					<td>{product.productName}</td>
					<td>{product.newPrice}</td>
					<td>Lorem ipsum dolor sit amet consectetur adipisicing elit.</td>
					<td>In Stock</td>
					<td className="wishlist-card">
						<div className="wishlist-add-to-cart">
							<span>Add To Cart</span>
						</div>
					</td>
					<td>
						<FontAwesomeIcon icon={faEye} className="wishlist-view" onClick={handleShowModal} />

						<Modal show={showModal} onHide={handleCloseModal}>
							<Modal.Header closeButton>
								<Modal.Title>Wishlist Product</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<ProductDescriptionCard
									product={{
										imgSrc: product.image,
										imageSlider: product.imageSlider,
										rating: product.rating,
										productName: product.productName,
										oldPrice: product.oldPrice,
										newPrice: product.newPrice,
										setSale: product.sale,
										setNew: product.newProduct,
										discountPercentage: product.discountPercentage,
										productDetails: product.productDescription,
									}}
								/>
							</Modal.Body>
							<Modal.Footer>
								<Button>Close</Button>
							</Modal.Footer>
						</Modal>

						<FontAwesomeIcon icon={faTrash} className="wishlist-delete" onClick={() => deleteWishList(product._id)} />
					</td>
				</tr>
			));
		}
	};

	return (
		<div className="wishlist-container">
			<HeaderPage />
			<div className="offers-banner">
				<img src={banner} alt="Offer Banner" />
				<div className="offer-banner-content">
					<h1>WISHLIST</h1>
					<a href="/">Home</a>/<a href="...">Shop Grid</a>/<a href="...">Wishlist</a>
				</div>
			</div>
			<div className="wishlist-table-container">
				<table className="wishlist-table">
					<thead>
						<tr>
							<th>Serial</th>
							<th>Product</th>
							<th>Name</th>
							<th>Price</th>
							<th>Description</th>
							<th>Status</th>
							<th>Shopping </th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>{renderTable()}</tbody>
				</table>
			</div>
			<div className="showMoreButton">
				<button className="show-more-button">LOAD MORE ITEMS</button>
			</div>

			<Footer />
		</div>
	);
};

export default Wishlist;
