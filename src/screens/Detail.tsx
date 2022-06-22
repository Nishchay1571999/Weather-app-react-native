import { View, Text, Image, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { Data, Details } from "../Utilities/utilities";
import axios from "axios";
import Weather from "../components/Weather";


const Detail = ({ navigation, route }) => {
    
  const country: Data = route.params;
  const [capital, setCapital] = useState<string>();
  const [latitudecap, setLatitudeCap] = useState<number>();
  const [longitudecap, setLongitudeCap] = useState<number>();
  const [flagurl, setFlagUrl] = useState<string>();
  const[showweather,setShowWeather ]=useState<boolean>(false)

  useEffect(() => {
    getdata();
  }, []);

  const getdata: any = async () => {
    const res = await axios
      .get(`https://restcountries.com/v3.1/name/${country.text}`)
      .then((res) => {
        setCapital(res.data[0].capital);
        setLatitudeCap(res.data[0].capitalInfo.latlng[0]);
        setLongitudeCap(res.data[0].capitalInfo.latlng[1]);
        setFlagUrl(res.data[0].flags.png);
        console.log(res.data[0].flags.png);
      });
  };

  return (
    <View
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding:10,
      }}
    >
      <Text>Country:</Text>
      <Text style={{
        marginBottom:20,
        fontSize:28,
      }}>{country.text}</Text>
      <Text>Capital:</Text>
      <Text style={{
        marginBottom:20,
        fontSize:28,
      }}>{capital}</Text>
      <Text>Long:</Text>
      <Text style={{
        marginBottom:20,
        fontSize:28,
      }}>{longitudecap}</Text>

      <Text>Lat:</Text>
      <Text style={{
        marginBottom:20,
        fontSize:28,
      }}>{latitudecap}</Text>
      <Text>Flag:</Text>
      <Image
        source={{ uri: flagurl }}
        resizeMode="contain"
        style={{
          width: 100,
          height: 100,
        }}
      />

      <Button title="Weather" onPress={()=>setShowWeather(!showweather)}/>
      {
        showweather?<Weather city={capital}/>:null
      }
    </View>
  );
};

export default Detail;
