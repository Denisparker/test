import Login from "scenes/Auth/components/Login"
import SignUp from "scenes/Auth/components/SignUp"
import {useState} from "react"

export default function Auth() {
  const [tab, setTab] = useState<"login" | "signup">()

  return (
    <div>
      {tab === "login" && <Login/>}
      {tab === "login" && <SignUp/>}
    </div>
  )
}
