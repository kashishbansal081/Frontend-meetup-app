import useFetch from "../useFetch";
import Card from "./Card";

export default function CardContainer({ dropDownFilter, searchByFilter }) {
  const { data, loading, error } = useFetch("https://backend-meetup-manager.vercel.app/events");
  // console.log(data);
  // console.log(searchByFilter);

 const filteredEvents = data?.filter((event) => {
 
  const matchesDropdown =
    dropDownFilter === "both" || dropDownFilter === "" 
      ? true 
      : event.eventType === dropDownFilter;

 
  if (!searchByFilter.trim()) {
    return matchesDropdown;
  }

  const query = searchByFilter.toLowerCase();
  const inTitle = event.eventTitle.toLowerCase().includes(query);
  const inTags = event.eventTags?.some((tag) =>
    tag.toLowerCase().includes(query)
  );

  return matchesDropdown && (inTitle || inTags);
});



  

  return (
    <div className="container mt-2">
      <div className="row">
        {filteredEvents?.map((event) => (
          <Card event={event} key={event._id} />
        ))}
      </div>
    </div>
  );
}
