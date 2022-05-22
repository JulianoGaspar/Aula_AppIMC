import React from 'react';
import {
    TextInput, Text, View,
    TouchableOpacity, Vibration, FlatList
} from 'react-native';
import styles from './style';
import { useState } from 'react';
import ResultIMC from '../ResultIMC';

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState('Preencha o peso e a altura!')
    const [imc, setImc] = useState(null)
    const [errorMessageHeight, setErrorMessageHeight] = useState(null)
    const [errorMessageWeight, setErrorMessageWeight] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        // Tratando se digita com vírgula - troca (,) por (.)
        let tempHeight = height.replace(',', '.')
        let tempWeight = weight.replace(',', '.')
        let tempIMC = (tempWeight / (tempHeight * tempHeight)).toFixed(2)
        setImc(tempIMC)
        console.warn('imc= ' + tempIMC + ' height=' + tempHeight + ' weight=' + tempWeight)
        setHeight(null)
        setWeight(null)

        // ListView foi substituido pelo FlatList no React Native, mais eficiente
        // Carrega só os itens que cabem na tela, cria um scroll automático, 
        // FlatList exige passar um ID único, no exemplo pegar a data em milisegundos
        // Adicionar no array um item com um JSON contendo id e imc
        let tempId = new Date().getTime()
        setImcList((arr) => [...arr, { id: tempId, imc: tempIMC }])
    }

    function messageErro() {
        if (height == null) {
            setErrorMessageHeight('campo obrigatório*')
            Vibration.vibrate()
        } else {
            setErrorMessageHeight(null)
        }
        if (weight == null) {
            setErrorMessageWeight('campo obrigatório*')
            Vibration.vibrate()
        } else {
            setErrorMessageWeight(null)
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setMessageIMC('Seu imc é igual a:')
            setErrorMessageHeight(null)
            setErrorMessageWeight(null)
        } else {
            messageErro()
            setImc(null)
            setMessageIMC('Preencha o peso e a altura!')
        }
    }

    function mostrarFormulario() {
        setHeight(null)
        setWeight(null)
        setErrorMessageHeight(null)
        setErrorMessageWeight(null)
        setImc(null)
    }

    return (
        <View style={styles.formContext}>
            {imc == null ?
                <View style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessageHeight}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setHeight}
                        placeholder="Ex: 1.75 (metros)"
                        keyboardType='numeric'
                    ></TextInput>
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessageWeight}</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setWeight}
                        placeholder="Ex: 78 (kilos)"
                        keyboardType='numeric'
                    ></TextInput>
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => validationImc()}
                    >
                        <Text style={styles.textButtonCalculator}>Calcular</Text>
                    </TouchableOpacity>
                </View>

                :
                <View style={styles.Result}>
                    <ResultIMC resultIMC={imc} messagemResultIMC={messageIMC}></ResultIMC>
                    <TouchableOpacity
                        style={styles.buttonCalculator}
                        onPress={() => mostrarFormulario()}
                    >
                        <Text style={styles.textButtonCalculator}>Calcular novamente</Text>
                    </TouchableOpacity>
                </View>
            }

            <FlatList
                style={styles.FlatList}
                data={imcList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <Text style={styles.FlatListItem}>IMC: {item.imc}</Text>
                    )
                }}

            ></FlatList>

        </View>
    );
}