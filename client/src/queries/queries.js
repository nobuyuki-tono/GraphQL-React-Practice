import { gql } from "apollo-boost";

const getInstrunctorQuery = gql`
  {
    instructors {
      name
      id
    }
  }
`;

const getLessonsQuery = gql`
  {
    lessons {
      name
      id
      platform
      language
    }
  }
`;

const addLessonMutaion = gql`
  mutation addLesson(
    $name: String!
    $language: String!
    $platform: String!
    $instructorId: ID!
  ) {
    addLesson(
      name: $name
      language: $language
      platform: $platform
      instructorId: $instructorId
    ) {
      name
      id
    }
  }
`;

export { getLessonsQuery, getInstrunctorQuery, addLessonMutaion };
