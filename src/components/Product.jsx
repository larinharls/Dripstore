import React from "react"
import styles from "../components/Product.module.css"

function Product(props) {
  return (
    <>
      <div>
        <div>
          <img className={styles.img} src={props.imagem} alt="" />
        </div>
        <div>
          <h3>{props.modelo}</h3>
          <h3>R$ {props.preco}</h3>
        </div>
      </div>
    </>
  )

}

export default Product