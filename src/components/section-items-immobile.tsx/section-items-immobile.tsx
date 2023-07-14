import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BodySecondary } from '../typography/body/body-secondary';
import { Heading2 } from '../typography/headline/h2';
import './section-items-immobile.css';
import { colors } from '../../typography/colors';
import { Divider } from '../cards/divider/divider';
import {
  renderedItemsNotPresentInProperty,
  renderedItemsPresentInProperty,
  renderedItemsNotPresentInCondominium,
  renderedItemsPresentInCondominium,
} from './item-filter';
import { Separator } from '../separator/separatos';

interface SectionItemsProps {
  title: string;
  variant: 'Immobile' | 'condominium';
}

export function SectionItems({ title, variant }: SectionItemsProps) {
  let renderedItemsPresent, renderedItemsNotPresent;

  if (variant === 'Immobile') {
    renderedItemsPresent = renderedItemsPresentInProperty;
    renderedItemsNotPresent = renderedItemsNotPresentInProperty;
  } else {
    renderedItemsPresent = renderedItemsPresentInCondominium;
    renderedItemsNotPresent = renderedItemsNotPresentInCondominium;
  }

  return (
    <div style={{ width: '60%', paddingInline: '60px' }}>
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
    </div>
  );
}
