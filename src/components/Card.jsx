import { Link } from "react-router-dom";

export default function Card({ event }) {
  function dateConvertToIST(date) {
    return new Date(date).toLocaleString('en-IN');
  }
  return (
    <>
      <div className="col-md-4" key={event._id}>
        <div className="card p-3 mb-3">
          <div className="image-container">
            <Link to={`/CardDetail/${event._id}`}>
              <img
                src={event.eventImages}
                className="card-img-top"
                alt="eventImage"
              />
            </Link>
            <div className=" badge bg-info text-light fw-medium text-center px-3 rounded-2 rounded-top-0">
              {event.eventType}
            </div>
          </div>
          <div className="card-body">
            <h4 className="card-title">{event.eventTitle}</h4>
            <p className="card-text">
              {dateConvertToIST(event.eventStartTime)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
