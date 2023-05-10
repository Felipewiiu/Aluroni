import React from "react"
import styles from "./Buscador.module.scss"

interface Props{
    busca: string,
    setBusca: React.Dispatch<React.SetStateAction<string>>;
    //<React.SetStateAction<string>>; --> Dispatch diz que vai disparar algo
}

export default function Buscador({busca, setBusca}: Props) {
  return (
    <div className={styles.buscador}>
      <input 
        value={busca}
        onChange={(evento) => setBusca(evento.target.value)}
      />
    </div>
  )
}
