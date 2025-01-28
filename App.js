import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import CourseList from './src/views/CourseList';
import CourseSelected from './src/views/CourseSelected';
import ConfigureStore from './src/components/Store';

const App = () => {
  const store = ConfigureStore();
  return (
    <Provider store={store}>
      <View>
        <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 20 }}>
          Cursos Disponibles
        </Text>
        <CourseList />
        <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 20 }}>
          Cursos Seleccionados
        </Text>
        <CourseSelected />
      </View>
    </Provider>
  );
};

export default App;
