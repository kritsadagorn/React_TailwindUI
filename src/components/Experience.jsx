import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../data/exampleData";

const ExCard = ({ item }) => (
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
    date={item.date}
    iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
    icon=""
  >
    <h3 className="vertical-timeline-element-title">{item.title}</h3>
    <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
    
    <ul>
      {item.points.map((e, index) => (
        <li key={index}>{e}</li>
      ))}
    </ul>
    <img src={item.icon} alt="" />
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div>
      <VerticalTimeline>
        {experiences.map((item, index) => {
          return <ExCard item={item} key={index} />;
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
