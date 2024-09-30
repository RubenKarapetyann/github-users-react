import { useEffect, useRef } from "react"
import * as styles from "./NavBar.module.scss"
import { NavLink } from "react-router-dom"

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
            <NavLink to="/">
                HOME
            </NavLink>
            <NavLink to="/favourite">
                FAVOURITE
            </NavLink>
        </nav>
    )
}

export default NavBar