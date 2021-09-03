import { NewRoom } from './pages/NewRoom'
import { Home } from './pages/Home'

import { BrowserRouter, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/rooms/new'} component={NewRoom} />
    </BrowserRouter>
  )
}
export default App
