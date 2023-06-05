import React from 'react';
import './index.css';
import { colors } from '../../../typography/colors';
import { constants } from '../../../typography/';

interface ContainerProps {
  children: React.ReactNode;
}

export function ContainerCard({ children }: ContainerProps) {
  return (
    <div className="card-containe" style={{ boxShadow: colors.boxShadow, borderRadius: constants.font.radius }}>
      {children}
    </div>
  );
}
