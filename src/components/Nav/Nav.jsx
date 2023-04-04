import SearchBar from "../SearchBar/SearchBar.jsx";

export default function Nav({ onSearch }) {
  return (
    <nav>
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}
