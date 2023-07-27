import { BodySecondary } from '../typography/body/body-secondary';
import { Heading1 } from '../typography/headline/h1';

interface TitleSubTitlProps {
  title: string;
  subTitle: string;
}

export function TitleSubTitleForm({ title, subTitle }: TitleSubTitlProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '90%',
        textAlign: 'center',
      }}
    >
      <Heading1>{title}</Heading1>
      <div>
        <BodySecondary color="NeutralXdark">{subTitle}</BodySecondary>
      </div>
    </div>
  );
}
