import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <img src='/public/shiv1.png' alt  ="mantra" id = "photo"/>
    </div>
    <div className="card">
       <button onClick={() => setCount((count) => count + 1)}>
        <h4>ॐ त्र्यम्बकं यजामहे सुगन्धिं पुष्टिवर्धनम् ।</h4>
        <h4>उर्वारुकमिव बन्धनान् मृत्योर्मुक्षीय मामृतात् ॥ </h4> 
        {count}
       </button>
    </div>     
    </>
  )
}

export default App
