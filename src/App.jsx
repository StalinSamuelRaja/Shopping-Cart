import React, { useState } from "react";
import ProductCard from "./Product";
import "./App.css"; 

function App() {
  const data = [
    {
      prodImage:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/04-2_d39519ea-c3b2-46cc-8fa4-5b714dcf0b98_3000x.jpg?v=1656102160",
      prodName: "Superman DC Edition",
      prodPrice: "$40.00 - $80.00",
    },
    {
      prodImage:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/04-3_4d25c9f2-23f5-49f5-ab25-534b0e4302a0_3000x.jpg?v=1673002743",
      prodName: "WonderWoman DC Edition",
      prodPrice: (
        <>
          <del style={{ textDecoration: "line-through",opacity:"0.5" }}>$20.00</del>{" "}
          $18.00
        </>
      ),
    },
    {
      prodImage:
        "https://www.boat-lifestyle.com/cdn/shop/products/03_1c93ea5b-186e-4418-a8cb-c97698b52d4c_800x.jpg?v=1656100829",
      prodName: "Airpod DC Edition",
      prodPrice: (
        <>
          <del style={{ textDecoration: "line-through",opacity:"0.5" }}>$50.00</del>{" "}
           $25.00
        </>
      ),
    },
    {
      prodImage:
        "https://www.boat-lifestyle.com/cdn/shop/products/03_4ac3cfb6-1075-4376-9dc1-51bdf79b8558_800x.jpg?v=1656100876",
      prodName: "Airpod DC Edition",
      prodPrice: "$40.00",
    },
    {
      prodImage:
        "https://www.boat-lifestyle.com/cdn/shop/products/03_7a776f40-34f7-4fc0-a708-bf715f327c6f_800x.jpg?v=1656100770",
      prodName: "Airpod DC Edition",
      prodPrice: (
        <>
          <del style={{ textDecoration: "line-through",opacity:"0.5" }}>$50.00 </del>{" "}
          $25.00
        </>
      ),
    },
    {
      prodImage:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/VH/MZ/EO/147269785/ad131-fi-captainsblue04-1500x-1000x1000.jpg",
      prodName: "Airpod CAP Edition",
      prodPrice: "$120.00 - $280.00",
    },
    {
      prodImage:
        "https://www.boat-lifestyle.com/cdn/shop/products/AD131-FI-IronBlood04_800x.png?v=1667502565",
      prodName: "Airpod Iron Man Edition",
      prodPrice: (
        <>
          <del style={{ textDecoration: "line-through", opacity:"0.5" }}>$20.00</del>
          $18.00
        </>
      ),
    },
    {
      prodImage:
        "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/04_66e473ad-e481-4b48-a03d-e76c08f8d480_3000x.jpg?v=1656102086",
      prodName: "Headphone DC Edition",
      prodPrice: "$40.00",
    },
  ];

  const [product, setProduct] = useState(data);
  const [inCart, setInCart] = useState(0);

  return (
    <div className="app">
        <nav class="navbar navbar-expand-lg bg-body-tertiary pl-5">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Shopping Cart
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      All Products
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Popular Items
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      New Arrivals
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
            <button class="btn btn-outline-dark" type="submit">
                &#128722; Cart
                <span class="badge badge-light in-cart-badge">{inCart}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="dark">
        <h1 className="descp">Shop in style</h1>
        <h4 className="desc">With this shop homepage template</h4>
      </div>

      <div className="container">
        <div className="row">
          {product?.map((prod, idx) => (
            <div className="col-6 col-md-6 col-lg-3" key={idx}>
              <ProductCard
                prodImg={prod.prodImage}
                prodName={prod.prodName}
                prodPrice={prod.prodPrice}
                inCart={inCart}
                setInCart={setInCart}
                index={idx}
                isOnSale={true}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="dark-bottom">
        <p className="desc-bottom">Copyright © Your Website 2023</p>
      </div>
    </div>
  );
}

export default App;
