import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { getLessonsQuery } from "../queries/queries";

const LessonList = () => {
  const { loading, error, data } = useQuery(getLessonsQuery);

  if (loading) return <p>Loading</p>;
  return (
    <div>
      <h1>My Favorite Lessons</h1>
      <ul>
        {data.lessons.map(lesson => {
          return (
            <li key={lesson.id}>
              {lesson.name} <button>x</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LessonList;
