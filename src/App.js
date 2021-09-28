import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNav'
import Welcome from './components/Welcome'
import LatestRealease from './components/LatestRealese'
import MyFooter from './components/MyFooter'


function App() {
  // advanced stuff!
  // const myFunction = () => console.log('hello')
  return (
    <div>
      <MyNavbar /> 
      <Welcome />
      <LatestRealease />
      <MyFooter />
    </div>
  )
}

export default App
