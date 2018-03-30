import React from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Asset, AppLoading } from 'expo';

import HomeScreen from './src/HomeScreen'
import AYB from './src/ayb/aybLayout'
import InfoLayout from './src/InfoPages/infoPageLayout'



const FirstAidApp = StackNavigator({
  Home: { screen: HomeScreen },
  AYB: { screen: AYB},
  InfoLayout: {screen: InfoLayout},
});

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <FirstAidApp />
    )
  }

  async _cacheResourcesAsync() {
    const images = [
      require("./src/ayb/gifs/guvenlik.gif"),
      require("./src/ayb/gifs/bilinc.gif"),
      require("./src/ayb/gifs/sikan_giysi.gif"),
      require("./src/ayb/gifs/agiz.gif"),
      require("./src/ayb/gifs/nefes_kontrol.gif"),
      require("./src/ayb/gifs/basi_noktasi.gif"),
      require("./src/ayb/gifs/5cm_asagi.gif"),
      require("./src/ayb/gifs/nefes.gif"),
      require("./src/ayb/gifs/cpr.gif"),
      require("./src/ayb/gifs/sample.gif"),
      require("./src/ayb/gifs/kafa.gif"),
      require("./src/ayb/gifs/gogus.gif"),
      require("./src/ayb/gifs/omurga.gif"),
      require("./src/ayb/gifs/karin.gif"),
      require("./src/ayb/gifs/bacak.gif"),
      require("./src/ayb/gifs/kol.gif"),
      require("./src/ayb/gifs/it_cek.gif"),
      require("./src/ayb/gifs/ambulans.gif")
    ];
  
    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages)
  
  }
}







