import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Body1 } from '../typography/body/body-primary';
import { Display } from '../typography/display/display';
import './banner.css';
import banner from './banner.svg';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { colors } from '../../typography/colors';
import { Separator } from '../separator/separator';

const handleBannerClick = () => {
  alert('Em construção');
};

export function Banner() {
  return (
    <div className="container-banner" onClick={handleBannerClick}>
      <img src={banner} alt="" />
      <Separator size="medium" />
      <div className="text-banner">
        <Display color="Neutral">Melhores imóveis</Display>
        <Body1 color="neutral">Confira opções que podem ser uma grande oportunidade!</Body1>
      </div>
      <Separator size="medium" />
      <div>
        <FontAwesomeIcon icon={faArrowRight} color={colors.Neutral}></FontAwesomeIcon>
      </div>
      <Separator size="medium" />
    </div>
  );
}
