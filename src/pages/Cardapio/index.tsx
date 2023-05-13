
import Styles from "./Cardapio.module.scss"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Buscador from "pages/Cardapio/Buscador";
import { useState } from "react"
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from "./Itens";

export default function Cardapio() {
  const [busca, setBusca] = useState("")
  const [filtro, setFiltro] = useState<number | null>(null)
  const [ordenador, setOrdenador] = useState('')

  return (
    <main>
        <nav className={Styles.menu}>
            <Logo/>
            
        </nav>
        <header className={Styles.header}>
          <div className={Styles.header__text}>
              A casa do código e da massa
          </div>
        </header>
        <section className={Styles.cardapio}>
          <h3 className={Styles.cadapio__titulo}>Cardápio</h3>
          <Buscador 
            busca={busca} 
            setBusca={setBusca}
          />
          <div className={Styles.cardapio__filtros}>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}
            />
            <Ordenador ordenador={ordenador} setOrdenador={setOrdenador}/>
          </div>
          <Itens busca={busca} filtro={filtro} ordenador={ordenador}/>
        </section>
        
    </main>
  )
}
