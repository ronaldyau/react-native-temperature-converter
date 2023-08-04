import { View, Text, TextInput } from "react-native";
import { styles } from "./Input.styles";

export default function Input({ defaultValue, onInputChange, unit }) {
    return (
        <View style={styles.root}>
            <TextInput 
                defaultValue={defaultValue}
                maxLength={4}
                onChangeText={(text) => onInputChange(text)}
                placeholder="Input your temperature"
                style={styles.input} />
            <Text style={styles.unit}>{unit}</Text>
        </View>
    )
}
