export default function Searchbar({ onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          name="search"
        />
      </label>
      <button type="submit">
        <span>🔍</span>
      </button>
    </form>
  );
}
