import Dashboard from "./components/Dashboard"
import NavigationBar from "./components/NavigationBar"


function App() {

  return (
    <>
      <div className='flex'>
        
        <NavigationBar/>

        <main><Dashboard/></main>
       </div>
    </>
  )
}

export default App
