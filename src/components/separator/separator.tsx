type SeparatorProps = {
  size: 'small' | 'medium' | 'large';
};

export function Separator({ size }: SeparatorProps) {
  const styleSeparator = {
    margin: size === 'small' ? '8px' : size === 'medium' ? '16px' : '32px',
  };
  return <div style={styleSeparator}></div>;
}
