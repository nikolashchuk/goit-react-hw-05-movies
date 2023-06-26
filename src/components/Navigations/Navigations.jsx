import { NavLink } from 'react-router-dom';
import { Nav } from './Navigations.styled';

export default function Navigations() {
  return (
    <>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </Nav>
    </>
  );
}
