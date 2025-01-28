import { StyleSheet } from 'react-native';

const principal = '#1B2E66';
const naranja = '#FF9900';
const blanco = '#FFFFFF';
const gris_1 = '#B2BDD5';
const celeste = '#A9D8E4';
const verdeClaro = '#A8E6A3';

export const style_01 = StyleSheet.create({
  body: {
    margin: 7,
    padding: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: principal,
  },
  taskText: {
    alignItems: 'center',
    backgroundColor: blanco,
    borderRadius: 10,
    margin: 5,
    padding: 10,
  },
  btn_AddTask: {
    borderColor: principal,
    borderWidth: 1,
    borderRadius: 20,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_label: {
    alignSelf: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  listItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  availableCourse: {
    backgroundColor: celeste,
  },
  selectedCourse: {
    backgroundColor: verdeClaro,
  },
  courseText: {
    color: principal,
    fontWeight: 'bold',
  },
});
