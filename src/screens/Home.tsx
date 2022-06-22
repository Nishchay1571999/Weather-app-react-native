import { View, Text, TextInput, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const [text, settext] = useState("");
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput
      style={{
        margin:10,
        fontSize:18,
      }}
        value={text}
        onChangeText={(val: React.SetStateAction<string>) => settext(val)}
        placeholder="Enter Country"
      />
        <Button title="Submit" onPress={()=>navigation.navigate("Detail",{text})}/>
    </SafeAreaView>
  );
};

export default Home;
