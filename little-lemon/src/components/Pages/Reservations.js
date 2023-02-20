import Heading from "../Sections/ReservationsDetails/Heading";
import Reservation from "../Sections/ReservationsDetails/BookingTable";
import { useReducer } from "react";
import { fetchAPI } from "../../bookingAPI";
export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      <Heading />
      <Reservation availableTimes={availableTimes} updateTimes={dispatch} />
    </>
  );
}
