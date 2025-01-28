import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addCourseAction } from '../components/actions/CourseAction';
import { style_01 } from '../styles/style_01';

const CourseList = ({ availableCourses, dispatch }) => {
  const onSelectCourse = course => {
    dispatch(addCourseAction(course));
  };

  return (
    <View style={style_01.body}>
      {availableCourses.map((course, index) => (
        <TouchableOpacity
          key={index}
          style={[style_01.listItem, style_01.availableCourse]}
          onPress={() => onSelectCourse(course)}
        >
          <Text style={style_01.courseText}>{course}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const mapStateToProps = ({ Courses }) => {
  return { availableCourses: Courses.availableCourses };
};

export default connect(mapStateToProps)(CourseList);
