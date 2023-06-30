import { BodySecondary } from '../typography/body/body-secondary';
import { H3 } from '../typography/headline/h3';

interface DataFooter {
  redirect: string;
  content: string;
}

interface FooterNavProps {
  title: string;
  dataFooter: DataFooter[];
}

export function FooterNav({ title, dataFooter }: FooterNavProps) {
  return (
    <section>
      <ul style={{ listStyle: 'none' }}>
        <H3 color="neutral">{title}</H3>
        {dataFooter.map((link, index) => (
          <li key={index}>
            <a href={link.redirect} style={{ textDecoration: 'none' }}>
              <BodySecondary>{link.content}</BodySecondary>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
