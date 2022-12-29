import { createContext, ReactNode, useState } from 'react';

type PreferencesContextDataProps = {
  currentLanguage: string;
  setCurrentLanguage: (action: string | ((prevState: string) => string)) => void;
  languageToLearn: string;
  setLanguageToLearn: (action: string | ((prevState: string) => string)) => void;
}

type PreferencesContextProviderProps = {
  children: ReactNode;
}

export const PreferencesContext = createContext<PreferencesContextDataProps>({} as PreferencesContextDataProps);

export function PreferencesProvider({ children }: PreferencesContextProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState('pt-BR');
  const [languageToLearn, setLanguageToLearn] = useState('en-US');

  return (
    <PreferencesContext.Provider value={{
      currentLanguage,
      setCurrentLanguage,
      languageToLearn,
      setLanguageToLearn
    }}>
      {children}
    </PreferencesContext.Provider>
  )
};