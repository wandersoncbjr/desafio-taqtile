import { Button } from '../button/button';
import { ContainerForm } from '../container-form/container-form';
import { Input } from '../form/form';
import { Separator } from '../separator/separator';
import { TitleSubTitleForm } from '../title-subtitle-form/title-subtitle';
import { validateEmail, validatePassword } from './validate-login';
import React, { useState } from 'react';

export function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validate = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validateEmail.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (!validatePassword.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  return (
    <form onSubmit={validate}>
      <ContainerForm>
        <div style={{ width: '30%', zIndex: '1' }}>
          <Separator size="large" />
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TitleSubTitleForm
              title="Acesse sua conta"
              subTitle="Para utilizar os serviços da nossa plataforma, você precisa entrar uma conta!"
            />
          </div>
          <Separator size="medium" />
          <Input
            placeholder="Digite Seu Email"
            caption="E-mail inválido."
            error={emailError}
            type="text"
            label="Email"
            value={email}
            change={setEmail}
          />

          <Separator size="small" />
          <Input
            caption={'Senha inválida.'}
            error={passwordError}
            placeholder="Digite Sua Senha"
            type="password"
            label="Senha"
            value={password}
            change={setPassword}
          />

          <Separator size="large" />
          <Button expanded>Entrar</Button>
        </div>
      </ContainerForm>
    </form>
  );
}
