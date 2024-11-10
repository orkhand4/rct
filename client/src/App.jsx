import React, {useRef} from 'react'

const App = () => {
  
  const x = useRef()

  const demo = () => {
    console.log(x.current);
    console.log(x.current.innerText);
  }

  return (
    <div>
      <button ref={x} onClick={demo}>goster</button>
    </div>
  )
}

export default App
