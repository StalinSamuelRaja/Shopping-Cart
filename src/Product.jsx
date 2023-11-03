import React, { useState } from "react";

function ProductCard({ prodImg, prodName, prodPrice, inCart, setInCart, index, isOnSale }) {
  const [show, setShow] = useState(true);

  const handleAdd = () => {
    setShow(!show);
    setInCart(inCart + 1);
  };

  const handleRemove = () => {
    setShow(!show);
    setInCart(inCart - 1);
  };

  const buttonText = index === 0 || index === 5 ? "View Options" : "Add to Cart";
  const isSpecialCard = [2, 3, 5, 7].includes(index + 1);
  const starCard = [2, 4, 7, 8].includes(index + 1);
  const starLess = [1, 3, 5, 6].includes(index + 1);

  return (
    <div className="card mb-4 mt-5" style={{ maxWidth: "18rem" }}>
      {isOnSale && isSpecialCard && (
        <span className="badge text-bg-success badge-right">Sale</span>
      )}
      <img src={prodImg} className="card-img-top" alt="Product" style={{ objectFit: "contain" }} />
      <div className="card-body text-center">
        <h5 className="card-title">{prodName}</h5>
        <h6>
          {starCard && (
            <>
              <span style={{ color: "#FFD700" }}>
                <h4>&#9733;&#9733;&#9733;&#9733;&#9733;</h4>
              </span> {/* 5-star rating */}
            </>
          )}
        </h6>
        <p className="card-text">
          {prodPrice}
          {starLess && (
            <>
              <h1><br /></h1>
            </>
          )}
        </p>
        {show ? (
          <button className="btn btn-outline-secondary" onClick={handleAdd}>
            {buttonText}
          </button>
        ) : (
          <button className="btn btn-outline-danger" onClick={handleRemove}>
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
