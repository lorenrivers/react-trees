import { useState } from "react";
import "./SurpriseTree.css";

export default function SurpriseTree() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="surprise-container">
      <button
        className="surprise-button"
        onClick={() => {
          setVisible(!visible); //the !visible makes setVisible whatever visible is not. E.g if it is false, it will set it to true.
        }}
      >
        Click for a surprise cool tree!!
      </button>
      {visible ? (
        <img
          className="surprise-image"
          src="https://media.cntraveller.com/photos/611bf4e2f6bd8f17556db944/master/w_2580%2Cc_limit/gettyimages-994569360.jpg"
        />
      ) : null}
    </div>
  );
}
