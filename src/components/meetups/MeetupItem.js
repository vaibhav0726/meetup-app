import { useContext } from "react";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  // used to connect with createContext
  const favoriteCxt = useContext(FavouritesContext);

  const itemIsFavorite = favoriteCxt.itemIsFavorite(props.id);

  function toggleFavoriteStatusHander() {
    if(itemIsFavorite) {
      favoriteCxt.removeFavorite(props.id);
    }
    else{
      favoriteCxt.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address
      })
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        {/* everything between opening and closing of Card components will be 
        send as a prop */}
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHander}>{itemIsFavorite ? "Remove From Favorite" : "To Favorites"}</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
