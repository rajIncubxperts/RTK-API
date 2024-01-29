import { FormEvent, useState } from "react";
import PostCard from "../components/postCard";
import { useCreatePostMutation, usePostsQuery } from "../services/postApi";
import { Post } from "../models/post.model";

export const Home = () => {
  const { data, error, isLoading, isFetching, isSuccess } = usePostsQuery();
  console.log(
    " data, error, isLoading, isFetching, isSuccess ",
    data,
    error,
    isLoading,
    isFetching,
    isSuccess
  );
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const post: Post = {
      title: title,
      body: body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000,
    };
    createPost(post);
    setBody("");
    setTitle("");
  };
  const [createPost] = useCreatePostMutation();
  return (
    <div>
      <h2>My Json Server List</h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>

      {isLoading ? (
        <div>...Loading...</div>
      ) : (
        data?.map((postInfo) => (
          <div key={postInfo.id}>
            <PostCard post={postInfo} />
          </div>
        ))
      )}
    </div>
  );
};
