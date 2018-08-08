import React from "react";
import Price from "./price"

const PricesList = ({ prices }) => prices.map(price => (
    <Price key={price.nombre} name={price.nombre} price={price.precio} />
))

export default PricesList;