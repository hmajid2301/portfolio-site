import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Theme } from '@theme/styled';
import { Link } from 'gatsby';
import { rem } from 'polished';
import React from 'react';

const createStyles = () => {};

const StyledHeader = styled.header``;

const Header = () => {
  return (
    <StyledHeader>
      <div className="navContainer">
        <div id="logo">
          <Link to="/" aria-label="to home page">
            {/* <Logo /> */}
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link activeClassName="activePage" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/mainProjects">
                Main Projects
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/work">
                Work History
              </Link>
            </li>
            <li>
              <Link activeClassName="activePage" to="/packages">
                Packages
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
