import React from 'react';
import './card-container.css';
import { colors } from '../../../typography/colors';
import { constants } from '../../../typography';

interface ContainerProps {
  children: React.ReactNode;
  marginAll?: boolean;
}

export function ContainerCard({ children, marginAll }: ContainerProps) {
  return (
    <div className="card-container" style={{ boxShadow: colors.boxShadow, borderRadius: constants.font.SmallRadius }}>
      <div style={{ margin: marginAll ? '16px' : undefined }}>{children}</div>
    </div>
  );
}
