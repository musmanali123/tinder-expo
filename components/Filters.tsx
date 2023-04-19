import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY } from "../assets/styles";
import { useNavigation } from "@react-navigation/native";

const Filters = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      onPress={() => { navigation.navigate('SearchProfile') }}
      style={styles.filters}>
      <Text style={styles.filtersText}>
        <Icon name="filter" size={13} color={DARK_GRAY} /> Filters
      </Text>
    </TouchableOpacity>
  )
};

export default Filters;
