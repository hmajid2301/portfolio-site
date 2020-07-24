import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React from 'react';

import tw from 'twin.macro';

import { Logo } from '~/components/atoms/Logo';
import { NavBar } from '~/components/molecules/Navbar';
import { SearchBar } from '~/components/molecules/SearchBar';
import { ThemeIcons } from '~/components/molecules/ThemeIcons';

const Header = () => {
  const links = [
    { name: 'Home', link: '/' },
    { name: 'Blog', link: '/blog' },
    { name: 'Tags', link: '/tags' },
    { name: 'Uses', link: '/uses' },
  ];

  return (
    <HeaderContainer>
      <Navbar>
        <Row>
          <LogoContainer to="/">
            <Logo />
          </LogoContainer>
        </Row>

        <Row>
          <NavBar links={links} />
          <SearchBar />
          <ThemeIcons />
        </Row>
      </Navbar>
    </HeaderContainer>
  );
};

const Navbar = tw.div`flex items-center justify-around p-4 max-w-screen-xl mx-auto`;

const Row = tw.div`flex flex-row space-x-4`;

const LogoContainer = styled(Link)`
  ${tw`border-b-0 ml-0!`};
`;

const HeaderContainer = tw.header`font-header text-main bg-background`;

export default Header;
