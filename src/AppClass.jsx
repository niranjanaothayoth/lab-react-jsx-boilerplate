import { Component } from "react";
import "./App.css"
import elephant from "./images/elephant.jpeg";

export default class AppClass extends Component {

  imageData = () => {
    let data = [
      {
        id: 1,
        img: elephant
      },
      {
        id: 2,
        img: elephant
      },
      {
        id: 3,
        img: elephant
      },
      {
        id: 4,
        img: elephant
      }
    ];
    return data;
  }

  render() {
    const images = this.imageData();

    return (
      <div className="image-container">
        {images.map((img) => (
          <img key={img.id} src={img.img} alt={`Image ${img.id}`} className="image" />
        ))}
      </div>
    );
  }
}
