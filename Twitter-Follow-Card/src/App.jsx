/* Entry App for main-jsx */
import { TwitterFollowCard } from "./TwitterFollowCard"

const users = [
    {
      "name": "Neus Bravo",
      "userName": "neusba24"
    },
    {
      "name": "Carlos Martínez",
      "userName": "carlitos_mtz"
    },
    {
      "name": "Sofía García",
      "userName": "sofia_g"
    },
    {
      "name": "Miguel Pérez",
      "userName": "mike_perez"
    },
    {
      "name": "Lucía Rodríguez",
      "userName": "lucia_rod"
    }
  ]

export function App() {      
    return (
        users.map(user => {
            const { userName, name } = user
            return (
                <TwitterFollowCard userName={userName} name={name}/>
            )
        }

    ))
}