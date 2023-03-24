import { StyleSheet } from "react-native";

import { THEME } from '../../constants/theme';

export const styles = StyleSheet.create({
  container: {},
  preview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: THEME.colors.primary,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
