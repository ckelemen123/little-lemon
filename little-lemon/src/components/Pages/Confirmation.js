import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <header className="confirmation-header">
     
      <section className="reserve-header-text">
        <h1>Your Reservation is Confirmed!</h1>
        <h4>Your confirmation was sent to the email on file.</h4>
        <h4>Thank you for dining with us!</h4>
      </section>

      <section className="redirect-buttons">
        <Link className="redirect-button" to="/order">
          Order Online
        </Link>
        <Link className="redirect-button" to="/">
          Home Page
        </Link>
      </section>
    </header>
  );
}
