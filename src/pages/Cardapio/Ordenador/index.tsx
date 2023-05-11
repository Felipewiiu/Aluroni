import React, { useState } from 'react'
import styles from './Ordenador.module.scss'
import opcoes from './opcoes.json'
import classNames from 'classnames'
import { MdKeyboardArrowUp } from 'react-icons/md'
import { MdKeyboardArrowDown } from 'react-icons/md'

export default function Ordenador() {

    const [aberto, setAberto] = useState(false)
    console.log(aberto)
    

  return (
    <button 
        className={styles.ordenador} 
        onClick={() => setAberto(!aberto)}
        onBlur={() => setAberto(false)}
    >
        <span>Ordenar por</span>
        {aberto ? <MdKeyboardArrowUp/> : <MdKeyboardArrowDown/>}
        <div className={classNames({
            [styles.ordenador__options]: true,
            [styles['ordenador__options--ativo']]: aberto
        })}>
            {opcoes.map((opcao) =>(
                <div className={styles.ordenador__option} key={opcao.value}>
                    {opcao.nome}
                </div>
            ))}
        </div>
    </button>
  )
}
