import { ReactNode } from 'react';
import imgHeaderForm from './img-header.svg';

interface ContainerFormProps {
  children: ReactNode;
}

export function ContainerForm({ children }: ContainerFormProps) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
        <div
          style={{
            display: 'flex',
            justifyContent: 'end',
            width: '100%',
            bottom: '0',
            position: 'fixed',
          }}
        >
          <img src={imgHeaderForm} />
        </div>
      </div>
    </>
  );
}
