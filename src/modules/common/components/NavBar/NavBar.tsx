import { useEffect, useRef } from "react"
import * as styles from "./NavBar.module.scss"
import HEADER_ITEMS from "../../constants/header"
import NavBarLink from "../NavBarLink/NavBarLink"

const NavBar = () => {
    const navRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const onScroll = (event: Event) => {
                const nav = navRef.current

            if (window.scrollY > 30) {                
                nav?.classList.add(styles.slideDownAnimation)
            } else {
                nav?.classList.remove(styles.slideDownAnimation)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    return (
        <nav className={styles.navBar} ref={navRef}>
            {HEADER_ITEMS.map(item => (
                <NavBarLink
                    to={item.path}
                    key={item.id}
                >{item.displayName}</NavBarLink>
            ))}
        </nav>
    )
}

export default NavBar