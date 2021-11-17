import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...delegated }) => (
  <Link {...delegated}>
    <MainText>{children}</MainText>
    <PufferText aria-hidden>{children}</PufferText>
    <HoverText aria-hidden>{children}</HoverText>
  </Link>
);

const Link = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  display: block;
  position: relative;
  overflow: hidden; /* For the flip-up animation on hover */
`;

const Text = styled.span`
  display: block;

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    transition: transform 500ms;
  }
`;

const MainText = styled(Text)`
  ${Link}:hover & {
    transform: translateY(-100%);

    @media (hover: hover) and (prefers-reduced-motion: no-preference) {
      transition: transform 200ms;
    }
  }
`;

const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: ${WEIGHTS.bold};
  transform: translateY(100%);

  ${Link}:hover & {
    transform: translateY(0);

    @media (hover: hover) and (prefers-reduced-motion: no-preference) {
      transition: transform 200ms;
    }
  }
`;

const PufferText = styled.span`
  display: block;
  height: 0;
  font-weight: ${WEIGHTS.bold};
`;

export default NavLink;
