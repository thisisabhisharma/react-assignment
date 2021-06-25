import React, { useContext } from "react"
import Context from "../store/context"

export default function Output() {
  const { state } = useContext(Context)
  const code = state.hexCode

  return <div className="fillBox" style={{ backgroundColor: code }}></div>
}
