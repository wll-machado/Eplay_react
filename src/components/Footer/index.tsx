import React from 'react'
import { Container, Copyright, FooterSection, Link, Links, SectionTiltle } from './styles'

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <Container>
      <div className="container">
        <FooterSection>
          <SectionTiltle>Categorias</SectionTiltle>
          <Links>
            <li>
              <Link>
                RPG
              </Link>
            </li>
            <li>
              <Link>
                Ação
              </Link>
            </li>
            <li>
              <Link>
                Aventura
              </Link>
            </li>
            <li>
              <Link>
                Esporte
              </Link>
            </li>
            <li>
              <Link>
                FPS
              </Link>
            </li>
          </Links>
        </FooterSection>
        <FooterSection>
          <SectionTiltle>Acesso Rapido</SectionTiltle>
          <Links>
          <li>
              <Link>
                Novidades
              </Link>
            </li>
            <li>
              <Link>
                Promoções
              </Link>
            </li>
            <li>
              <Link>
                Em Breve
              </Link>
            </li>
          </Links>
        </FooterSection>
        <Copyright>
          {year} - &copy; E-play Todos os direitos reservados
        </Copyright>
      </div>
    </Container>
  )
}

export default Footer
