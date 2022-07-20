import Header from './Components/header/Header'
import Banner from './Components/banner/Banner'
import Tipbar from './Components/tipbar/Tipbar'
import Marca from './Components/marcas/Marca'
import Footer from './Components/footer/Footer'
import { Newsletter } from './Components/newsletter/Newsletter'
import { Banner02 } from './Components/banner02/banner'

function App() {

  return (
    <div className="App">
      <Header />
      <Banner />
      <Tipbar/>
      <Marca/>
      <Banner02/>
      <Newsletter/>
      <Footer/>

    </div>
  )
}

export default App
