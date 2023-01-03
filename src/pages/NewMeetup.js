import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

function NewMeetupPage() {
  // for getting the browser history
  const navigate = useNavigate();

  function addMeetupHandler(meetupData) {
    // here we will send the http request to the firebase server
    // fetch is built in javascript function
    // /meetups will create a collection or table of meetups in the firebase server and .json is required by the firebase server
    // by default fetch sends the get request
    fetch(
      "https://react-meetup-app-93c20-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        // converting the object into json format
        body: JSON.stringify(meetupData),
        headers: {
          // for making clear that we are sending the json data
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      // simply replace the existing page with another page
      navigate("/");
    });
  }

  return (
    <section>
      <h1>Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
