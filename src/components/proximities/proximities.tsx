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
import { Proximity } from '../../graphql/queries/property-details';

enum ProximitiesType {
  WellRatedRestaurants = 'WellRatedRestaurants',
  GreenAreas = 'GreenAreas',
  Schools = 'Schools',
  Colleges = 'Colleges',
  Hospitals = 'Hospitals',
  Markets = 'Markets',
}

type ProximitiesIconMapping = Record<string, { icon: IconDefinition; title: string }>;

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

interface ProximitiesDataProps {
  proximities: Proximity[];
}

export function Proximities({ proximities }: ProximitiesDataProps) {
  return (
    <section style={{ width: '60%' }}>
      <Divider />
      <Heading2>Proximidades</Heading2>
      {proximities.map((proximity, index) => (
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
