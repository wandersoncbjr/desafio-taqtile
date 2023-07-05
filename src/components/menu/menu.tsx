import { ItemMenu } from './item-menu';
import logo from './logo.svg';

export function Menu() {
  return (
    <header>
      <img
        src={logo}
        alt="logo da empresa. Imobilar
            Corretora Imobiliária"
      />
      <ItemMenu />
    </header>
  );
}
