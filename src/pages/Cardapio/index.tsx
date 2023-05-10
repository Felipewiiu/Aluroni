
import Styles from "./Cardapio.module.scss"
import { ReactComponent as Logo } from "../../assets/logo.svg";
import Buscador from "pages/Buscador";
import { useState } from "react"
import Filtros from "./Filtros";

export default function Cardapio() {
  const [busca, setBusca] = useState("")
  console.log(busca)

  return (
    <main>
        <nav className={Styles.menu}>
            <Logo/>
            Aluroni
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
            <Filtros/>
          </div>
        </section>
        
    </main>
  )
}
