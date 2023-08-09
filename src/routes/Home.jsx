import React from "react";
import { faker } from "@faker-js/faker";
import PageTitle from "../components/PageTitle";
import Editor from "../components/Editor";
import Post from "../components/Post";

const Home = () => {
  const posts = Array(10)
    .fill(0)
    .map((_) => {
      const data = {
        id: faker.string.uuid(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        handle: "",
        content: faker.lorem.lines(),
        imageUrl: faker.image.urlLoremFlickr({
          width: 128,
          height: 128,
          category: "headshot",
        }),
      };
      data.handle = faker.internet.userName({
        firstName: data.firstName,
        lastName: data.lastName,
      });
      return data;
    });

  return (
    <>
      <PageTitle>Home</PageTitle>
      <div className="border-gray-200 border-b">
        <Editor />
      </div>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </>
  );
};

export default Home;
