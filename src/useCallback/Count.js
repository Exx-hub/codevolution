import React from "react";

function Count({ count, text }) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

export default React.memo(Count);
