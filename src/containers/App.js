import { Route } from 'react-router'
import 'sass/App.css'
import homepage from 'pages/homepage'

function App() {
  return (
    <div className='App'>
     <Route path='/' component={homepage}/>
    </div>
  )
}

export default App
