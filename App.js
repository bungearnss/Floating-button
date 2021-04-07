import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import FloatingButton from "./FloatingButton";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ASPECT_RATIO = width / height;
const LATITUDE = 13.736717;
const LONGITUDE = 100.523186;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
        showsUserLocation={true}
        showsBuildings={true}
        showsCompass={true}
        scrollEnabled={true}
        showsIndoors={true}
        showsMyLocationButton={true}
        loadingEnabled={true}
      />
      <FloatingButton style={{ bottom: 100, left: 50 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    height: height,
    width: width,
  },
});
