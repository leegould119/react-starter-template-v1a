import React, { Component } from "react";
import HeaderTag from "../components/elements/headerTag";

import GalleryComponent from "../components/gallery2/";
class galleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: {
        value: "welcome to my portfolio website",
        color: "title-text"
      },
      twoColumnLayout: {
        fontColors: {
          lightOrange: "light-orange-color",
          darkOrange: "dark-orange-color",
          darkGrey: "dark-grey-color",
          white: "white"
        },
        paddingTopBottom: "padding-top-bottom",
        title: "about me",
        title1: "my background",
        bodyText:
          "Use it to describe your credentials, expertise, and goals. What’s the best way to start? The following exercises can be helpful in figuring all of that out, and will help you determine what to include based on your target audience. Spend about five minutes on each question. You can use the ‘example’ answers to give you an idea of what that answer might sound like in its final form, but be sure to use your own words. ",
        bodyText1:
          "You can use the ‘example’ answers to give you an idea of what that answer might sound like in its final form, but be sure to use your own words. "
      },
      fourColumnLayout: {
        background: {
          lightOrange: "  light-orange",
          darkOrange: " dark-orange",
          darkGrey: " dark-grey",
          lightGrey: " dark-grey"
        },
        paddingTopBottom: "padding-top-bottom"
      }
    };
  }

  render() {
    let { title } = this.state;
    return (
      <React.Fragment>
        <HeaderTag title={title} />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p>
                Non esse qui ex duis labore ad irure mollit ad proident
                consectetur sint nostrud pariatur. Ipsum tempor consectetur
                pariatur aliqua non cillum occaecat Lorem occaecat excepteur
                cupidatat reprehenderit sunt. Id fugiat ex magna consequat est
                enim. Ad elit nisi et nisi ex amet cillum et veniam sint amet
                sit dolor tempor. Fugiat elit est id quis fugiat elit in
                exercitation anim incididunt. Culpa sunt consequat voluptate
                sunt fugiat laboris. Elit id ex esse elit laboris commodo.
                Occaecat ea anim proident aute voluptate enim Lorem non proident
                qui reprehenderit aliquip nostrud qui. Do ut ad officia dolor
                dolore id laborum consequat voluptate consectetur do.
              </p>
            </div>
            <div className="col-6">
              <p>
                Occaecat ipsum sit Lorem veniam cillum occaecat ut ad enim.
                Ipsum sint consequat deserunt aliquip tempor minim commodo sit
                elit occaecat cupidatat officia excepteur. Ad et eiusmod ad
                minim commodo anim nulla cupidatat proident pariatur aliqua ea
                magna pariatur. Consequat commodo dolore cillum quis minim dolor
                sit eiusmod pariatur et non elit. Adipisicing voluptate nulla
                aliqua do laboris consectetur reprehenderit amet dolor
                exercitation enim cillum in. Dolore Lorem veniam id nisi
                commodo. Amet duis aliquip eu veniam. Commodo dolor officia
                incididunt et cillum culpa reprehenderit ea quis. Occaecat
                consequat nulla aliqua est. Ut laboris aliquip excepteur ipsum
                in pariatur esse nulla. Amet cupidatat voluptate aliquip enim
                magna. Est mollit nulla amet deserunt excepteur do magna mollit
                Lorem id fugiat. Mollit consectetur aliquip laboris enim labore.
                Dolor consequat reprehenderit laboris exercitation in ullamco
                voluptate proident. Mollit ut ex reprehenderit velit dolore
                dolor deserunt esse cupidatat dolor anim commodo.
              </p>
            </div>
          </div>
        </div>
        <GalleryComponent />
      </React.Fragment>
    );
  }
}
export default galleryPage;
