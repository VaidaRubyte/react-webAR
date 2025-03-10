import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUmbrella } from "react-icons/fa"; // Umbrella icon
import WebARScene from "./WebARScene"; // Import WebAR component

const Main = () => {
  const [expanded, setExpanded] = useState(null);
  const [showAR, setShowAR] = useState(false); // Toggle between timeline & AR view

  const events = [
    { year: 2000, title: "The Big Bang", details: "Openbrolly is founded and MovieSite Locations is launched." },
    { year: 2002, title: "The dawn of time", details: "Introduction of MovieSite Crew and MovieMaps." },
    { year: 2007, title: "The Paleozoic Era", details: "Launch of OB Health and NHS collaborations." },
    { year: 2010, title: "The Mesozoic Era", details: "MovieSite and OB Health experience growth." },
    { year: 2013, title: "The Cenozoic Era", details: "Recognition in life sciences and SaaS innovation." },
    { year: 2017, title: "Evolution", details: "Launch of MovieSite Permits and EventsMakr." },
    { year: 2022, title: "Transforming through every step", details: "Partnership with Moray HandyPerson Services." },
    { year: 2023, title: "A Bump in the road", details: "Geoff Wilcock’s legacy and product expansion." },
    { year: 2024, title: "Finding meaning", details: "Supporting wellbeing in the entertainment industry." },
    { year: 2025, title: "The green road", details: "Sustainability program for TV and film productions." }
  ];

  return (
    <div>
      <h1>Interactive Timeline</h1>
      <button onClick={() => setShowAR(!showAR)} style={buttonStyle}>
        {showAR ? "View Timeline" : "View in AR"}
      </button>

      {showAR ? (
        <WebARScene events={events} />
      ) : (
        <VerticalTimeline>
          {events.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              date={event.year}
              iconStyle={{ background: "#2196F3", color: "#fff" }}
              icon={<FaUmbrella />}
              contentStyle={{ padding: "10px 20px", textAlign: "left" }}
              dateClassName="timeline-date"
            >
              <h3
                onClick={() => setExpanded(expanded === index ? null : index)}
                style={{ cursor: "pointer", color: "#007BFF", textDecoration: "underline" }}
              >
                {event.title}
              </h3>
              {expanded === index && <p>{event.details}</p>}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      )}
    </div>
  );
};

const buttonStyle = {
  padding: "10px 15px",
  fontSize: "16px",
  marginBottom: "20px",
  cursor: "pointer",
  backgroundColor: "#007BFF",
  color: "white",
  border: "none",
  borderRadius: "5px"
};

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default App;