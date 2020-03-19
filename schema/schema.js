const graphql = require("graphql");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} = graphql;

const dummyDataLessons = [
  {
    id: "1",
    name: "test",
    language: "JavaScript",
    platForm: "YouTube",
    instructorId: "1"
  }
];

const dummyDataInstructors = [{ id: "1", name: "Brad Traversy" }];

const LessonType = new GraphQLObjectType({
  name: "Lesson",
  fields: () => {
    return {
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      language: { type: GraphQLString },
      platForm: { type: GraphQLString },
      instructorId: { type: GraphQLID }
    };
  }
});

const InstructorType = new GraphQLObjectType({
  name: "Instructor",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    lessons: {
      type: GraphQLList(LessonType),
      resolve: () => dummyDataLessons
    },
    instructors: {
      type: GraphQLList(InstructorType),
      resolve: () => dummyDataInstructors
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
