import { NavLinkProps } from "../../../../../../types/components/header"
import { NavLink as Link } from "react-router-dom"

const NavLink = ({ path, displayName }: NavLinkProps) => (
    <div>
        <Link to={path}>{displayName}</Link>
    </div>
)

export default NavLink