import Navbar from "../Shared/Navbar/Navbar"
import About from "../pages/About/About"
import Hero from "../pages/Hero/Hero"
import Demo from "../pages/NextPage/demo"
import Service from "../pages/Service/Service"

const Main = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About />
        <Service/>
        <Demo/>
        {/* <Footer/> */}

    </div>
  )
}

export default Main