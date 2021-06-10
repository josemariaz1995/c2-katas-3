import { useState } from "react";

export const Flipicon = () => {
  const [like, setLike] = useState(true);
  const toggle = () => {
    setLike(!like);
  };
  return (
    <div className="row align-items-center">
      <i
        className={`far fa-thumbs-${like ? "up" : "down"}  class${
          like ? "Up" : "Down"
        } col-12`}
        onClick={toggle}
      ></i>
    </div>
  );
};
