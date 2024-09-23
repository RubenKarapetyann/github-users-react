import { NavLink as Link } from "react-router-dom"
import { INavLinkProps } from "../../types/header"

// TODO remove div
// add inteface of of react-router-doms NavLiknk
// Also use here children

const NavLink = ({ path, displayName, ...rest }: INavLinkProps) => (
    <div>
        <Link to={path}>{displayName}</Link>
    </div>
)

export default NavLink