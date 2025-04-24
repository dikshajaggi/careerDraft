import { BrowserRouter } from "react-router-dom"
import RouteContainer from "./RouteContainer"
import { MainContextProvider } from "./utils/MainContext"
import { Provider } from "react-redux"
import store from "./redux/store"

function App() {

  return (
    <>
    <BrowserRouter>
      <MainContextProvider>
        <Provider store={store}>
        <RouteContainer />
        </Provider>
      </MainContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
