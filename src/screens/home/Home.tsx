import React, { useEffect } from "react";
import { View } from "react-native";

// import { Container } from './styles';

const Home: React.FC = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Test");
    }, 500);
  }, []);
  return <View />;
};

export default Home;
