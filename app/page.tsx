import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import Herosection from "./(components)/Herosection"
// import Articles from "./(components)/Articles";
// import Casestudy from "./(components)/Casestudy";
import Testimonials from "./(components)/Testimonials";
import Contact from "./(components)/Contact";
import Projects from "./(components)/Projects";
import Test from "./(components)/test";
import Education from "./(components)/Education"

export default function Home() {
  return (
    <>
      <Header />
      <Herosection />
      <Projects />
      <Test />
      <Education />
      {/* <Casestudy /> */}
      {/* <Articles /> */}
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </>
  );
}
