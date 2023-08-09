import React, { useState, useCallback } from "react";
import { Image, MapPin, Smile, Calendar, Eye } from "react-feather";
import sanitizeHtml from "sanitize-html";

const Editor = () => {
  const placeholder = "What is happening?!";

  const [content, setContent] = useState("");
  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const onFocus = useCallback((e) => {
    if (showPlaceholder) setShowPlaceholder(false);
  });

  const onContentBlur = useCallback((e) => {
    if (!e.currentTarget.textContent.trim()) {
      setContent("");
      setShowPlaceholder(true);
      return;
    }

    // const sanitizeOptions = {
    //   allowedTags: ["p", "br"],
    // };
    // setContent(sanitizeHtml(e.currentTarget.innerHTML, sanitizeOptions));
    setContent(e.currentTarget.innerHTML);
  }, []);

  const handlePost = (e) => {
    alert("TODO: add post");
    setContent("");
    setShowPlaceholder(true);
  };

  return (
    <div className="flex px-5 py-5">
      <div>
        <div className="avatar online mr-4">
          <div className="w-10 rounded-full">
            <img src="/user_images/mark-rodgers.jpg" />
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 relative text-xl">
        <div
          className={
            "focus:outline-none focus:ring-0" +
            (showPlaceholder && " text-gray-500")
          }
          contentEditable
          onFocus={onFocus}
          onBlur={onContentBlur}
          dangerouslySetInnerHTML={{
            __html: showPlaceholder ? placeholder : content,
          }}
        ></div>
        <div className="flex mt-4 items-center">
          <div className="text-blue-500 mr-4">
            <Image className="h-5" />
          </div>
          <div className="text-blue-500 mr-4">
            <Smile className="h-5" />
          </div>
          <div className="text-blue-500 mr-4">
            <MapPin className="h-5" />
          </div>
          <div className="text-blue-500 mr-4">
            <Calendar className="h-5" />
          </div>
          <div className="text-blue-500 mr-4">
            <Eye className="h-5" />
          </div>
          <div className="flex-1 text-right">
            <button
              onClick={handlePost}
              className="btn bg-blue-500 hover:bg-blue-600 text-white"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
