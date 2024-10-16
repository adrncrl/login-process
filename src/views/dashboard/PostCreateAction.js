import React from "react";
import { Button } from "reactstrap";

function createPost(props){
  const {toggle} = props
  return(
    <div style={{display: "flex", alignSelf: 'end'}}>
      <Button color="primary" onClick={toggle}>
          Add Post
      </Button>
    </div>
  )
}

export default createPost