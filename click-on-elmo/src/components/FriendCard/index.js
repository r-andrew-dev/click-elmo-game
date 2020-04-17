import React from "react";
import "./style.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

// Credit to https://stackoverflow.com/questions/42118296/dynamically-import-images-from-a-directory-using-webpack
// for this great function to import all my images and Kathy TA for finding it! 

function FriendCard(props) {
  console.log(props.image)
  return (
    <div className="click-image">
        <img alt={props.name} src={images[props.image]} onClick={() => props.clickCharacter(props.id)}
        />
      </div>
  )}

  export default FriendCard;