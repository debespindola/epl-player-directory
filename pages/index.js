import PlayersList, { ALL_CLUBS_QUERY, ALL_COUNTRIES_QUERY } from '../components/PlayerList/playersList';
import Link from "next/link"

export default function IndexPage() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        EPL Players Directory
      </h1>
      <PlayersList />
    </div>
  )
}
