import React from "react"
import ReactDOM from "react-dom/client"

function ExampleComponenet() {
  return (
    <div>
      <h1>This is Our app!!!</h1>
      <p>The sky is blue and the grass is green</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.querySelector("#app"))
root.render(<ExampleComponenet />)

if (module.hot) {
  module.hot.accept()
}
