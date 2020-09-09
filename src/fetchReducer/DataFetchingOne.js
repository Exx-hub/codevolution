import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingOne() {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    console.log("mounted / re-rendered");
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/1`)
      .then((response) => {
        setIsLoading(false);
        setPost(response.data);
        setErrorMessage("");
      })
      .catch((error) => {
        setIsLoading(false);
        setPost({});
        setErrorMessage("Oops! Something went wrong!");
      });
  }, []);

  return (
    <div>
      {isLoading ? "Loading..." : post.title}
      {errorMessage ? errorMessage : null}
    </div>
  );
}

export default DataFetchingOne;
