import React from 'react';
import { Animated, Easing , View, TouchableOpacity , Text} from 'react-native';
import LottieView from 'lottie-react-native';
import SelectDestinationStyle from './SelectDestinationStyle'

export default class BasicExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    
  }

  onlineSwitch() {
    if(this.props.data.aliveState) {
      Animated.timing(this.state.progress, {
        toValue: .0,
        duration: 1500,
        easing: Easing.linear,
      }).start();
      this.props.switch()
    } else {
      Animated.timing(this.state.progress, {
        toValue: .3,
        duration: 1500,
        easing: Easing.linear,
      }).start();
      this.props.switch()
    }
  }

  render() {
    return (
      <View style={SelectDestinationStyle.container}>
        <View style={SelectDestinationStyle.subContainerView}>
          <View style={{ margin: 30 , textAlign:'center'}}>
            <Text style={{ margin: 10 , marginBottom:30, fontSize:20, textAlign:'center'}} > {this.props.data.aliveState ? 'You are online' :  'You are offline , Tab  to go online'} </Text>
            <TouchableOpacity onPress={() => {this.onlineSwitch()}}>
              <LottieView
                progress={this.state.progress}
                style={{ justifyContent: 'center', marginLeft: 35, marginRight: 0, height: 150, width: 200 }} source={require('../../Image/switchOnline.json')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      );
  }
}


