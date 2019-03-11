/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Image,
  StatusBar,
  ImageBackground,
  TouchableNativeFeedback,
  ScrollView,
  TextInput

} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class Details extends Component {
    static navigationOptions = {
        header: null,
        };
        constructor(props) {
          super(props);
      };
  render() {
    const {params} = this.props.navigation.state;
    return (
    //  <Login/>
    <View style={{flex: 1,backgroundColor: '#000'}}>
    <StatusBar backgroundColor='#000F21' translucent={true} barStyle='light-content'/>
     <ImageBackground resizeMode={'cover'} style={{width: '100%', height: 400, paddingBottom: 10
      //  paddingLeft: 10, paddingRight: 10
        }}  source={require('../lionsHeart.jpg')}>
         <View style={{height: 25, width: '95%',alignSelf: 'center',
          marginTop: StatusBar.currentHeight+10,
          flexDirection: 'row', justifyContent: 'space-between'}}>
         <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('Films', 
                )}>
         <Image resizeMode={'contain'} source={require('../left.png')} style={{width: 22,height: 25}}/>
         </TouchableNativeFeedback>
         <Image resizeMode="contain" style={{width: 150, height: 34, }} source={require('../canvas.png')}/>
         <TouchableNativeFeedback onPress={() =>
                this.props.navigation.navigate('Home', 
                )}>
                <View style={{width: 22,height: 25, opacity: 0}}>
         <Image resizeMode={'contain'} source={require('../menu.png')} style={{flex: 1}}/></View>
         </TouchableNativeFeedback>
         </View>
         <ScrollView showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}></ScrollView>
         <View style={{flexDirection: 'column', marginLeft: 10}}>
         <Text style={{fontFamily: 'mont-bold', fontSize: 24, color: 'white', alignSelf: 'center'}}>
           Lion's Heart
         </Text>
         <Text style={{fontFamily: 'mont', fontSize: 15, color: 'white', alignSelf: 'center'}}>
          Drama | Suspense | Igbo
         </Text>
        
         </View>
        </ImageBackground>
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
        overScrollMode={'never'}>
        <View style={{width: '75%', flexDirection: 'row', height: 40, justifyContent: 'space-between',
         marginTop: 20, alignSelf: 'center'}}>
           <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: 30}}>
           <Text style={{fontSize: 32, fontFamily: 'mont-semi', color: '#F2BB66'}}>
            +
           </Text>
           <Text style={{color: 'grey', fontSize: 12, 
                     fontFamily: 'mont'}}>
            My List
           </Text>
           </View>
           <View style={{width: 85, height: 38, backgroundColor: '#F2BB66', borderRadius: 2, flexDirection: 'row',
           paddingLeft: 2, paddingRight: 2, alignItems: 'center', justifyContent: 'space-around'}}>
            <Image 
                          resizeMode="contain" style={{width: 15,height: 15,}}
                         source={require('../play.png')}/>
            <Text style={{color: 'white', fontSize: 14,
                     fontFamily: 'mont-semi'}}>PLAY</Text>
                     
           </View>
           <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', height: 30}}>
           <Image 
                          resizeMode="contain" style={{width: 22,height: 22,}}
                         source={require('../info.png')}/>
           <Text style={{color: 'grey', fontSize: 12, 
                     fontFamily: 'mont'}}>
            Info
           </Text>
           </View>
         </View>
        <View style={{flexDirection: 'column', height: 38, justifyContent: 'space-between',
        marginLeft: 10, marginTop: 20}}>
        <Text style={{fontSize: 17, fontFamily: 'mont-bold', color: '#F2BB66' }}>
         Storyline:
        </Text>
        <View style={{backgroundColor: '#F2BB66', width: 35, height: 3}}></View>
        </View>
        <Text style={{fontFamily: 'mont-light', fontSize: 14, color: 'white', marginTop: 18,
        marginLeft: 10,marginRight: 10}}>
        "LionsHeart is an insightful movie"
        </Text>
        <View style={{flexDirection: 'row', width: '80%', justifyContent: 'space-between', 
        alignSelf: 'center', marginTop: 15, alignItems: 'center',height: 50}}>
        <View style={{flexDirection: 'column', height: 50, justifyContent: 'space-between', 
        alignItems: 'center'}}>
        <Text style={{fontSize: 17, fontFamily: 'mont-bold', color: '#F2BB66', height: 45, }}>
         Length
        </Text>
        <Text style={{fontSize: 15, fontFamily: 'mont-light', color: 'white' }}>
         NA
        </Text>
        </View>
        <View style={{backgroundColor: '#6D7B8D', width: 3, height: 40, marginTop: 5}}></View>
        <View style={{flexDirection: 'column', height: 50, justifyContent: 'space-between',
        alignItems: 'center'}}>
        <Text style={{fontSize: 17, fontFamily: 'mont-bold', color: '#F2BB66', height: 45 }}>
         Language
        </Text>
        <Text style={{fontSize: 15, fontFamily: 'mont-light', color: 'white' }}>
        NA
        </Text>
        </View>
        <View style={{backgroundColor: '#6D7B8D', width: 3, height: 40, marginTop: 5, }}></View>
        <View style={{flexDirection: 'column', height: 50, justifyContent: 'space-between',
        alignItems: 'center'}}>
        <Text style={{fontSize: 17, fontFamily: 'mont-bold', color: '#F2BB66', height: 45 }}>
         Rating
        </Text>
        <Text style={{fontSize: 15, fontFamily: 'mont-light', color: 'white' }}>
        NA
        </Text>
        </View>
        </View>
        <View style={{flexDirection: 'column', height: 38, justifyContent: 'space-between',
        marginLeft: 10, marginTop: 30}}>
        <Text style={{fontSize: 17, fontFamily: 'mont-bold', color: '#F2BB66' }}>
         Cast:
        </Text>
        <View style={{backgroundColor: '#F2BB66', width: 35, height: 3}}></View>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} 
      contentContainerstyle={{flexGrow:1,
                        flexDirection: 'row',}} 
                                    keyboardShouldPersistTaps='always'
                                                       overScrollMode={'never'}
                                                         showsVerticalScrollIndicator={false}
                                                         automaticallyAdjustContentInsets={false}
                                                         directionalLockEnabled={true}
                                                         bounces={false}
                                                         scrollsToTop={false}
      >
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15, marginLeft: 10}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
          <View style={{width: 42, height: 42, borderRadius: 21, borderWidth: 2, 
          borderColor: 'white', marginRight: 20, marginTop: 15}}>
            <Image 
                          resizeMode="contain" style={{flex: 1,width: 42,height: 42,}}
                         source={require('../star.png')}/>
          </View>
      </ScrollView>
      </ScrollView>
      <View style={styles.navBar}>
          <TouchableNativeFeedback >
                            <View style={{height: 20, width: 22}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1, opacity: .8}}
                                    source={require('../home-2-xxl.png')}/>
                            </View> 
                            
                            </TouchableNativeFeedback>
                        <TouchableNativeFeedback >
                            <View style={{height: 20, width: 22, opacity: .5}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1, opacity: .8}}
                                    source={require('../search.png')}/>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={{height: 20, width: 22, opacity: .5}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1, opacity: .8}}
                                    source={require('../downloading-updates-xxl.png')}/>
                            </View>
                        </TouchableNativeFeedback>
                        <TouchableNativeFeedback>
                            <View style={{height: 20, width: 22, opacity: .5}}>
                                <Image
                                    resizeMode="contain" style={{alignSelf: 'center', flex: 1, }}
                                    source={require('../menu.png')}/>
                            </View>
                        </TouchableNativeFeedback>
          </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: 'black',
    flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingLeft: 28,
          paddingRight: 28,
          height: 50,
          width: '100%'
    },
  bottomButton:{
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  /*  position:'absolute',
    bottom: 0*/
},
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
