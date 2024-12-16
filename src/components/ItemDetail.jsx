import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({ detail }) {
  if (!detail) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cardDetail">
      <h2>{detail.title}</h2>
      <img src={detail.image} alt={detail.title} />
      <p>{detail.description}</p>
      <p>${detail.price}</p>
      <ItemCount detail={detail} />
    </div>
  );
}

export default ItemDetail;
