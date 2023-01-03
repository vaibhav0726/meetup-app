import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

// const DUMMY_DATA = [
//   {
//     id: "m1",
//     title: "This is a first meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
//   {
//     id: "m2",
//     title: "This is a second meetup",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
//     address: "Meetupstreet 5, 12345 Meetup City",
//     description:
//       "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
//   },
// ];

function AllMeetupPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // to prevent the infinite calling of the api
  useEffect(() => {
    setIsLoading(true);
    // getting the data whenever the page is loaded
    // by default it has get method
    fetch(
      "https://react-meetup-app-93c20-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        // used to read the data from the body
        // .json() is also a promise that will be return some promise
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          meetups.push(meetup);
        }

        // data send by response.json()
        // as data is loaded
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  // as taking data from the server and passing it to the meetups props we should have some JSX like loading circle which we can get using the useState hook
  return (
    <section>
      <h1>All Meetups</h1>
      {/* returning the array in JSX */}
      {/* {[<li>Item1</li>, <li>Item2</li>]} */}
      {/* <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul> */}
      {/* using meetup list component instead of using above map */}
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}

export default AllMeetupPage;
