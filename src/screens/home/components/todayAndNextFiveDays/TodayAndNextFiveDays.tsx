import Text from "@components/text/Text";
import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { View } from "react-native";
import ForecastDayCard from "../foreCastDayCard/ForeCastDayCard";

import { Ionicons } from "@expo/vector-icons";
import { theme } from "@styles/theme/theme";
const ListHeader = () => (
  <View
    style={{
      //   marginBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Text fontSize="md">Hoje</Text>
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
      <Text fontSize="xs" color="gray100">
        Próximos 5 dias
      </Text>
      <Ionicons
        name="md-chevron-forward"
        size={24}
        color={theme.colors.gray100}
      />
    </TouchableOpacity>
  </View>
);
const TodayAndNextFiveDays = () => {
  const renderItem = ({ item, index }) => <ForecastDayCard />;
  return (
    <View style={{ flex: 1 }}>
      <ListHeader />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 20 }}
        data={[1, 2, 3, 4]}
        renderItem={renderItem}
      />
    </View>
  );
};

export default TodayAndNextFiveDays;
