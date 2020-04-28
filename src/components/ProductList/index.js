import React from 'react'

const ProductList = (props) =>
  <div className="prodWrap">
    {!props.display && <div className="closeProd" onClick={() => props.remove(props.sp)}>X</div>}
    <img alt="prod-img" src={props.data.images[props.sp]} />
    <h1>{props.data.titles[props.sp].title}</h1>
    {/* <h2>{props.data.titles[props.sp].subtitle}</h2> */}
    <div className="price" style={{ color: "#444" }}>
      <strong>₹{Math.trunc(props.data.productPricingSummary[props.sp].finalPrice)}</strong>
      <strong style={{ color: "#8f8f8f" }}>₹{Math.trunc(props.data.productPricingSummary[props.sp].price)}</strong>
      <strong style={{ color: "green", textDecoration: "line-through" }}>₹{Math.trunc(props.data.productPricingSummary[props.sp].totalDiscount)}% off</strong>
    </div>
  </div>

export default ProductList