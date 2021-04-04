import React from "react";

const myStyle = {
  position: "fixed",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  backgroundColor: "rgb(255, 255, 255)",
  zIndex: 999999,
};

function Loading() {
  return (
    <div id='fakeloader' style={myStyle}>
      <div className='fl spinner1'>
        <div className='double-bounce1' />
        <div className='double-bounce2' />
      </div>
    </div>
  );
}

export default Loading;
