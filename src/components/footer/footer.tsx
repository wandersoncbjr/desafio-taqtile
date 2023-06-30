import { Divider } from '../cards/divider/divider';
import { Label } from '../typography/label/label';
import { FooterNav } from './footer-nav';
import './footer.css';
import company from './company-.svg';

export function Footer() {
  return (
    <footer>
      <div
        style={{
          display: 'flex',
        }}
      >
        <div className="company-info">
          <div>
            <img src={company} />
          </div>
        </div>
        <div className="container-footer">
          <FooterNav
            title="Comprar"
            dataFooter={[
              { content: 'Casa', redirect: '/casas' },
              { content: 'Apartamentos', redirect: '/Apartamentos' },
              { content: 'Lançamentos', redirect: '/Lançamentos' },
              { content: 'Melhores negócios', redirect: '/melhores-negocios' },
            ]}
          />
          <FooterNav
            title="Termos & Privacidade"
            dataFooter={[
              { content: 'Política de cookies', redirect: '/Politica-de-cookies' },
              { content: 'Termos de uso', redirect: '/Termos-de-uso' },
              { content: 'Política de privacidade', redirect: 'Política-de-privacidade' },
            ]}
          />
          <FooterNav
            title="Informações"
            dataFooter={[
              { content: 'Blog', redirect: '/Blog' },
              { content: 'Blog', redirect: '/Blog' },
              { content: 'FAQ', redirect: '/FAQ' },
              { content: 'Canal de ajuda', redirect: 'Canal-de-ajuda' },
            ]}
          />
          <FooterNav
            title="Alugar"
            dataFooter={[
              { content: 'Casa', redirect: '/casas' },
              { content: 'Apartamentos', redirect: '/Apartamentos' },
              { content: 'Lançamentos', redirect: '/Lançamentos' },
              { content: 'Melhores negócios', redirect: '/melhores-negocios' },
            ]}
          />
          <FooterNav
            title="Institucional"
            dataFooter={[
              { content: 'Casa', redirect: '/casas' },
              { content: 'Sobre nós', redirect: '/Sobre nós' },
              { content: 'Contato', redirect: '/Contato' },
              { content: 'Trabalhe conosco', redirect: '/rabalhe-conosco' },
            ]}
          />
        </div>
      </div>
      <Divider />
      <div className="container-copyright">
        <Label type="neutral">©2022 Estatery. Todos os direitos estão reservados</Label>
      </div>
    </footer>
  );
}
