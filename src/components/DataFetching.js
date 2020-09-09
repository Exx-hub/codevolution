import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetching() {
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage("Error retrieving data");
      });
  }, []);

  return (
    <div>
      <ul>
        {posts.length
          ? posts.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
    </div>
  );
}

export default DataFetching;

// <h3>{post.title}</h3>
