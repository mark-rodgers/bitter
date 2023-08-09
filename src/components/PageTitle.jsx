import React from "react";

const PageTitle = (props) => {
  return (
    <div className="border-gray-200 border-b sticky top-0 backdrop-blur-lg bg-white/70 z-20">
      <div class="flex px-5 py-5">
        <div className="flex-1 text-2xl font-bold">{props.children}</div>
      </div>
    </div>
  );
};

export default PageTitle;
