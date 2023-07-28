import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../button/button';
import { ContainerForm } from '../container-form/container-form';
import { Input } from '../form/form';
import { Separator } from '../separator/separator';
import { TitleSubTitleForm } from '../title-subtitle-form/title-subtitle';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { BodySecondary } from '../typography/body/body-secondary';
import { colors } from '../../typography/colors';

export function Register() {
  return (
    <ContainerForm>
      <Separator size="large" />
      <div style={{ zIndex: '1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <TitleSubTitleForm title="Cadastre-se" subTitle="Insira alguns dados sobre seu perfil. " />
        </div>
        <Separator size="small" />
        <Input label="Email" placeholder="Digite seu e-mail." />
        <div style={{ display: 'flex', gap: '8px' }}>
          <Input placeholder="Digite seu nome." />
          <Input placeholder="Digite seu sobrenome." />
        </div>
        <Input placeholder="Crie uma senha." />
        <Input placeholder="Repita a senha." />
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <FontAwesomeIcon icon={faCircleCheck} color={colors.CTA} style={{ cursor: 'pointer' }} />
          <BodySecondary type="bold">Eu aceito todos os termos e condições</BodySecondary>
        </div>
        <Separator size="small" />
        <Button expanded>Cadastrar</Button>
      </div>
    </ContainerForm>
  );
}
