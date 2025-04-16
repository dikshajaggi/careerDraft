import { BrowserRouter } from "react-router-dom"
import RouteContainer from "./RouteContainer"
import { MainContextProvider } from "./utils/MainContext"

function App() {
  return (
    <>
    <BrowserRouter>
      <MainContextProvider>
        <RouteContainer />
      </MainContextProvider>
    </BrowserRouter>
    </>
  )
}

export default App
