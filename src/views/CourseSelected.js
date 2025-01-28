import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { removeCourseAction } from '../components/actions/CourseAction';
import { style_01 } from '../styles/style_01';

const CourseSelected = ({ selectedCourses, dispatch }) => {
  const onRemoveCourse = course => {
    dispatch(removeCourseAction(course));
  };

  return (
    <View style={style_01.body}>
      {selectedCourses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={[style_01.listItem, style_01.selectedCourse]}
          onPress={() => onRemoveCourse(course)}
        >
          <Text style={style_01.courseText}>{course}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const mapStateToProps = ({ Courses }) => {
  return { selectedCourses: Courses.selectedCourses };
};

export default connect(mapStateToProps)(CourseSelected);
