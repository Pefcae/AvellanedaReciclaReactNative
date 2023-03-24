import { StyleSheet } from "react-native";

import { THEME } from '../../constants/theme';


export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: THEME.colors.secondary,
    borderWidth: 1,
  },
  containerActions: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
