import AllMeetupPage from "./pages/AllMeetups";
import FavouritePage from "./pages/Favourites";
import NewMeetupPage from "./pages/NewMeetup";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupPage />} />
        <Route path="/favorites" element={<FavouritePage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
