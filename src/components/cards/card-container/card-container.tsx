import React from 'react';
import './card-container.css';
import { colors } from '../../../typography/colors';
import { constants } from '../../../typography';

interface ContainerProps {
  children: React.ReactNode;
}

export function ContainerCard({ children }: ContainerProps) {
  return (
    <div className="card-container" style={{ boxShadow: colors.boxShadow, borderRadius: constants.font.radius }}>
      {children}
    </div>
  );
}
