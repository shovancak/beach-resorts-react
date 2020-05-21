import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail></FaCocktail>,
        title: "Free Cocktails",
        info:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean et est a dui semper facilisis. Pellentesque placerat elit a nunc.",
      },
      {
        icon: <FaHiking></FaHiking>,
        title: "Endless Hiking",
        info:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean et est a dui semper facilisis. Pellentesque placerat elit a nunc.",
      },
      {
        icon: <FaShuttleVan></FaShuttleVan>,
        title: "Free Shuttle",
        info:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean et est a dui semper facilisis. Pellentesque placerat elit a nunc.",
      },
      {
        icon: <FaBeer></FaBeer>,
        title: "Strongest Beer",
        info:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean et est a dui semper facilisis. Pellentesque placerat elit a nunc. ",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="Services"></Title>
        <div className="services-center">
          {this.state.services.map((service, index) => {
            return (
              <article key={index} className="service">
                <span>{service.icon}</span>
                <h6>{service.title}</h6>
                <p>{service.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
