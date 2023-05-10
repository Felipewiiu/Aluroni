import React from 'react'
import filtros from './filtros.json'
import styles from './Filtros.module.scss'

type Iopcao = typeof filtros[0] // esse é mais um exemplo de se criar uma interface

// interface Opcao {
//   id: number
//   label: string
// }

export default function Filtros() {

  function selecionarFiltro(opcao: Iopcao){

  }

  return (
    <div className={styles.filtros}>
      {filtros.map((opcao) =>(
        <button className={styles.filtros__filtro} key={opcao.id} onClick={() => selecionarFiltro(opcao)} >
          {opcao.label}
        </button>
      ))}
    </div>
  )
}
