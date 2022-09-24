import moment from "moment/moment";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import rocket from "../assets/rocket.png";

const Create = (props) => {
  const { event, setEvent, editing, setEditing } = props;
  const navigate = useNavigate();
  const [data, setData] = useState(
    editing
      ? event
      : {
          eventName: "",
          hostName: "",
          startingAt: "",
          editingAt: "",
          location: "",
          eventPhoto: "",
        }
  );

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    setEditing(false);
    navigate("/event");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvent(data);
    navigate("/event");
  };
  return (
    <div className="create py-12 px-[10%] flex">
      <div>
        <h1 className="text-4xl font-extrabold">
          {editing ? "Edit your event." : "Create Your Event Now!"}
        </h1>
        <p className="mt-2 text-sm text-secondary w-8/12">
          {editing ? (
            "It's really easy to edit your event if you wish! :)"
          ) : (
            <>
              <span className="font-semibold">5 million+</span> users are using
              it to share events with their friends on any platform!
            </>
          )}
        </p>
        {/* I might do the form using a library for advanced validation in real project.
         But, for the limitation of time. I'm using it with raw form  */}
        <form
          className="mt-7 w-full flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <label>
            <p>Event name</p>
            <input
              required
              name="eventName"
              type="text"
              onChange={handleChange}
              value={data.eventName}
              placeholder="Enter event name"
            />
          </label>
          <label>
            <p>Host name</p>
            <input
              required
              name="hostName"
              onChange={handleChange}
              value={data.hostName}
              type="text"
              placeholder="Enter host name"
            />
          </label>
          <div className="flex sm:flex-row flex-col date-time items-center gap-6">
            <label>
              <p>Starting at</p>
              <input
                onChange={handleChange}
                name="startingAt"
                value={data.startingAt}
                required
                type="datetime-local"
              />
            </label>
            <label>
              <p>End at</p>
              <input
                onChange={handleChange}
                value={data.endingAt}
                name="endingAt"
                required
                type="datetime-local"
              />
            </label>
          </div>
          <label>
            <p>Location</p>
            <input
              name="location"
              required
              onChange={handleChange}
              value={data.location}
              type="text"
              placeholder="Location"
            />
          </label>
          {/* I'm not sure what is your expectation for photo. File upload or via url? 
          I'm doing this with url */}
          <label>
            <p>Event photo</p>
            <input
              onChange={handleChange}
              value={data.eventPhoto}
              name="eventPhoto"
              type="text"
              placeholder="Event photo"
            />
          </label>
          <div className="flex items-center gap-5">
            <button className={`${editing ? "w-1/2" : "w-[290px]"} mt-6`}>
              🚀 {editing ? "Save" : "Next"}
            </button>
            {editing && (
              <button onClick={handleCancel} className="w-1/2">
                ❌ Cancel
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="w-1/2 hidden lg:flex items-center flex-col ml-auto justify-center">
        <img src={rocket} className={"w-[900px] scale-105 rotate-45"} alt="" />
        <p className="text-2xl font-bold">Everyone using it Worldwide!</p>
      </div>
    </div>
  );
};

export default Create;
