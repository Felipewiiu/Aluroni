import React from 'react';
import styles from './Prato.module.scss';
import { useParams, useNavigate, Routes, Route } from 'react-router-dom';
import Cardapio from 'data/cardapio.json';
import TagsPrato from 'Components/TagsPrato';
import NotFound from 'pages/NotFound';
import PaginaPadrao from 'Components/PaginaPadrao';

export default function Prato() {
  const navigate = useNavigate();
  const { id } = useParams();
  const prato = Cardapio.find(item => item.id === Number(id));
  if (!prato) {
    navigate('*');
    return <NotFound />;
  }
  return (
    <Routes>
      <Route path='*' element={<PaginaPadrao />}>
        <Route index element={
          <section className={styles.container}>
            <button onClick={() => navigate(-1)} className={styles.voltar} >
              {'< Voltar'}
            </button>
            <h1 className={styles.titulo}>
              {prato.title}
            </h1>
            <div className={styles.imagem}>
              <img src={prato.photo} alt={prato.title} />
            </div>
            <div className={styles.conteudo}>
              <p className={styles.conteudo__descricao}>
                {prato.description}
              </p>
              <TagsPrato {...prato} />
            </div>
          </section>
        } />
      </Route>
    </Routes>
  );
}
