import { Button } from "@react-navigation/elements";
import { Image } from "expo-image";
import { Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
          }}
        >
          Jogo Da Velha
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>Sim</TouchableOpacity>
        <TouchableOpacity>Sim</TouchableOpacity>
        <TouchableOpacity>Sim</TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity>Sim</TouchableOpacity>
        <TouchableOpacity>Sim</TouchableOpacity>
        <TouchableOpacity>Sim</TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <TouchableOpacity
          style={{
            flex: 1,
          }}
        >
          Sim
        </TouchableOpacity>
        <TouchableOpacity>Sim</TouchableOpacity>
        <TouchableOpacity>Sim</TouchableOpacity>
      </View>
    </View>
  );
}
