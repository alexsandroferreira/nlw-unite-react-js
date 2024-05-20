import nlwUniteLogo from '../assets/nlw-logo.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteLogo} alt="" />

      <nav className="flex items-center gap-5">
        <NavLink>Eventos</NavLink>
        <NavLink>Paticipantes</NavLink>
      </nav>
    </div>
  )
}
