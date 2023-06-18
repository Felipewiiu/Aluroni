import TagsPrato from 'Components/TagsPrato';
import styles from './item.module.scss';

import { Prato } from 'types/Prato';
import { useNavigate } from 'react-router-dom';



export default function Item(props: Prato) {
  const {title, description, photo, id } = props;
  const navigate = useNavigate();

  return (
    <div className={styles.item} onClick={() => navigate(`/prato/${id}`)}>
      <div className={styles.item__imagem}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__descricao}>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <TagsPrato {...props}/>
      </div>
    </div>
  );
}
