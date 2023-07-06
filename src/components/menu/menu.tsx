import { Button } from '../button/button';
import { Separator } from '../separator/separatos';
import { Label } from '../typography/label/label';
import { ItemMenu } from './item-menu';
import logo from './logo.svg';
import './menu.css';

export function Menu() {
  return (
    <header>
      <div className="container-header">
        <img
          src={logo}
          alt="logo da empresa. Imobilar
            Corretora Imobiliária"
        />
        <div className="container-item-menu">
          <ItemMenu redirect="/home" title="Home" />
          <Separator size="medium" />
          <ItemMenu redirect="/quem-somos" title="Quem Somos" />
          <Separator size="medium" />
          <ItemMenu redirect="/contato" title="Contato" />
        </div>
        <div className="container-button">
          <Button variant="secondary" compact={true}>
            <Label type="regular">Logar</Label>
          </Button>
          <Separator size="small" />
          <Button compact={true}>Cadastrar</Button>
        </div>
      </div>
    </header>
  );
}
