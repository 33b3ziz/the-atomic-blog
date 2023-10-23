import { createContext, useState } from "react";
import { createRandomPost } from "../functions/createRandomPost";
import { Context } from "../types/ContextType";
import { Post, Posts } from "../types/Posts";

// 1) Create a context
const PostContext = createContext<Context | null>(null);

interface PostProviderProps {
  children: React.ReactNode;
}

function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Posts>(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post: Post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return (
    // 2) Provide value to child components
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        onClearPosts: handleClearPosts,
        onAddPost: handleAddPost,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider, PostContext };
