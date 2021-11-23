import React, { useState, useEffect } from 'react'

export default function PostRequest() {
  let [dataPost, setDataPost] = useState([{
    title: "",
    body: "",
    id: ""
  }]);
  console.log(dataPost)

  useEffect(() => {
  const requestOptions = {
    method: "GET",
    headers: {"Content-type": "application/json"}
  };

  fetch('https://jsonplaceholder.typicode.com/posts?_limit=10', requestOptions)
    .then(responce => responce.json())
    .then(resp => {
      console.log(resp)
      return setDataPost(resp)
    })
    .catch(err => console.log(err))
  }, []);

  
  return (
    <div>
      { dataPost.map((post) => {
          return (
            <div className="card">
              <h5 className="card-header">Title: {post.title}</h5>
              <div className="card-body">
                <div>ID: {post.id}</div>
                <div>Body: {post.body}</div>
              </div>
            </div> 
          )
        })
      }
    </div>
  )
}
