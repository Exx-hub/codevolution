import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetchingTwo() {
  const [post, setPost] = useState({});
  const [id, setId] = useState("");
  const [idFromButton, setIdFromButton] = useState(0);

  useEffect(() => {
    axios
      .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log("fetched", response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButton]);

  const handleSubmit = () => {
    console.log("submitted");
    setIdFromButton(id);
  };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log("submitted");

  //     axios
  //       .get(`http://jsonplaceholder.typicode.com/posts/${id}`)
  //       .then((response) => {
  //         console.log(response);
  //         setPost(response.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   };

  // can be done instead of effect hook. when button is clicked make the get request

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleSubmit}>FETCH</button>

      <div>{post.title}</div>
    </div>
  );
}

export default DataFetchingTwo;
