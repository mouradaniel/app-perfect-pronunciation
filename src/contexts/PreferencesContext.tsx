import { createContext, ReactNode, useState } from 'react';

type PreferencesContextProviderProps = {
  children: ReactNode;
}

export const PreferencesContext = createContext({});

export function PreferencesProvider({ children }: PreferencesContextProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState('en-US');
  const [languageToLearn, setLanguageToLearn] = useState('pt-BR');

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