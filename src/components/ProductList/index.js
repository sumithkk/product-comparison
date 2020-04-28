import React from 'react'

const ProductList = (props) =>
  <div className="prodWrap">
    <div className="closeProd" onClick={() => props.remove(props.sp)}>X</div>
    <img alt="prod-img" src={props.data.images[props.sp]} />
    <h1>{props.data.titles[props.sp].title}</h1>
    <h2>{props.data.titles[props.sp].subtitle}</h2>
    <div className="price" style={{ color: "#444" }}>
      <span style={{ marginRight: "10px" }}>₹ {Math.trunc(props.data.productPricingSummary[props.sp].finalPrice)}</span>
      <span style={{ marginRight: "10px" }}>₹ {Math.trunc(props.data.productPricingSummary[props.sp].price)}</span>
      <span style={{ marginRight: "10px", color: "green", textDecoration: "line-through" }}>₹ {Math.trunc(props.data.productPricingSummary[props.sp].totalDiscount)}</span>
    </div>
  </div>

export default ProductList