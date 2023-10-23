import { SetStateAction } from "react";
import { Post, Posts } from "./Posts";

export type Context = {
  posts: Posts;
  onClearPosts: () => void;
  onAddPost: (post: Post) => void;
  searchQuery: string;
  setSearchQuery: React.Dispatch<SetStateAction<string>>;
};
