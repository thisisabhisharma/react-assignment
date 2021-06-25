import React, { useContext, useEffect, useState } from "react"
import Context from "../store/context"

export default function Input() {
  //setting states
  const { state, actions } = useContext(Context)
  const [code, setCode] = useState("")
  const [isValidState, setIsValidState] = useState(false)

  //user input onChange function
  const handleChange = (e) => {
    setCode(e.target.value)
    actions({
      type: "setState",
      payload: { ...state, hexCode: "#" + e.target.value }
    })
  }

  //default onsubmit behavior
  const submitHandler = (e) => {
    e.preventDefault()
  }

  //setting validation function
  useEffect(() => {
    const validate = () => {
      var hex = "#" + code
      var reg = /^#(?:[0-9a-fA-F]{3}){1,2}$/i
      var result = hex.match(reg)
      // console.log(`hex`, hex)
      // console.log(`result`, result)
      if (result !== null) {
        setIsValidState(true)
      } else {
        setIsValidState(false)
      }
    }
    validate()
    // console.log(`isValidState`, isValidState)
  }, [isValidState, code])

  return (
    <div className="inputBox">
      <form onSubmit={submitHandler}>
        <label>Hax Code: </label>
        <input
          className={isValidState ? "valid" : "invalid"}
          value={code}
          onChange={handleChange}
        ></input>
        {!isValidState ? (
          <p style={{ color: "red" }}>Invalid hex code</p>
        ) : null}
      </form>
    </div>
  )
}
