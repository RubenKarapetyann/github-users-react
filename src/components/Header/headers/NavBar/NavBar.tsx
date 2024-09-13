import HEADER_ITEMS from "../../../../constants/header"
import NavLink from "./components/NavLink/NavLink"
import * as styles from "./NavBar.module.scss"

const NavBar = () => (
    <nav className={styles.navBar}>
        {HEADER_ITEMS.map(item => (
            <NavLink
                path={item.path}
                displayName={item.displayName}
            />
        ))}
    </nav>
)

export default NavBar