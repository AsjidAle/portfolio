import Header from "./(components)/Header";
import Footer from "./(components)/Footer";
import Herosection from "./(components)/Herosection";
// import Articles from "./(components)/Articles";
// import Casestudy from "./(components)/Casestudy";
import Testimonials from "./(components)/Testimonials";
import Contact from "./(components)/Contact";
import Projects from "./(components)/Projects";
// import Test from "./(components)/test";
import Education from "./(components)/Education";
import Blogs from "./(components)/Blogs";
// import Reviews from "./(components)/Reviews";
// import Recommendations from "./(components)/Recommendations";

export default function Home() {
  return (
    <>
      <Header />
      <Herosection />
      <Projects />
      {/* <Test /> */}
      <Education />
      {/* <Casestudy /> */}
      {/* <Articles /> */}
      {/* <Reviews /> */}
      {/* <Recommendations />  */}
      <Blogs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
