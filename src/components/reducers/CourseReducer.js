import { ADD_COURSE, REMOVE_COURSE } from '../actions/CourseActionTypes';

const INITIAL_STATE = {
  availableCourses: [
    'Matemáticas',
    'Física',
    'Química',
    'Programación',
    'Redes',
  ],
  selectedCourses: [],
};

const CourseReducer = (state = INITIAL_STATE, action) => {
  const { availableCourses, selectedCourses } = state;
  let newState;

  switch (action.type) {
    case ADD_COURSE:
      newState = {
        availableCourses: availableCourses.filter(
          course => course !== action.payload
        ),
        selectedCourses: [...selectedCourses, action.payload],
      };
      return newState;

    case REMOVE_COURSE:
      newState = {
        availableCourses: [...availableCourses, action.payload],
        selectedCourses: selectedCourses.filter(
          course => course !== action.payload
        ),
      };
      return newState;

    default:
      return state;
  }
};

export default CourseReducer;
