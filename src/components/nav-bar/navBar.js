import styles from "./NavBar.module.css";
import { navBarItems } from "./NavBarItems";
import { useNavigate, useLocation } from "react-router-dom";

function PageSelector(props) {
  const navigate = useNavigate();
  const location = useLocation();

  const isSelected = location.pathname === props.href;

  const className = isSelected
    ? `${styles.navBarLi} ${styles.navBarLiActive}`
    : `${styles.navBarLi}`;

  return (
    <li className={className} onClick={() => navigate(props.href)}>
      {props.children}
    </li>
  );
}

export function NavBar({ links }) {
  return (
    <nav className={styles.navBarContainer}>
      <ul className={styles.navBarUl}>
        {links.map((item) => {
          return (
            <PageSelector key={item.label} href={item.href}>
              {item.label}
            </PageSelector>
          );
        })}
      </ul>
    </nav>
  );
}

export function InfoNavBar() {
  return <NavBar links={navBarItems[1].links} />;
}

export function SectionNavBar() {
  return <NavBar links={navBarItems[0].links} />;
}
