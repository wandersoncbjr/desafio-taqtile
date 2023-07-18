import { Button } from '../button/button';
import { Separator } from '../separator/separator';
import { Body1 } from '../typography/body/body-primary';
import { Display } from '../typography/display/display';
import heroPhoto from './hero-photo.svg';
import './hero.css';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const handleSearchClick = () => {
  alert('A página não está disponível no momento');
};
export function Hero() {
  return (
    <section className="container-hero">
      <img src={heroPhoto} alt="duas mulheres e dois cachorros sobre uma cama" />
      <div>
        <div className="container-section-hero">
          <Display color="CTA">Encontre seu espaço no mundo!</Display>
          <Body1>Os melhores imóveis de acordo com as suas preferências.</Body1>
          <Separator size="medium" />
          <div className="hero-button">
            <Button icon={faMagnifyingGlass} expanded onClick={handleSearchClick} compact={true}>
              Buscar
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
