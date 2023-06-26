import { Input, Label } from './SearchbarStyled';

export default function Searchbar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <Label>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="search"
        />
        <button type="submit">
          <span>🔍</span>
        </button>
      </Label>
    </form>
  );
}
