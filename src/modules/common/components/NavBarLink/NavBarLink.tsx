import { NavLink, NavLinkProps } from "react-router-dom"

const NavBarLink = ({ to, children, ...rest }: NavLinkProps) => (
    <NavLink to={to} {...rest}>{children}</NavLink>
)

export default NavBarLink