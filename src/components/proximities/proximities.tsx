import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Heading2 } from '../typography/headline/h2';
import { colors } from '../../typography/colors';
import { BodySecondary } from '../typography/body/body-secondary';
import './proximities.css';
import { Separator } from '../separator/separator';
import { Divider } from '../cards/divider/divider';
import {
  IconDefinition,
  faCartShopping,
  faGraduationCap,
  faHospital,
  faLeaf,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';

const proximitiesData = {
  proximities: [
    {
      type: 'WellRatedRestaurants',
      description: 'Cabanã Osasco, Salva Burguer, Jin Chef e O Bom do Baião.',
    },
    {
      type: 'GreenAreas',
      description: '2° Floresta Urbana de Osasco, Parque Chico Mendes e Praça Laurindo de Camargo.',
    },
    {
      type: 'Schools',
      description: 'E.E. Profº Francisco Casabona, ETEC Professor André Bogasian e Colégio Padre Anchieta.',
    },
    {
      type: 'Colleges',
      description: 'Universidade Estácio - Polo Osasco, Universidade Anhembi Morumbi e FNJ - Faculdade Nove de Julho.',
    },
    {
      type: 'Hospitals',
      description: 'Hospital Nossa Senhora de Fátima e Hospital Geral de Carapicuíba..',
    },
    {
      type: 'Markets',
      description: 'Atacadão, Mercado Moretti Bittencourt e Mercado Municipal de Osasco.',
    },
  ],
};
enum proximitiesType {
  WellRatedRestaurants = 'WellRatedRestaurants',
  GreenAreas = 'GreenAreas',
  Schools = 'Schools',
  Colleges = 'Colleges',
  Hospitals = 'Hospitals',
  Markets = 'Markets',
}

interface ProximitiesIconMapping {
  [key: string]: {
    icon: IconDefinition;
    title: string;
  };
}

const proximitiesIconMapping: ProximitiesIconMapping = {
  [proximitiesType.WellRatedRestaurants]: {
    icon: faUtensils,
    title: 'Restaurantes bem avaliados',
  },
  [proximitiesType.GreenAreas]: {
    icon: faLeaf,
    title: 'Parques e áreas verdes',
  },
  [proximitiesType.Schools]: {
    icon: faGraduationCap,
    title: 'Escolas e colégio',
  },
  [proximitiesType.Colleges]: {
    icon: faGraduationCap,
    title: 'Faculdades',
  },
  [proximitiesType.Hospitals]: {
    icon: faHospital,
    title: 'Hospitais',
  },
  [proximitiesType.Markets]: {
    icon: faCartShopping,
    title: 'Mercados',
  },
};

export function Proximities() {
  return (
    <section style={{ width: '60%', paddingInline: '60px' }}>
      <Divider />
      <Heading2>Proximidades</Heading2>
      {proximitiesData.proximities.map((proximity, index) => (
        <div key={index} className="container-icon-description-title">
          <div>
            <FontAwesomeIcon icon={proximitiesIconMapping[proximity.type].icon} color={colors.NeutralDark} />
          </div>
          <span>
            <BodySecondary type="bold">{proximitiesIconMapping[proximity.type].title}</BodySecondary>
            <BodySecondary>{proximity.description}</BodySecondary>
          </span>
        </div>
      ))}
      <Separator size="large" />
    </section>
  );
}
