import React, { useEffect } from "react";
import PostLayout from "../../pages/components/PostLayout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getFeedsAsync, selectFeeds } from "./feedsSlice";
import { token } from "../user/userSlice";

const Feeds = () => {
  const userToken = useSelector(token);
  // console.log(userToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeedsAsync(userToken));
  }, [dispatch, userToken]);

  const posts = useSelector(selectFeeds);
  // console.log({ posts });
  return (
    <div className="grid grid-cols-1">
      {Array.isArray(posts)
        ? posts.map((post) => <PostLayout data={post} key={post._id} />)
        : null}
    </div>
  );
};

export default Feeds;
