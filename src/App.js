import React, { Suspense, useState } from 'react'
import Router from './Router'
import { LanguageContext } from './LanguageContext'
import MainMenu from './components/MainMenu/MenuComponent'
import { rightSideMenu } from './Constants'

function App() {

  const defaultLanguage = rightSideMenu.find(language => language.id === 'gb')
  const [language, setLanguage] = useState(defaultLanguage)
  const [disableButtons, setDisableButtons] = useState(false)

  const onLanguageChange = (language) => {
    setLanguage(language)
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainMenu
        language={{ ...language }}
        disableButtons={disableButtons}
        onLanguageChange={onLanguageChange}
      />
      <LanguageContext.Provider value={{ language, setDisableButtons }}>
        <Router />
      </LanguageContext.Provider>
    </Suspense>
  )
}

export default App;
