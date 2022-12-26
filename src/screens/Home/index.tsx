import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Header } from '@components/Header';

export function Home() {
  const [text, setText] = useState('');
  const [showAudios, setShowAudios] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [regognizedTerm, setRegognizedTerm] = useState('');

  useEffect(() => {
    function onSpeechResults(e) {
      setActiveSearch(false);
      setRegognizedTerm(e.value[0]);
    }

    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const _onPressSpeech = language => {
    Tts.setDefaultLanguage(language);
    Tts.stop();
    Tts.speak(text);
  };

  async function _startRecognizing() {
    setRegognizedTerm('');

    try {
      await Voice.start('en-US');
      setActiveSearch(true);
    } catch (e) {
      console.error(e);
    }
  }

  async function _stopRecognizing() {
    try {
      await Voice.stop();
      setActiveSearch(false);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header showBackButton />
      
      <Text style={styles.title}>Pronúncia Perfeita</Text>
      <Text style={styles.subtitle}>
        A sua mais nova ferramenta para melhorar a pronúncia.
      </Text>

      <View style={styles.inputGroup}>
        <TextInput
          style={styles.input}
          onChangeText={value => setText(value)}
          placeholder="Digite aqui o que deseja praticar"
          value={text}
        />
        <TouchableOpacity
          style={styles.buttonPlay}
          onPress={() => setShowAudios(true)}>
          {text.length ? (
            <Image
              style={styles.iconPlay}
              source={require('@assets/botao-play-active.png')}
            />
          ) : (
            <Image
              style={styles.iconPlay}
              source={require('@assets/botao-play-deactive.png')}
            />
          )}
        </TouchableOpacity>
      </View>

      {showAudios ? (
        <>
          <View style={styles.textContainer}>
            <Text style={styles.typedText}>Você deseja aprender "{text}":</Text>
            <TouchableOpacity style={styles.editContainer}>
              <Text style={styles.editText}>Editar</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.infoAudios}>Ouça as seguintes leituras:</Text>

          <View style={styles.audioContainer}>
            <Text>Inglês Britânico</Text>
            <TouchableOpacity onPress={() => _onPressSpeech('en-GB')}>
              <Image
                style={styles.iconPlay}
                source={require('@assets/botao-play-active.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.audioContainer}>
            <Text>Inglês Americano</Text>
            <TouchableOpacity onPress={() => _onPressSpeech('en-US')}>
              <Image
                style={styles.iconPlay}
                source={require('@assets/botao-play-active.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.yourTurn}>
            <Text style={styles.infoAudios}>Agora é com você:</Text>
            {activeSearch ? (
              <>
                <TouchableOpacity
                  style={styles.microphoneContainer}
                  onPress={e => _stopRecognizing(e)}>
                  <Image
                    style={styles.iconMicrophone}
                    source={require('@assets/microphone-deactive.png')}
                  />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
                style={styles.microphoneContainer}
                onPress={e => _startRecognizing(e)}>
                <Image
                  style={styles.iconMicrophone}
                  source={require('@assets/microphone.png')}
                />
              </TouchableOpacity>
            )}

            {regognizedTerm ? (
              <View>
                {regognizedTerm === text.toLowerCase().trim() ? (
                  <View style={styles.successContainer}>
                    <Text style={styles.successText}>
                      Legal! Você conseguiu reproduzir
                      <Text style={styles.successStrongText}> "{text}" </Text>
                      corretamente!
                    </Text>
                    <Text style={styles.successStrongText}>Parabéns!!!</Text>
                  </View>
                ) : (
                  <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>
                      Ops!!! Entendi
                      <Text style={styles.errorStrongText}>
                        {' '}
                        "{regognizedTerm}"{' '}
                      </Text>
                    </Text>
                    <Text style={styles.errorText}>
                      Por favor, clique no microfone acima para tentar
                      novamente.
                    </Text>
                  </View>
                )}
              </View>
            ) : (
              <View />
            )}
          </View>

          <View style={styles.result} />
        </>
      ) : (
        <View />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 32,
  },
  title: {
    fontFamily: 'Ubuntu Bold',
    fontSize: 22,
    color: '#5B618A',
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Ubuntu Bold',
    fontSize: 18,
    color: '#4D4D4D',
    marginBottom: 16,
  },
  inputGroup: {
    position: 'relative',
    marginBottom: 32,
  },
  input: {
    borderBottomColor: '#747474',
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingLeft: 8,
    fontFamily: 'Ubuntu Regular',
    fontSize: 14,
    color: '#747474',
  },
  buttonPlay: {
    position: 'absolute',
    right: 16,
    bottom: 8,
  },
  iconPlay: {
    width: 30,
    height: 30,
  },
  audioContainer: {
    borderWidth: 1,
    borderColor: '#747474',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    marginBottom: 8,
  },
  infoAudios: {
    fontFamily: 'Ubuntu Regular',
    fontSize: 14,
    color: '#4D4D4D',
    marginBottom: 16,
  },
  typedText: {
    fontFamily: 'Ubuntu Bold',
    fontSize: 14,
    color: '#4D4D4D',
    marginBottom: 16,
  },
  iconMicrophone: {
    width: 100,
    height: 100,
  },
  yourTurn: {
    marginTop: 22,
  },
  microphoneContainer: {
    alignItems: 'center',
  },
  repeatText: {
    fontFamily: 'Ubuntu Regular',
    fontSize: 14,
    color: '#4D4D4D',
    marginTop: 16,
  },
  successContainer: {
    marginTop: 16,
  },
  successText: {
    fontFamily: 'Ubuntu Regular',
    fontSize: 14,
    color: '#72B42D',
    marginBottom: 16,
  },
  successStrongText: {
    fontFamily: 'Ubuntu Bold',
    fontSize: 14,
    color: '#72B42D',
  },
  errorContainer: {
    marginTop: 16,
  },
  errorText: {
    fontFamily: 'Ubuntu Regular',
    fontSize: 14,
    color: '#D84138',
    marginBottom: 16,
  },
  errorStrongText: {
    fontFamily: 'Ubuntu Bold',
    fontSize: 14,
    color: '#D84138',
  },
  textContainer: {
    position: 'relative',
  },
  editContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  editText: {
    fontFamily: 'Ubuntu Medium',
    fontSize: 14,
    color: '#5B618A',
  },
});
