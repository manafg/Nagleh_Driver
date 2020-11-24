import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
  Platform,
  ScrollView
} from "react-native";
import Color from "../../../Config/Color";
import Header from "../../Header/index";
import Modal from "react-native-modal";
import Button from "../../Button/index";
import { Rating } from "react-native-ratings";

import style from "./style";
let width = Dimensions.get("window").width;
let height = Dimensions.get("window").height;
export default class componentName extends Component {
  constructor() {
    super();
    this.state = {
      tabsFlag: 1,
      text: ''
    };
    //this.ratingCompleted = this.ratingCompleted.bind(this)
  }
  onChangeText(text) {
    this.setState({
      text :text
    })
  }
  ratingCompleted(i) {
    debugger
    var that = this;
    that.setState({
      tabsFlag: i
    });
    console.log(i);
  }

  render() {
    return (
      <Modal style={{width: width -40 , height, flex:1}} isVisible={true}>
      <View style={{ backgroundColor: Color.black, flex: 1 }}>
        <Header
          title="Rating"
          icon="ios-close-circle-outline"
          onPress={() => this.props.navigation.navigate("BookingReq")}
         // style={{marginBottom:50}}
        />
        <View
          style={{
            backgroundColor: Color.white,
           // height: height / 1.3,
            // marginHorizontal: 10,
            // marginBottom:20,
            // marginTOp:30,
            flex:1,
            marginHorizontal:width/30,
            marginTop:height/15,
            marginBottom:height/35,
            borderRadius: 10,
            borderColor: Color.steel,
            borderWidth: 2,
            shadowOpacity: "0.3",
            elevation: 3,
            
          }}
        >
        <ScrollView style={{flex:1}}>
          <View style={{ marginTop: height / 20, justifyContent: "center" }}>
            <Text style={[style.text,{marginTop:20}]}>Sam Lincan</Text>
            <Text style={[style.text, { fontSize: 12, color: Color.gray }]}>
              123:INO
            </Text>
            <Text style={[style.text, { fontSize: 16, marginVertical: 20 }]}>
              How is your trip?
            </Text>
            <Text
              style={[
                style.text,
                { fontSize: 14, color: Color.gray, marginHorizontal: 50 }
              ]}
            >
              Your feedback will help improve driving experience
            </Text>

            <Rating
             onFinishRating={this.ratingCompleted}
             style={{ paddingVertical: 10 }}
            />

            <View style={{ margin: 15 }}>
              <TextInput
                onChange={(text)=> this.onChangeText(text)}
                placeholder="Additional Comments…"
                style={style.input}
                multiline={true}
              />
            </View>
           
          </View>
         
         
          </ScrollView>
          <View style={{ justifyContent: "flex-end"}}>
          <Button
              Text="Submit Review"
              viewStyle={{ backgroundColor: Color.purple, }}
              onPress={()=>this.props.navigation.navigate("Tips")}
            />
            </View>
        </View>
        
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            marginTop: height/ 7,
            marginHorizontal: 100,
            alignContent: "center",
            elevation: 4
          }}
        >
          <View style={[style.imageProfileView]}>
            <Image
              source={require("../../../Image/Pic.png")}
              style={style.imageProfile}
            />
          </View>
        </View>
      </View>
      </Modal>
    );
  }
}
