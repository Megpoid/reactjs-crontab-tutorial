import React from "react";
import PropTypes from "prop-types";


const Notification = ({ notification,  handleClose }) => {


  const handleOpenWebsite = (link) => {
    window.open(link, "_blank");
  };

  const { btns,  content, header } = notification;

 
    return (
      <div className="login-box">
        <div className="schedule-header">
          <h2 >
            {header && header}
          </h2>
          <p
            className="mg-txt"
          >
            {content.split("\n").map((line, index) => {
              return (
                <span  key={index}>
                  {line}
                  <br />
                </span>
              );
            })}
          </p>
          <button className="close" type="button" onClick={handleClose}>
            close
          </button>
        </div>

        {btns &&
          btns.length > 0 &&
          btns.map((btn) => {
            const {  url, id, content } = btn;
              return (
                <div key={id} className="pop-content data-table">
                  <div className="btn-hall">
                    <button
                      type="button"
                      onClick={() => {
                        handleOpenWebsite(url);
                      }}
                    >
                      {content}
                    </button>
                  </div>
                </div>
              );
    
          })}

      </div>
    );

};


export default Notification;
