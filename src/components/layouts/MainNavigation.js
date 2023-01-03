import { useContext } from "react";

import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import FavouritesContext from "../../store/favorites-context";

function MainNavigation() {
  const favoriteCxt = useContext(FavouritesContext);

  return (
    // scoping the style with this method
    // other css file with the same name header will not affect its styling
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{favoriteCxt.totalFavorite}</span>
            </Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
