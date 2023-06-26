import styled from 'styled-components';
export const Films = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 45px;
  padding: 0;
  width: 80%;
  max-width: 1200px;
  margin: 20px auto;
`;

export const FilmName = styled.h3`
  color: black;
  max-width: 266px;
`;
