import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BodySecondary } from '../typography/body/body-secondary';
import { Heading2 } from '../typography/headline/h2';
import './section-items-immobile.css';
import { colors } from '../../typography/colors';
import { Divider } from '../cards/divider/divider';
import { Separator } from '../separator/separator';
import { condominiumIconMapping, immobileIconMapping } from './icons-mapped-immobile';
import {
  ItemData,
  getItemsNotPresent,
  getItemsPresent,
  possibleItemsInCondominium,
  possibleItemsInProperty,
} from './item-filter';

interface SectionItemsProps {
  title: string;
  variant: 'Immobile' | 'Condominium';
  sectionItemImmbolieData?: string[];
  sectionItemCondominiumData?: string[];
}

export function SectionItems({
  title,
  variant,
  sectionItemImmbolieData,
  sectionItemCondominiumData,
}: SectionItemsProps) {
  let renderedItemsPresent: ItemData[] = [];
  let renderedItemsNotPresent: ItemData[] = [];

  const renderedItemsNotPresentInProperty = getItemsNotPresent(
    possibleItemsInProperty,
    sectionItemImmbolieData,
    immobileIconMapping,
  );

  const renderedItemsPresentInProperty = getItemsPresent(
    possibleItemsInProperty,
    sectionItemImmbolieData,
    immobileIconMapping,
  );

  const renderedItemsNotPresentInCondominium = getItemsNotPresent(
    possibleItemsInCondominium,
    sectionItemCondominiumData,
    condominiumIconMapping,
  );
  const renderedItemsPresentInCondominium = getItemsPresent(
    possibleItemsInCondominium,
    sectionItemCondominiumData,
    condominiumIconMapping,
  );

  if (variant === 'Immobile') {
    renderedItemsPresent = renderedItemsPresentInProperty;
    renderedItemsNotPresent = renderedItemsNotPresentInProperty;
  } else {
    renderedItemsPresent = renderedItemsPresentInCondominium;
    renderedItemsNotPresent = renderedItemsNotPresentInCondominium;
  }

  return (
    <section style={{ width: '60%', paddingInline: '60px' }}>
      <Divider />
      <Separator size="large" />
      <Heading2>{title}</Heading2>
      <div style={{ display: 'flex' }}>
        <div className="container-icon-description">
          {renderedItemsPresent.map((item, index) => (
            <ul key={index}>
              <li>
                {item?.icon && <FontAwesomeIcon icon={item?.icon} color={colors.CTA} />}
                <BodySecondary>{item?.title}</BodySecondary>
              </li>
            </ul>
          ))}
        </div>
        <div className="container-icon-description">
          {renderedItemsNotPresent.map((item, index) => (
            <ul key={index}>
              <li>
                {item?.icon && <FontAwesomeIcon icon={item?.icon} color={colors.NeutralLight} />}
                <BodySecondary type="scratched">{item?.title}</BodySecondary>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <Separator size="large" />
    </section>
  );
}
