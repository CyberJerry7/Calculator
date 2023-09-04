import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  codegenNativeCommands,
} from 'react-native';
const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('');
  const colors = {
    dark1: '#22252D',
    dark2: '#292B36',
    dark3: '#272B33',
    light1: '#FFF',
    light2: '#F1F1F1',
    light3: '#F7F7F7',
  };

  const Calculation = title => {
    if (title == 'C') {
      setResult('');
    } else if (title == 'DL') {
      setResult(result.substring(0, result.length - 1));
    } else if (title == '=') {
      const ans = Number(eval(result).toFixed(3)).toString();
      setResult(ans);
    } else {
      if (!(result.length > 12)) {
        setResult(result + title);
      } else console.warn('Can not insert more than 12 digits');
    }
  };

  const Buttonn = ({title, type}) => {
    return (
      <TouchableOpacity
        onPress={() => Calculation(title)}
        style={{
          padding: 10,
          borderRadius: 15,
          elevation: 4,
          backgroundColor: darkTheme ? colors.dark2 : '#CECECE',
          height: 70,
          width: 70,
          margin: 16,
        }}>
        <Text
          style={{
            fontSize: 40,
            color: 'black',
            textAlign: 'center',
            color: GetButtonColor(type),
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  const GetButtonColor = type => {
    if (type == 'top') {
      return '#35FBD6';
    } else if (type == 'right') {
      return '#EB6363';
    } else {
      return darkTheme ? colors.light1 : colors.dark1;
    }
  };

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        paddingVertical: 15,
        backgroundColor: darkTheme ? colors.dark1 : colors.light1,
        alignItems: 'center',
      }}>
      <Switch
        value={darkTheme}
        onValueChange={() => setDarkTheme(!darkTheme)}
        thumbColor={darkTheme ? colors.light1 : colors.dark1}
        trackColor={{true: colors.light2, false: '#7F7F7F'}}
      />
      <Text
        style={{
          fontSize: 15,
          fontWeight: 'bold',
          color: darkTheme ? colors.light2 : colors.dark2,
        }}>
        Change theme
      </Text>
      <Text
        style={{
          fontSize: 45,
          color: darkTheme ? colors.light2 : colors.dark2,
          width: '100%',
          textAlign: 'right',
          marginTop: 160,
          padding: 26,
        }}>
        {result}
      </Text>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          backgroundColor: darkTheme ? colors.dark3 : '#CECECE',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Buttonn title="C" type="top" />
        <Buttonn title="DL" type="top" />
        <Buttonn title="/" type="top" />
        <Buttonn title="%" type="top" />
        <Buttonn title="7" type="number" />
        <Buttonn title="8" type="number" />
        <Buttonn title="9" type="number" />
        <Buttonn title="*" type="right" />
        <Buttonn title="4" type="number" />
        <Buttonn title="5" type="number" />
        <Buttonn title="6" type="number" />
        <Buttonn title="-" type="right" />
        <Buttonn title="1" type="number" />
        <Buttonn title="2" type="number" />
        <Buttonn title="3" type="number" />
        <Buttonn title="+" type="right" />
        <Buttonn title="00" type="number" />
        <Buttonn title="0" type="number" />
        <Buttonn title="." type="number" />
        <Buttonn title="=" type="right" />
      </View>
    </View>
  );
};

export default App;
