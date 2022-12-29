import React, { useContext, useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Tts from 'react-native-tts';
import Voice from '@react-native-community/voice';

import { PreferencesContext } from '@contexts/PreferencesContext';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { CardListen } from '@components/CardListen';
import { IconButton } from '@components/IconButton';
import images from '../../utils/images';

import { 
  Container,
  Content
} from './styles'

export function Home() {
  const [text, setText] = useState('');
  const [showAudios, setShowAudios] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [regognizedTerm, setRegognizedTerm] = useState('');

  const { languageToLearn } = useContext(PreferencesContext);

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

  function listenPronunciation(language: string) {
    Tts.setDefaultLanguage(language);
    Tts.stop();
    Tts.speak(text);
  };

  async function startRecognizing() {
    setRegognizedTerm('');

    try {
      await Voice.start(languageToLearn);
      setActiveSearch(true);
    } catch (e) {
      console.error(e);
    }
  }

  async function stopRecognizing() {
    try {
      await Voice.stop();
      setActiveSearch(false);
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Container>
      <Header showBackButton />
      
      <Content>
        <Text style={styles.title}>Pronúncia Perfeita</Text>
        <Text style={styles.subtitle}>
          A sua mais nova ferramenta para melhorar a pronúncia.
        </Text>

        <View style={styles.inputGroup}>
          <Input
            onChangeText={value => setText(value)}
            placeholder="Digite aqui o que deseja praticar"
            value={text}
          />

          <IconButton
            onPress={() => setShowAudios(true)}
            image={text.length ? images.play : images.play_deactive}
          />
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

            <CardListen 
              title="Inglês Britânico"
              touchableAction={() => listenPronunciation('en-GB')}
              image={images.play}
            />

            <CardListen 
              title="Inglês Americano"
              touchableAction={() => listenPronunciation('en-US')}
              image={images.play}
            />

            <View style={styles.yourTurn}>
              <Text style={styles.infoAudios}>Agora é com você:</Text>
              {activeSearch ? (
                <>
                  <TouchableOpacity
                    style={styles.microphoneContainer}
                    onPress={ stopRecognizing }>
                    <Image
                      style={styles.iconMicrophone}
                      source={require('@assets/microphone-deactive.png')}
                    />
                  </TouchableOpacity>
                </>
              ) : (
                <TouchableOpacity
                  style={styles.microphoneContainer}
                  onPress={ startRecognizing }>
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
      </Content>
    </Container>
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
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  iconPlay: {
    width: 30,
    height: 30,
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
  },
  editContainer: {
  },
  editText: {
    fontFamily: 'Ubuntu Medium',
    fontSize: 14,
    color: '#5B618A',
  },
});
