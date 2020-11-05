import React, { Suspense, useEffect, useState } from 'react'
import Router from './Router'
import { LanguageContext } from './LanguageContext'
import MainMenu from './components/MainMenu/MenuComponent'
import { rightSideMenu } from './Constants'

function App() {

  const [language, setLanguage] = useState(rightSideMenu.find(language => language.id === 'gb'))
  const [disableButtons, setDisableButtons] = useState(false)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LanguageContext.Provider value={{ language, disableButtons, setDisableButtons, setLanguage }}>
        <MainMenu />
        <Router />
      </LanguageContext.Provider>
    </Suspense>
  )
}

export default App;
