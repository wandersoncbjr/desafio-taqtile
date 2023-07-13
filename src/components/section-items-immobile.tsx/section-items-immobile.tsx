import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BodySecondary } from '../typography/body/body-secondary';
import { Heading2 } from '../typography/headline/h2';
import './section-items-immobile.css';
import {
  IconDefinition,
  faBell,
  faCutlery,
  faDiceFive,
  faHouse,
  faLeaf,
  faLightbulb,
  faPersonSwimming,
  faWarehouse,
} from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../typography/colors';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Divider } from '../cards/divider/divider';

const SectionItemImmbolieData = {
  availableOnProperty: ['AmericanKitchen', 'Garden', 'Garage', 'PrivatePool', 'GasShower'],
};

const SectionItemImmbolieDataa = {
  availableOnProperty: [
    'AmericanKitchen',
    'service area',
    'Garden',
    'Garage',
    'PrivatePool',
    'GasShower',
    'furniture',
    'Roof',
    'bell system',
  ],
};

const commonValues = SectionItemImmbolieDataa.availableOnProperty.filter((value) => {
  return SectionItemImmbolieData.availableOnProperty.includes(value);
});
const differentValues = SectionItemImmbolieDataa.availableOnProperty.filter((value) => {
  return !SectionItemImmbolieData.availableOnProperty.includes(value);
});
interface IconMappings {
  [record: string]: {
    icon: IconDefinition;
    title: string;
  };
}

const iconMappings: IconMappings = {
  AmericanKitchen: {
    icon: faCutlery,
    title: 'AmericanKitchen',
  },
  'service area': {
    icon: faLeaf,
    title: 'service area',
  },
  Garden: {
    icon: faLeaf,
    title: 'Garden',
  },
  Garage: {
    icon: faWarehouse,
    title: 'Garage',
  },
  PrivatePool: {
    icon: faPersonSwimming,
    title: 'PrivatePool',
  },
  GasShower: {
    icon: faDiceFive,
    title: 'GasShower',
  },
  furniture: {
    icon: faLightbulb,
    title: 'furniture',
  },
  Roof: {
    icon: faHouse,
    title: 'Roof',
  },
  'bell system': {
    icon: faBell,
    title: 'bell system',
  },
};
const renderedCommonValues = commonValues.map((item) => {
  if (iconMappings[item]) {
    return {
      data: iconMappings[item] as { icon: IconProp; title: string },
    };
  }
});

const renderedCommonValuess = differentValues.map((item) => {
  if (iconMappings[item]) {
    return {
      data: iconMappings[item],
    };
  }
});

export function SectionItemsImmobile() {
  return (
    <div style={{ width: '60%', paddingInline: '60px', display: 'block' }}>
      <Divider />
      <Heading2>O que esse lugar oferece</Heading2>
      <div className="container-items-immobile">
        <div className="container-icone-description">
          {renderedCommonValues.map((item, index) => (
            <ul key={index}>
              <li style={{ display: 'flex', gap: '8px' }}>
                {item?.data?.icon && <FontAwesomeIcon icon={item?.data?.icon} color={colors.CTA} />}
                <BodySecondary>{item?.data.title}</BodySecondary>
              </li>
            </ul>
          ))}
        </div>
        <div className="container-icone-description">
          {renderedCommonValuess.map((item, index) => (
            <ul key={index}>
              <li style={{ display: 'flex', gap: '8px' }}>
                {item?.data?.icon && <FontAwesomeIcon icon={item?.data?.icon} color={colors.NeutralLight} />}
                <BodySecondary type="scratched">{item?.data.title}</BodySecondary>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
