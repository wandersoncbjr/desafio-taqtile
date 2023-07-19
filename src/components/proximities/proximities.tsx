/* eslint-disable no-unused-vars */
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

enum ProximitiesType {
  WellRatedRestaurants = 'WellRatedRestaurants',
  GreenAreas = 'GreenAreas',
  Schools = 'Schools',
  Colleges = 'Colleges',
  Hospitals = 'Hospitals',
  Markets = 'Markets',
}
<<<<<<< HEAD

const proximitiesData = {
  proximities: [
    {
      type: ProximitiesType.WellRatedRestaurants,
      description: 'Cabanã Osasco, Salva Burguer, Jin Chef e O Bom do Baião.',
    },
    {
      type: ProximitiesType.GreenAreas,
      description: '2° Floresta Urbana de Osasco, Parque Chico Mendes e Praça Laurindo de Camargo.',
    },
    {
      type: ProximitiesType.Schools,
      description: 'E.E. Profº Francisco Casabona, ETEC Professor André Bogasian e Colégio Padre Anchieta.',
    },
    {
      type: ProximitiesType.Colleges,
      description: 'Universidade Estácio - Polo Osasco, Universidade Anhembi Morumbi e FNJ - Faculdade Nove de Julho.',
    },
    {
      type: ProximitiesType.Hospitals,
      description: 'Hospital Nossa Senhora de Fátima e Hospital Geral de Carapicuíba..',
    },
    {
      type: ProximitiesType.Markets,
      description: 'Atacadão, Mercado Moretti Bittencourt e Mercado Municipal de Osasco.',
    },
  ],
};

type ProximitiesIconMapping = Record<ProximitiesType, { icon: IconDefinition; title: string }>;
=======
interface ProximitiesIconMapping {
  [key: string]: {
    icon: IconDefinition;
    title: string;
  };
}
>>>>>>> 4462aa5 (fix: eslint)

const proximitiesIconMapping: ProximitiesIconMapping = {
  [ProximitiesType.WellRatedRestaurants]: {
    icon: faUtensils,
    title: 'Restaurantes bem avaliados',
  },
  [ProximitiesType.GreenAreas]: {
    icon: faLeaf,
    title: 'Parques e áreas verdes',
  },
  [ProximitiesType.Schools]: {
    icon: faGraduationCap,
    title: 'Escolas e colégio',
  },
  [ProximitiesType.Colleges]: {
    icon: faGraduationCap,
    title: 'Faculdades',
  },
  [ProximitiesType.Hospitals]: {
    icon: faHospital,
    title: 'Hospitais',
  },
  [ProximitiesType.Markets]: {
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
