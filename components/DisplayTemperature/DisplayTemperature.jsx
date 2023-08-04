
import { Text } from "react-native";
import { styles } from "./DisplayTemperature.styles";

export function DisplayTemperatutre({ temperature, unit }) {
    return (
        <Text style={styles.temperatureTxt}>
            {temperature} {unit}
        </Text>
    )
}