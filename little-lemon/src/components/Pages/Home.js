import Heading from "../Sections/HeadingDetails/Heading";
import Specials from "../Sections/HeadingDetails/Specials";
import Testimonials from "../Sections/HeadingDetails/Testimonials";
import About from "../Sections/HeadingDetails/About";
export default function Homepage() {
  return (
    <>
      <Heading />
      <main>
        <Specials />
        <Testimonials />
        <About />
      </main>
    </>
  );
}
