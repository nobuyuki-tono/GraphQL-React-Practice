import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import {
  getLessonsQuery,
  getInstrunctorQuery,
  addLessonMutaion
} from "../queries/queries";

const AddLesson = () => {
  // Graphql
  const { loading, error, data } = useQuery(getInstrunctorQuery);
  const [addLesson, { mutaionError }] = useMutation(addLessonMutaion);

  // State
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [platform, setPlatform] = useState("");
  const [instructor, setInstructor] = useState("");

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeLanguage = e => {
    setLanguage(e.target.value);
  };

  const handleChangePlatform = e => {
    setPlatform(e.target.value);
  };

  const handleSelectChange = e => {
    setInstructor(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    addLesson({
      variables: { name, language, platform, instructorId }
    });

    setName("");
    setLanguage("");
    setPlatform("");
    setInstructor("");
  };

  if (loading) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit} action="">
      <div className="field">
        <label htmlFor="">Lesson Name: </label>
        <input onCahnge={handleChangeName} type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Language: </label>
        <input onChange={handleChangeLanguage} type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Platform: </label>
        <input onChange={handleChangePlatform} type="text" />
      </div>
      <div className="field">
        <label htmlFor="">Instructor: </label>
        <select onChange={handleSelectChange} name="" id="">
          <option value="">Select instructor</option>
        </select>
      </div>
    </form>
  );
};

export default AddLesson;
