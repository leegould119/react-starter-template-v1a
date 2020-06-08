import React, { Component } from "react";

class flyoutPanel extends Component {
  render() {
    let { data, togglePanel } = this.props;

    // console.log("data : " + JSON.stringify(data));

    let panelContent = data.map((content, index) => {
      let showHide = content.showHidePanel;
      return (
        <React.Fragment key={index}>
          {content.showHidePanel ? (
            <section
              id={content.id}
              className="panel light-orange padding-top-bottom"
            >
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <a
                      className="panel-button"
                      id={content.id}
                      href="#"
                      onClick={togglePanel}
                    >
                      &times;
                    </a>
                    <h1>{content.title}</h1>
                    <p>
                      Culpa eiusmod nisi aliqua veniam ea commodo ut duis. Duis
                      Lorem qui qui excepteur elit do ea. Excepteur qui id ad
                      dolore aute do ea esse esse sint amet qui ipsum ipsum.
                      Sint culpa enim pariatur incididunt deserunt sint laborum
                      velit. Dolore consequat Lorem magna quis velit tempor
                      minim culpa quis irure ea. Deserunt sit pariatur velit et
                      pariatur. Non id sit ipsum nostrud ipsum ut laborum velit
                      irure amet Lorem aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            ""
          )}
        </React.Fragment>
      );
    });
    return <React.Fragment>{panelContent}</React.Fragment>;
  }
}

export default flyoutPanel;
