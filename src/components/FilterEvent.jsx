
export default function FilterEvent({onFilterChange}){
    function onChangeHandler (e){
        const eventType = e.target.value
        onFilterChange(eventType)
    }
    return (
        <>
        <div className="d-flex justify-content-between">
            <h1>Meetup Events</h1>
            <div>
                <select name="filterEventType" id="filterEventType" className="form-control border-0 shadow-none" onChange={onChangeHandler} defaultValue="">
                    <option value="" disabled hidden>Select Event Type</option>
                    <option value="both">Both</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
    
                </select>
            </div>
        </div>
        </>
    )
}