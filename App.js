import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import Video from 'react-native-video';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const vidurl = 'https://www.youtube.com/watch?v=mbSZ6rLMxzE';
  // const vidurl = 'rtsp://192.168.189.103:8554/stream';
  // const vidurl = 'https://www.w3schools.com/html/mov_bbb.mp4';
  // const vidurl = require('./storage/emulated/0/Video/video.mp4');
  const vidurlsrc = './media/vids/video.mp4';
  const vidurl = { uri: require(vidurl) }
/*  
  const videosrc = {
    vidurl: require('./media/vids/video.mp4');
  }
*/
  return (
    <Video source={ { vidurl.uri } }   // Can be a URL or a local file.
      /*ref={(ref) => {
        this.player = ref
      }}  */                                    // Store reference
      // onBuffer={this.onBuffer}                // Callback when remote video is buffering
      // onError={this.videoError}               // Callback when video cannot be loaded
      onError={(videoError) => console.log('video error incomming: ', videoError)}               // Callback when video cannot be loaded
      style={styles.backgroundVideo} />
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    // flex: 1,
    backgroundColor: 'lightgray',
    // width: 800,
    width: '100%',
    // height: 1200,
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

/*
<SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>

        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={{ alignItems: 'center', fontSize: 32 }}>
            <Text>PiStreamer</Text>
          </View>

        </View>

      </ScrollView>
    </SafeAreaView>
*/