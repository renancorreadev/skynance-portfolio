import React from 'react';


type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
}


export const LanguageContext = React.createContext<LanguageContextType>({} as LanguageContextType);

export const LanguageProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [language, setLanguage] = React.useState<string>('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}