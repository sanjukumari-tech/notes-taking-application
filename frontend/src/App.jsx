import React from 'react'
import Notes from './components/Notes'

const App = () => {

  const backgroundImageStyle = {
    backgroundImage: "url('/noteTking.jpg')", 
    backgroundSize: "cover", 
    backgroundPosition: "center", 
    backgroundRepeat: "no-repeat", 
    minHeight: "100vh", 
  }
  return (
    <div style={backgroundImageStyle}>
      <Notes/>
    </div>
  )
}

export default App