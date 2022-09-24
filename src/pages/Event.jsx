import moment from "moment";
import React from "react";
import { BsChevronRight, BsPencil } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoCalendarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import cake from "../assets/cake.png";

const Event = (props) => {
  const { event, setEditing } = props;

  const formatDate = (date) => {
    return moment(date).format("MMMM D, h:mm a");
  };
  return (
    <div className="md:py-24 md:my-0 sm:my-10 my-0  py-0 md:pb-40 pb-10 w-screen h-full md:h-screen md:flex-row flex-col-reverse event sm:px-[12%] gap-10 lg:px-[15%] bg-eventBg flex justify-between">
      <div className="sm:p-0 p-5">
        <h1 className="text-4xl flex items-center gap-6 font-extrabold">
          {event?.eventName}{" "}
          <Link to={"/create"}>
            <span
              onClick={() => {
                setEditing(true);
              }}
              className="text-sm w-8 h-8 rounded-full bg-white cursor-pointer flex items-center justify-center border border-slate-200/80"
            >
              <BsPencil />
            </span>
          </Link>
        </h1>
        <p className="mt-1 text-detailClr text-sm">
          Hosted by <span className="font-semibold">{event?.hostName}</span>
        </p>
        <div className="mt-10 details">
          <div className="box">
            <div className="con">
              <div className="icon-box">
                <IoCalendarOutline />
              </div>
              <div className="content">
                <h2>{formatDate(event?.startingAt)}</h2>
                <p>
                  to{" "}
                  <span className="font-bold">
                    {formatDate(event?.endingAt)}
                  </span>{" "}
                  UTC+6
                </p>
              </div>
            </div>
            <div className="icon">
              <BsChevronRight />
            </div>
          </div>
          <div className="box">
            <div className="con">
              <div className="icon-box">
                <HiOutlineLocationMarker />
              </div>
              <div className="content">
                <h2>Street name</h2>
                <p>{event?.location}</p>
              </div>
            </div>
            <div className="icon">
              <BsChevronRight />
            </div>
          </div>
        </div>
      </div>

      <img
        className="md:w-[400px] w-full object-cover h-[280px] sm:h-[400px]"
        src={event?.eventPhoto.value || cake}
        alt=""
      />
    </div>
  );
};

export default Event;
