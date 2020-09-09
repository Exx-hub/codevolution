import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: "Error retrieving data" });
      });
  }

  render() {
    const { posts, errorMessage } = this.state;
    return (
      <div>
        List of Posts:
        {posts.length
          ? posts.map((item) => <div key={item.id}>{item.title}</div>)
          : null}
        {errorMessage ? <div>{errorMessage}</div> : null}
      </div>
    );
  }
}

export default PostList;
