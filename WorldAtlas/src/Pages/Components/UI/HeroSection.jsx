import { IoIosArrowDropright } from "react-icons/io";
export const HeroSection = () =>{
    return(

        <main className="hero-section main">
            <div className="container grid grid-two-cols">
                <div className="hero-content">
                    <h1 className="heading-xl"> Explore the world, but one contry at a time. </h1>

                    <p className="para"> discover the history, culture and the beauty of world.sort,search,filter through country to find the details you need</p>

                    <button className="btn ">Start Exploring<IoIosArrowDropright /></button>
                </div>
                <div className="hero-image">
                    <img src="/images/world.png" alt="world with animals" className="banner-image" />
                </div>

            </div>
        </main>
    )
}