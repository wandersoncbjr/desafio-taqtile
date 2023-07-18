import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BodySecondary } from '../typography/body/body-secondary';
import { Heading2 } from '../typography/headline/h2';
import './section-items-immobile.css';
import { colors } from '../../typography/colors';
import { Divider } from '../cards/divider/divider';
import { Separator } from '../separator/separator';
import {
  renderedItemsNotPresentInProperty,
  renderedItemsPresentInProperty,
  renderedItemsNotPresentInCondominium,
  renderedItemsPresentInCondominium,
  ItemData,
} from './item-filter';

interface SectionItemsProps {
  title: string;
  variant: 'Immobile' | 'Condominium';
}

export function SectionItems({ title, variant }: SectionItemsProps) {
  let renderedItemsPresent: { data: ItemData }[] = [];
  let renderedItemsNotPresent: { data: ItemData }[] = [];

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
                {item?.data?.icon && <FontAwesomeIcon icon={item?.data?.icon} color={colors.CTA} />}
                <BodySecondary>{item?.data.title}</BodySecondary>
              </li>
            </ul>
          ))}
        </div>
        <div className="container-icon-description">
          {renderedItemsNotPresent.map((item, index) => (
            <ul key={index}>
              <li>
                {item?.data?.icon && <FontAwesomeIcon icon={item?.data?.icon} color={colors.NeutralLight} />}
                <BodySecondary type="scratched">{item?.data.title}</BodySecondary>
              </li>
            </ul>
          ))}
        </div>
      </div>
      <Separator size="large" />
    </section>
  );
}
