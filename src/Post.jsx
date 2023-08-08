import React from "react";
import { MoreHorizontal, MessageCircle, Repeat, Heart } from "react-feather";

const Post = (props) => {
  const getRandomStat = () => {
    let precise = Math.floor(Math.random() * 10000);
    if (precise < 1500) return precise;
    if (precise >= 1500 && precise < 10000)
      return (
        precise.toString().slice(0, 1) +
        "." +
        precise.toString().slice(1, 2) +
        "K"
      );
  };

  return (
    <div
      className={
        "transition-colors duration-300 hover:bg-gray-50 border-gray-200" +
        (props.i == 9 ? "" : " border-b")
      }
    >
      <div className="flex px-5 py-3">
        <div>
          <div
            className={
              "avatar mr-4" + (Math.round(Math.random()) ? " online" : "")
            }
          >
            <div className="w-10 rounded-full">
              <img src={props.post.imageUrl} />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-end">
            <div>
              <span className="font-bold">{`${props.post.firstName} ${props.post.lastName}`}</span>{" "}
              <span className="text-base-content/50">{`@${props.post.handle} · 14h`}</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-end">
                <MoreHorizontal className="h-8 w-8 transition-colors duration-150 hover:bg-blue-200 hover:text-blue-500 rounded-full p-2" />
              </div>
            </div>
          </div>
          <p>{props.post.content}</p>
          <div className="flex mt-1">
            <div className="flex items-center group mr-4">
              <MessageCircle className="rounded-full w-9 h-9 p-2 mr-1 transition-colors duration-150 group-hover:bg-blue-200 group-hover:text-blue-500" />
              <span className="pointer-events-none transition-colors duration-150 group-hover:text-blue-500">
                {getRandomStat()}
              </span>
            </div>
            <div className="flex items-center group mr-4">
              <Repeat className="rounded-full w-9 h-9 p-2 mr-1 transition-colors duration-150 group-hover:bg-green-200 group-hover:text-green-500" />
              <span className="pointer-events-none transition-colors duration-150 group-hover:text-green-500">
                {getRandomStat()}
              </span>
            </div>
            <div className="flex items-center group">
              <Heart className="rounded-full w-9 h-9 p-2 mr-1 transition-colors duration-150 group-hover:bg-red-200 group-hover:text-red-500" />
              <span className="pointer-events-none transition-colors duration-150 group-hover:text-red-500">
                {getRandomStat()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
