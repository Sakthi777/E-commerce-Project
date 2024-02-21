import product1Image from "../../assets/images/product1.jpg";
import product2Image from "../../assets/images/product2.jpg";
import product3Image from "../../assets/images/product3.jpg";
import product4Image from "../../assets/images/product4.jpg";
import product5Image from "../../assets/images/product5.jpg";

const products = [
  {
    id: 1,
    imgSrc: product1Image,
    imageSlider: [product1Image, product2Image, product3Image, product4Image],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    setSale: true,
    setNew: false,
    productDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
  },
  {
    id: 2,
    imgSrc: product2Image,
    imageSlider: [product1Image, product2Image, product3Image, product4Image],
    rating: 3,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    setSale: true,
    setNew: true,
    productDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
  },
  {
    id: 3,
    imgSrc: product3Image,
    imageSlider: [product1Image, product2Image, product3Image, product4Image],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    setSale: true,
    setNew: false,
    productDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
  },
  {
    id: 4,
    imgSrc: product4Image,
    imageSlider: [product1Image, product2Image, product3Image, product4Image],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    setSale: true,
    setNew: false,
    productDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
  },
  {
    id: 5,
    imgSrc: product5Image,
    imageSlider: [product1Image, product2Image, product3Image, product4Image],
    rating: 4,
    productName: "Product 1",
    oldPrice: 19.99,
    newPrice: 19.99,
    setSale: true,
    setNew: true,
    productDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit non tempora magni repudiandae sint suscipit tempore quis maxime explicabo veniam eos reprehenderit fuga",
  },
];

export default products;
