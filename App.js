import { View, ImageBackground } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './App.styles';
import Input from './components/Input/Input';
import hotBackground from './assets/hot.png';
import coldBackground from './assets/cold.png';
import { useEffect, useState } from 'react';
import { DisplayTemperatutre } from './components/DisplayTemperature/DisplayTemperature';
import { ButtonConvert } from './components/ButtonConvert/ButtonConvert';
import { convertTemperature, getOppositeUnit, isFreezing } from './utils/temperature';

export default function App() {
  const [inputValue, setInputValue] = useState(0);
  const [currentUnit, setCurrentUnit] = useState("°C")
  const [background, setBackground] = useState(coldBackground);

  useEffect(() => {
    if (isFreezing(inputValue, currentUnit)) {
      setBackground(coldBackground);
    } else {
      setBackground(hotBackground);
    }
  }, [inputValue, currentUnit])

  const oppositeUnit = getOppositeUnit(currentUnit);
  const convertedTemperature = isNaN(inputValue) ? "" : convertTemperature(inputValue, oppositeUnit).toFixed(2);

  return (
    <ImageBackground style={styles.background} source={background}>
      <SafeAreaProvider>
        <SafeAreaView style={styles.root}>
          <View style={styles.workspace}>
            <DisplayTemperatutre 
              temperature={convertedTemperature}
              unit={oppositeUnit}
            />
            <Input
              defaultValue={"0"} 
              onInputChange={setInputValue}
              unit={currentUnit}
            />
            <ButtonConvert 
              onPress={() => setCurrentUnit(oppositeUnit)} 
              unit={currentUnit}
            />
          </View>
        </SafeAreaView> 
      </SafeAreaProvider>
    </ImageBackground>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
