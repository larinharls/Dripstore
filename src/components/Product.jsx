import React from "react"
import styles from "./Product.module.css"


function Product(props) {

  return (
    <>
      <div className={styles.conteudoCard}>
        <div>
          <img className={styles.img} src={props.imagem} alt="" />
        </div>
        
        <div className={styles.modelo}>
            <h3>{props.modelo}</h3>
        </div>

        <span className={styles.preco}>
        R${props.preco} 
        </span>

        <span className={styles.precoDesconto}>
        R${props.precoDesconto}
        </span>


      </div>


    </>
  )

}

export default Product