import { usePosts } from "../hooks/usePosts";

export default function SearchPosts() {
  const { searchQuery, setSearchQuery } = usePosts(); // add ! to assert that PostContext is not null
  return (
    <input
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
