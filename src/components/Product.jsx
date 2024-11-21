import React from "react"
import styles from "../components/Product.module.css";


const handleClick = () => {
  alert(`Você clicou no produto: ${props.modelo}`);

};


function Product(props) {

  return (
    <>
      <div className={styles.conteudoCard}onClick={handleClick}>
        <div>
          <img className={styles.img} src={props.imagem} alt="" />
        </div>

        <span className={styles.preco}>
        R${props.preco} 
        </span>

        <span className={styles.precoDesconto}>
        R${props.precoDesconto}
        </span>

        <div className={styles.modelo}>
            <h3>{props.modelo}</h3>
        </div>

      </div>


    </>
  )

}

export default Product