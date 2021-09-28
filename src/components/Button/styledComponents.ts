import styled, { css } from 'styled-components';
import { CommonProps } from './types';

const buttonCSS = (isDisabled = false) => css`
  display: inline-block;
  padding: 0.8rem 3.4rem;
  font-family: inherit;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.8rem;
  letter-spacing: 1.76px;
  text-transform: uppercase;
  border: 2px solid transparent;
  border-radius: 50rem;
  outline: none;
  cursor: ${isDisabled ? 'not-allowed' : 'pointer'};

  &:hover {
    transform: scale(1.06);
  }

  &:active {
    transform: scale(1);
  }

  ${isDisabled &&
  `
    pointer-events: none;
    user-select: none;
    opacity: 0.6;
  `}
`;

export const ButtonWrapper = styled.button<CommonProps>`
  ${({ isDisabled }) => buttonCSS(isDisabled)}

  ${({ variant = 'filled', color = 'primary' }) => {
    if (variant === 'neutral') {
      return `
        color: var(--color-neutral-03);
        background-color:var(--color-neutral-08);
      `;
    }

    if (variant === 'filled' && color === 'primary') {
      return `
        color: var(--color-neutral-08);
        background-color: var(--color-primary);

        &:hover {
          background-color: var(--color-primary-lighter);
        }
      `;
    }

    if (variant === 'ghost') {
      return `
        color: var(--color-neutral-08);
        background-color: transparent;
      `;
    }
  }}
`;
