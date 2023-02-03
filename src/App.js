import React from "react";
import { Card } from "./components/Card";
import { contacts } from "./contacts";

function App() {
  return (
    <div className="App">
      <h1 className="heading">My Contacts</h1>
      {contacts.map((contact, i) => {
        return (
          <Card
            key={i}
            name={contact.name}
            img={contact.imgURL}
            phone={contact.phone}
            email={contact.email}
          />
        );
      })}
    </div>
  );
}

export default App;
