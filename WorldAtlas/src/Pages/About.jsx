import CountryFacts from "../api/CountryData.json";

export const About = () =>{
    return(
        <section className="section-about container">
            <h2 className="container-title">
                Here are the intresting facts 
                <br />
                we're proud of 
            </h2>

            <div className="gradient-cards">
                {
                    CountryFacts.map((country)=>{
                        const {id,countryName ,capital,facts,population}= country;
                            return(
                            <div className="card" key={id}>
                                <div className="container-card bg-blue-box">
                                   <p className="card-title">{countryName}</p>
                                    <p>
                                        <span className="card-description">Capital :</span>
                                        {capital}
                                    </p>
                                    <p>
                                        <span className="card-description">Facts :</span>
                                        {facts}
                                    </p>
                                    <p>
                                        <span className="card-description">Population :</span>
                                        {population}
                                    </p>
        
                                </div>
                            </div>)
                    })
                }
                    
            </div>
            

        </section>
    )
}