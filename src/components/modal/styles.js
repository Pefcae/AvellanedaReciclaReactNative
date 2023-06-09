import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    paddingVertical: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalDetailContainer: {
    padddingVertical: 20,
  },
  modalDetailMessage: {
    fontSize: 14,
    color: '#212121',
    marginBottom: 30,

  },

  modalButtonContainer: {
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },
});
