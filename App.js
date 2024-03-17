import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {  useFonts, Inter_400Regular,Inter_700Bold} from '@expo-google-fonts/inter';
import { useState } from 'react';


const RowView = ({ label, value }) => {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 8
    }}>
      <View>
        <Text
          style={{
            fontFamily: "Inter-Regular",
            color: "#303030",
            fontSize: 12,
            letterSpacing:2
          }}>
          {label}
        </Text>
      </View>
      <View>
        <Text style={{
            fontFamily: "Inter-Bold",
            color: "#303030",
            fontSize: 15,
            textTransform: "uppercase",
        }}>
          {value}
        </Text>
      </View>
    </View>
  )
}

export default function App() {
  const [showMore, setShowMore] =useState(false);
  let [fontsLoaded] = useFonts({
    "Inter-Bold": Inter_700Bold,
   "Inter-Regular": Inter_400Regular,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator/>;
  }

  return (
    <ImageBackground
      source={require("./assets/light-bg.png")}
      style={styles.container}>
      
      {/* parent view */}
      <View style={styles.parentView}>

        {/* upper view of the screen */}
        {!showMore && (
          <View style={styles.upperView}>
          <View style={styles.textView}>
            <Text style={styles.pText}>
              "The science of operations, as derived from Mathematics more especially, is a science itself, and has its own abstract truth and value"
            </Text>
            <Text style={styles.writer}> - Ada Lovelace</Text>
          </View>
            <Image source={require("./assets/refresh.png")}/>
          </View>
        )}
        

        {/* bottom portion of the screen */}
        <View style={styles.bottomView}>

          {/* GREETING */}
          <View style={styles.sunView}>
            <Image source={require("./assets/sun.png")} />
            <Text style={styles.sunText}>GOOD MORNING!</Text>
          </View>   
          
          {/* Time */}
          <View style={styles.timeView}>
            <Text style={styles.timeText}>
              <Text style={styles.bigText}>
                12:12
              </Text>
              <Text style={styles.bstText}>
                BST
              </Text>
            </Text>
          </View>
          {/* Location */}
        <View style={styles.addressView}>
          <Text style={styles.addressText}>In London, Uk </Text>
          </View>
          
          {/* Button */}
          <TouchableOpacity
            onPress={() => {
              setShowMore(!showMore);
            }}
            style={styles.firstButton}
          >
            <Text style={styles.buttonText}>{showMore?"LESS":"MORE"}</Text>
            <Image source={
              showMore
                ?require("./assets/arrow-up.png")
                :require("./assets/arrow-down.png")
            } />
          </TouchableOpacity>
        </View>
      </View>


      {/* EXPANDED VIEW */}
      {showMore && (<View style={styles.expandedView}>
            <RowView label={"CURRENT TIMEZONE"} value="Europe/ London" />
            <RowView label={"Day of the year"} value="295" />
            <RowView label={"Day of the week"} value="5" />
            <RowView label={"week number"} value="12" />
        </View>)}
        
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parentView: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 35,
    paddingHorizontal:26
  },
  upperView: {
    flexDirection:"row"
  },
  textView: {
    flex: 1,
  },
  pText: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    color: "#fff",
  },
  writer: {
    color: "#fff",
    fontFamily: "Inter-Bold",
    marginTop: 10,
  },
  bottomView: {
    marginBottom: 14,
  },
  sunView: {
    flexDirection: "row",
    alignItems: "center",
    gap:10
  },
  sunText: {
    color: "#fff",
    fontFamily: "Inter-Regular",
    letterSpacing:3
  },
  timeView: {
    marginTop: 10,
  },
  bigText: {
    fontFamily: "Inter-Bold",
    fontSize: 100,
    color: "#fff",
  },
  bstText: {
    fontFamily: "Inter-Regular",
    fontSize: 15,
    color: "#fff"
  },
  addressView: {
    marginTop: 15
  },
  addressText: {
    fontFamily: "Inter-Regular",
    color: "#fff",
    fontSize: 10,
    letterSpacing: 3,
    textTransform: "uppercase",
  },
  firstButton: {
    flexDirection: "row",
    height: 40,
    width: 115,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 5,
    marginTop:50
  },
  buttonText: {
    fontFamily: "Inter-Bold",
    fontSize: 12,
    letterSpacing: 3,
  },
  expandedView: {
    backgroundColor: "#fff",
    opacity: 0.8,
    paddingVertical: 48,
    paddingHorizontal: 26,
  }

});
