import { useContext } from "react";
import FavouritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavouritePage() {
  const favoriteCxt = useContext(FavouritesContext);

  let content;

  if (favoriteCxt.totalFavorite === 0) {
    content = <p>You got no favorites yet. Try to add some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCxt.favorites} />;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavouritePage;
