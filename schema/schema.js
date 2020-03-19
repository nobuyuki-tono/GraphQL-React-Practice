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
  },
  {
    id: "2",
    name: "test2",
    language: "Python",
    platForm: "YouTube",
    instructorId: "2"
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
      instructor: {
        type: InstructorType,
        resolve: (parent, args) => {
          return dummyDataInstructors.find(
            instructor => parent.instructorId === instructor.id
          );
        }
      }
    };
  }
});

const InstructorType = new GraphQLObjectType({
  name: "Instructor",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    lessons: {
      type: GraphQLList(LessonType),
      resolve: (parent, args) => {
        return dummyDataLessons.filter(
          lesson => lesson.instructorId === parent.id
        );
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    lesson: {
      type: LessonType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return dummyDataLessons.find(lesson => lesson.id === args.id);
      }
    },
    instructor: {
      type: InstructorType,
      args: { id: { type: GraphQLID } },
      resolve: (parent, args) => {
        return dummyDataInstructors.find(
          instructor => instructor.id === args.id
        );
      }
    },
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
