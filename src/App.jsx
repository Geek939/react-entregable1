import QuoteBox from "./components/QuoteBox"
import quoteDB from "./db/quotes.json"
import colors from "./db/colors.js"
import { useState } from "react"


function App() {



  const arrayRandomElement = (array) => {
    const randomIndex = Math.floor(array.length*Math.random())
    return array[randomIndex]
  }
  
  
  const [quote, setQuote] = useState(arrayRandomElement(quoteDB))
  const [color, setColor] = useState(arrayRandomElement(colors))


  const getNewValues = () =>{
    const newQuote = arrayRandomElement(quoteDB)
    const newColor =arrayRandomElement(colors)
    setColor(newColor)
    setQuote(newQuote)

  }

  const backgroundObject = {
    backgroundColor: color
  }

  const colorObject = {
    color: color
  }


  return (
    <div className="App" style={backgroundObject}>
      <QuoteBox 
      quote = {quote} 
      getNewValues={getNewValues}
      backgroundObject={backgroundObject}
      colorObject={colorObject}
      />
    </div>
  )
}

export default App
