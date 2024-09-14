import { useEffect, useRef } from "react"
import HEADER_ITEMS from "../../../../constants/header"
import NavLink from "./components/NavLink/NavLink"
import * as styles from "./NavBar.module.scss"

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
                <NavLink
                    path={item.path}
                    displayName={item.displayName}
                    key={item.id}
                />
            ))}
        </nav>
    )
}

export default NavBar