import React from 'react';
import { Text, View, TouchableOpacity, Share } from 'react-native';
import styles from './style';

export default function ResultIMC(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu imc hoje é: " + props.resultIMC,
        })
    }

    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.messagemResultIMC}</Text>
            <Text style={styles.numIMC}>{props.resultIMC}</Text>

            <View style={styles.boxButton}>
                <TouchableOpacity
                    style={styles.buttonShared}
                    onPress={onShare}
                >
                    <Text style={styles.textButtonShared}>Compartilhar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
