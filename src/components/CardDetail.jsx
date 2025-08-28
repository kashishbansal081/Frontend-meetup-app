import useFetch from "../useFetch";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { FaRegClock, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";

export default function CardDetail() {
  const { cardId } = useParams();
  const { data, loading, error } = useFetch(
    `https://backend-meetup-manager.vercel.app/events/${cardId}`
  );

  function dateConvertToIST(date) {
    return new Date(date).toLocaleString("en-IN");
  }
  // console.log(data);

  if (data) {
    return (
      <>
        <Navbar />
        <div className="container">
          <hr className="mt-0" />

          <div className="row justify-content-center">
            {/* divided code into two parts  */}

            <div className="col-md-8 mx-auto">
              <section id="detailSection" className="me-5">
                <h1 className="mb-2">{data.eventTitle}</h1>
                <p className="m-0">Hosted By:</p>
                <h6 className="mb-3 p-0">{data.hostedBy}</h6>
                <img
                  src={data.eventImages}
                  alt="eventImgae"
                  className="img-fluid mb-2"
                />
                <h2>Details:</h2>
                <p>{data.eventDescription}</p>
                <div>
                  <h3>Additonal Information:</h3>
                  <p className="mb-1">
                    <strong>Dress Code: </strong>
                    {data.eventDressCode}
                  </p>
                  <p>
                    <strong>Age Restriction: </strong>
                    {data.eventAgeRestriction}
                  </p>
                </div>
                <h4>Event Tags:</h4>
                {data.eventTags?.map((tag) => {
                  return (
                    <span className="badge bg-danger me-2 mb-2 px-3 py-2 fw-medium">
                      {tag}
                    </span>
                  );
                })}
              </section>
            </div>

            {/* Right Hand Size Section */}
            <div className="col-md-4  ">
              <section className="priceSection mx-auto ">
                <div className="bg-white border rounded p-3">
                  <p className="mb-2">
                    <FaRegClock size={20} color="black" className="me-1" />
                    {dateConvertToIST(data.eventStartTime)} to{" "}
                    {dateConvertToIST(data.eventEndTime)}
                  </p>
                  <p className="mb-2">
                    {" "}
                    <FaMapMarkerAlt className="me-1" />
                    {data.eventLocation.venue}, {data.eventLocation.address},{" "}
                    {data.eventLocation.city}{" "}
                  </p>
                  <p>
                    <FaDollarSign className="me-1" />
                    {data.eventPrice}
                  </p>
                </div>
                <div className="speakers mt-3">
                  <h4>Speakers: ({data.speakers.length})</h4>
                  <div className="presenter mt-md-3 ms-md-3">
                    <div className="row p-3 p-md-0">
                      {data.speakers?.map((speaker) => {
                        return (
                          <div className="col-md-5 bg-white border rounded text-center me-md-4 my-md-0 mb-3">
                            <img
                              src={speaker.photo}
                              alt="speakerImage"
                              className="rounded-circle mt-3"
                              style={{
                                width: "60px",
                                height: "60px",
                                objectFit: "cover",
                              }}
                            />
                            <p className="mb-1">
                              <strong>{speaker.name}</strong>
                            </p>
                            <p>{speaker.role}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </>
    );
  }
}
