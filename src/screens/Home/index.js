import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion } from 'react-native-maps';
import styles from "./style";
import Color from "../../Config/Color";
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';

import {
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Dimensions,
  Platform
} from "react-native";
import { Drawer, Icon, Col } from "native-base";
import Container from "../../Styles/Container/style";
import IconText from "../../components/Icon2Text/index";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import {connect} from "react-redux";
const io = require('socket.io-client');
import {tripAccept , tripReject , tripStart , tripComplete, 
  reciveTrip , goOnLINE ,goOffline , updateMyLocation , Complete, tripRate} from '../../actions/Home/HomeActions';
import GoOnline from '../../components/RequestComp/GoOnline';
import ConfiremRequest from '../../components/RequestComp/ConfiremRequest/ConfiremRequest';
import Payment from '../../components/RequestComp/Payment/index';
import Rate from '../../components/RequestComp/Rate/index';



 // const SOCKET_URL = 'https://nagleh.app';

var { height, width } = Dimensions.get('window');

 class index extends Component {
  constructor (props) {
    super(props);
    this.socket = io.connect('https://nagleh.app', {
     path: '/socket.io',
  });
    this.region = {
      latitude: 31.963158,
      longitude: 35.930359,
      latitudeDelta: 0.09922,
      longitudeDelta: 0.09921,
  }
  this.switchOnlineOfline = this.switchOnlineOfline.bind(this);
  this.dial = this.dial.bind(this);
  this.direction = this.direction.bind(this);
  this.start = this.start.bind(this);
  this.accept = this.accept.bind(this);
  this.complete = this.complete.bind(this);
  this.paymentCompleted = this.paymentCompleted.bind(this)
  }
  
  componentDidMount() {
    this._getLocationAsync();
    this.connect();
  }

  static getDerivedStateFromProps(nextProps, prevState) { 
  }

  //get current location
  _getLocationAsync = async () => {
    let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }
      let location = await Location.getCurrentPositionAsync({});
      if(location){
        let obj = {
          // lat: location.coords.latitude,
          //lng: location.coords.longitude
          lat: 31.963158,
      lng: 35.930359,
        }
        this.props.updateMyLocation(obj)
      }
}

  switchOnlineOfline() {
    if(!this.props.aliveState) {
      this.props.goOnline(this.props.myLocation) 
    } else {
      this.props.goOffline(this.props.myLocation)
    }
  }

  connect() {
    this.socket.on('online', function(data){ 
      console.log(data) 
    });
    this.socket.emit('join', "5fba69f22145261913529dd5"); //this.props.userId
    this.socket.on('show_notification', (val) => {
      if(!this.props.TripAccept) this.props.reciveTrip(val)
    })
  }

  accept() {
    let data ={
      requestId: this.props.RecivedTrip.requestId,
      obj :{
        "my_location": this.props.RecivedTrip.my_location[0],
        "passenger_location": this.props.RecivedTrip.passenger_location,
        "passenger_destination": this.props.RecivedTrip.passenger_destination
      }
    }
    this.props.tripAccept(data);
  }

  complete(){
    let data ={
      requestId: this.props.RecivedTrip.requestId,
      obj :{
        "my_location": this.props.RecivedTrip.my_location[0],
        "passenger_location": this.props.RecivedTrip.passenger_location,
        "passenger_destination": this.props.RecivedTrip.passenger_destination
      }
    }
    this.props.tripComplete(data);
  }

  start() {
    let data ={
      requestId: this.props.RecivedTrip.requestId,
      obj :{
        "my_location": this.props.RecivedTrip.my_location[0],
        "passenger_location": this.props.RecivedTrip.passenger_location,
        "passenger_destination": this.props.RecivedTrip.passenger_destination
      }
    }
    this.props.tripStart(data);
  }

  direction() {

  }

  dial() {

  }

  paymentCompleted() {
    debugger
    this.props.Complete()
  }

  rate(rate , body) {
    this.props.tripRate()
  }


  renderTripComp () {
    debugger
    switch(this.props.step) {
      case 1:
      case 2:
      case 3:
        return <ConfiremRequest  step={this.props.step} dial={this.dial} direction={this.direction} start={this.start} accept={this.accept}  complete={this.complete} info={this.props.RecivedTrip}/>
      case 4: 
         return <Payment  step={this.props.step} paymentCompleted={this.paymentCompleted} Total = {this.props.Total}/>
      case 5 :
        return <Rate  step={this.props.step} dial={this.paymentCompleted} Total = {this.props.Total}/>
      default: 
        return <GoOnline switch={this.switchOnlineOfline} data={this.props} />
    }
  }

  render() {
    let location = {
      latitude: this.props.wherelatitude,
      longitude: this.props.wherelongitude,
      latitudeDelta: 0.09922,
      longitudeDelta: 0.09921,
  }
    return (
      <Drawer
        ref={ref => {
          this.drawer = ref;
        }}
        //content={<SideBar navigation={this.props.navigation} />}
        onClose={() => this.drawer._root.close()}
      >
        <View style={Container.container}>
          <StatusBar barStyle="dark-content" />
          <MapView
             provider={PROVIDER_GOOGLE}
             showsUserLocation={true}
             followUserLocation
             loadingEnabled
             ref={ref => {
              this.mapRef = ref;
            }}
             showsMyLocationButton={true}
             region={this.props.wherelatitude ? location : this.region}
             style={{  flex: 6,
              width: width,
              justifyContent: 'center',
              alignItems: 'center',}}
          > 
          
          {this.props.RecivedTrip.passenger_location ? 
                <Marker
                    ref={marker => {
                      this.marker = marker;
                    }}
                    coordinate={{latitude: this.props.myLocation.lat, longitude: this.props.myLocation.lng}}
                    image={require('../../Image/picupicon.png')}
                    style={{width:400, height:400}}
                />
                :null
                }
                {this.props.RecivedTrip.passenger_location? 
                <Marker
                    ref={marker => {
                      this.marker = marker;
                    }}
                    coordinate={{latitude: this.props.RecivedTrip.passenger_location.lat, longitude: this.props.RecivedTrip.passenger_location.lng}}
                    image={require('../../Image/destination-icon.png')}
                    style={{width:400 , height:400}}
                />
                : null
                }
                { (this.props.RecivedTrip.passenger_location && this.props.RecivedTrip.passenger_destination) &&
                  <MapViewDirections
                      origin={{latitude: this.props.myLocation.lat , longitude: this.props.myLocation.lng}}
                      destination={{latitude: this.props.RecivedTrip.passenger_destination.lat, longitude: this.props.RecivedTrip.passenger_destination.lng}}
                      apikey={'AIzaSyDqnzeDBnNoa_5yDnZj5doqjnoim2YkLKE'}
                />
                }
          
          </MapView>
          <View
            style={{
              marginTop: 40,
              position: "absolute",
              flex: 1,
              marginLeft: 15,
              ...Platform.select({
                  ios: {
                   zIndex:9
                  }
                })
            }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
              }}
              onPress={() => this.drawer._root.open()}
            >
              <Image
                source={require("../../Image/menu.png")}
                style={{
                  width: 55,
                  height: 55
                }}
              />
            </TouchableOpacity>
          </View>
         {this.renderTripComp()}
        </View>
      </Drawer>
    );
  }
}
 //Drawer.defaultProps.styles.mainOverlay.elevation = 0;

const mapStateToActions = {
  goOnline : goOnLINE,
  goOffline : goOffline,
  updateMyLocation: updateMyLocation,
  reciveTrip: reciveTrip,
  tripAccept: tripAccept,
  tripReject: tripReject ,
  tripStart:tripStart,
  tripComplete : tripComplete,
  Complete: Complete,
  tripRate: tripRate
} 

const mapStateToProps = state => ({
  RecivedTrip: state.homeReducer.RecivedTrip,
    error: state.homeReducer.error,
    step: state.homeReducer.step,
    aliveState: state.homeReducer.aliveState,
    animation: state.homeReducer.animation,
    myLocation: state.homeReducer.myLocation,
    TripAccept: state.homeReducer.TripAccept,
    TripStart: state.homeReducer.TripStart,
    TripComplete: state.homeReducer.TripComplete,
    Total : state.homeReducer.Total,
    Completed : state.homeReducer.Completed,


   //userId : state.OTPReducer.token.data.profile?.__id
});

export default connect(mapStateToProps ,mapStateToActions)(index)
