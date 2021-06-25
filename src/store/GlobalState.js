import { useState } from "react"

//setting global states
const useGlobalState = () => {
  const [state, setState] = useState({
    hexCode: "",
    isvalid: false
  })

  const actions = (action) => {
    const { type, payload } = action
    switch (type) {
      case "setState":
        return setState(payload)
      default:
        return state
    }
  }
  return { state, actions }
}

export default useGlobalState
