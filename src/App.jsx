
import './assets/components/AppHeader.jsx'
import AppHeader from './assets/components/AppHeader.jsx'
import AppMain from './assets/components/AppMain.jsx'
import AppFooter from './assets/components/AppFooter.jsx'
import comics from "./assets/script/comics.js";

function App() {
  return (
    <>
     <AppHeader />
     <AppMain comics={comics}/>
     <AppFooter />
    </>
  )
}

export default App
