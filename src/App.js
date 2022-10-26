import React from "react";
import "./scss/world-traveler.scss";
import Card from "./components/Card/card.component";
import Button from "./components/Button/button.component";

function App() {
  return (
    <div className="container">
       <div className="grid">
        <div className="grid__item--full">
          <h1>World Traveler</h1>
          <Card
            title="London, England"
            date="April 15, 2020"
            description="Ut placet, inquam tum dicere exorsus est laborum et via procedat oratio quaerimus igitur, quid et caritatem, quae sine causa? quae fuerit causa, mox videro; interea hoc epicurus in culpa, qui blanditiis praesentium voluptatum adipiscendarum causa aut officiis debitis aut fugit, sed uti oratione perpetua."
            image="img/london-img.jpg"
            status="Register Now"
            type="international"
          >
            <Button
              href="https://www.google.com"
              text="Learn More"
              ariaLabel="Learn More"
              target="_blank"
            />
          </Card>
        </div>
     
        <div className="grid__item--half">
          <Card
              title="Atlanta, GA"
              date="March 10, 2019"
              description="Torquatos nostros? quos tu paulo ante cum soluta nobis est."
              image="img/atlanta-img.png"
              status="Register Now"
              size="sm"
              type="domestic"
            />

        </div>
        <div className="grid__item--half">
          <Card
              title="Singapore"
              date="February 15, 2020"
              description="Primum igitur, inquit, sic agam, ut aliquid ex eo delectu."
              image="img/singapore-img.jpg"
              status="3 spots left"
              size="sm"
              type="international"
            />
        </div>
      </div>
    </div>
  );
}

export default App;
