import {Link} from 'react-router-dom';
export default function Heading() {
    return (
        <header>
            <article className="call-to-action">
                <section className="hero-text">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="subsection">We are a family owned Mediterranean restaurant...</p>
                    <br></br>
                    <Link className="action-button" to="/reservations">Reserve a table</Link>
                </section>

                <section className="hero-image">
                    <img src={require('../../../assets/lemondessert.jpg')} alt="dessert"></img>
                </section>
            </article>
      </header>
    );
}