import { View, Text, Image,StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Weatherfor, apikey } from "../Utilities/utilities";

// http://api.weatherstack.com/current?
// access_key={{YOUR_ACCESS_KEY}}&query ={{ENTER CAPITAL CITY HERE}}

const Weather = (props: Weatherfor) => {
  const [temperature, setTemperature] = useState<number>();
  const [windspeed, setWindSpeed] = useState<number>();
  const [percip,setPercip] = useState<number>()
  const [weathericon, setWeatherIcon] = useState<string>();
  const [ loading,setLoading] = useState<boolean>(true)
  useEffect(() => {
    getdata();
  }, []);
  const getdata: any = async () => {
    await axios
      .get(
        `http://api.weatherstack.com/current?access_key=${apikey}&query=${props.city}`
      )
      .then((res) => {
        setTemperature(res.data.current.temperature);
        setWeatherIcon(res.data.current.weather_icons[0]);
        setWindSpeed(res.data.current.wind_speed);
        setPercip(res.data.current.precip);
        setLoading(false);
      });
  };
  if (loading) {
    return <View style={styles.loading}><Text>Loading...</Text></View>;
  }
  return (
    <View style={{
        flexDirection:"column",
        alignItems:"center"
    }}>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 20 }}>Temerature:</Text>
        <Text style={{ fontSize: 20 }}>{temperature}</Text>
      </View>
      <Image
        source={{ uri: weathericon }}
        resizeMode="contain"
        style={{
          width: 50,
          height: 50,
        }}
      />
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 20 }}>windSpeed:</Text>
        <Text style={{ fontSize: 20 }}>{windspeed}</Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
        }}
      >
        <Text style={{ fontSize: 20 }}>Percipitation:</Text>
        <Text style={{ fontSize: 20 }}>{percip}</Text>
      </View>
    </View>
  );
};

export default Weather;
const styles = StyleSheet.create({
  loading:{
    alignItems:'center',
    justifyContent:'center',
    marginTop:150,
  }
})
