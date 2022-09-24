import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Event from "./pages/Event";
import Landing from "./pages/Landing";

const App = () => {
  const [event, setEvent] = useState(null);
  const [editing, setEditing] = useState(false);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/create"
            element={
              <Create
                event={event}
                editing={editing}
                setEditing={setEditing}
                setEvent={setEvent}
              />
            }
          />
          <Route
            path="/event"
            element={<Event event={event} setEditing={setEditing} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
