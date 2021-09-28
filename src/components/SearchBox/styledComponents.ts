import styled from 'styled-components';

export const SearchBoxWrapper = styled.div`
  width: 100%;
  padding: 0.8rem 1.6rem;
  background-color: var(--color-neutral-08);
  border-radius: var(--border-radius);
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.div`
  margin-right: 1.6rem;
  color: var(--color-neutral-02);
`;

export const ClearSearchIcon = styled.div`
  margin-left: 1.6rem;
  color: var(--color-neutral-02);
  cursor: pointer;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-family: inherit;
  flex: 1;
`;
