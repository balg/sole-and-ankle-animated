import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const NavLink = ({ href, label, ...delegated }) => (
  <Link href={href} {...delegated}>
    <span className="default">{label}</span>
    <span className="puffer" aria-hidden>
      {label}
    </span>
    <span className="hovered" aria-hidden>
      {label}
    </span>
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

  & .puffer,
  & .default,
  & .hovered {
    display: block;
  }

  & .puffer {
    font-weight: ${WEIGHTS.bold};
    height: 0;
  }

  & .hovered {
    position: absolute;
    top: 0;
    left: 0;
    font-weight: ${WEIGHTS.bold};
    transform: translateY(100%);
  }

  &:focus .default,
  &:hover .default {
    transform: translateY(-100%);
  }

  &:focus .hovered,
  &:hover .hovered {
    transform: translateY(0);
  }

  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    & .default,
    & .hovered {
      transition: transform 200ms;
    }
  }
`;

export default NavLink;
