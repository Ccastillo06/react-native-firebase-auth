import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  FormContainer: {
    padding: 8,
  },
  FormTitleText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  InputField: {
    marginBottom: 8,
  },
  InputLabel: {
    marginBottom: 8,
  },
  InputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 16,
  },
  ErrorMessage: {
    color: 'red',
    textAlign: 'center',
    maxWidth: '90%',
  },
  ChangeButtonContainer: {
    fontSize: 14,
  },
  SubmitButtonContainer: {
    fontSize: 14,
    backgroundColor: '#4D8FAC',
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
