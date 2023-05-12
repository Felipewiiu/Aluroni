import React from 'react'
import styles from './item.module.scss'
import logo from 'assets/logo.svg'

export default function Item() {
  return (
    <div className={styles.item}>
      <div className={styles.item__imagem}>
        <img src={logo} alt="Imagem" />
      </div>
      <div className={styles.item__descricao}>
        <div>
          <h2>Macarrão</h2>
          <p>Descrição do macarrão</p>
        </div>
        <div className={styles.item__tags}>
          <div className={styles.item__tipo}>
              Massa
          </div>
          <div className={styles.item__porcao}>
              400g
          </div>
          <div className={styles.item__qtdpessoas}>
            Serve duas pessoas
          </div>

        </div>
      </div>
    </div>
  )
}
