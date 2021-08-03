import React from "react";
import Link from "next/link";
import { Container, Nav as BSNav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { useTranslation } from 'next-i18next';

const NavLink = styled(Link).attrs({ as: "a" })`
  font-weight: bold !important;
  margin: 0 10px;
`;

export function Nav() {
  const { t } = useTranslation('common');

  return (
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <div>
          <a href="/#page-top" alt="Retour à l'accueil">
            <img
              src="/img/logo-1000j.png"
              width={100}
              height={101}
              alt="Logo 1000 premiers jours"
            />
          </a>
        </div>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end">
          <BSNav>
            <NavLink href="/pourquoi">{t('nav-pourquoi')}</NavLink>
            <NavLink href="/comment">{t('nav-comment')}</NavLink>
            <NavLink href="/qui">{t('nav-qui')}</NavLink>
            <NavLink href="/contact">{t('nav-contact')}</NavLink>
            <NavLink href="/professionnel">{t('nav-professionnel')}</NavLink>
          </BSNav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
