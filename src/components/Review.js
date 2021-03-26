import React from 'react';
import './App.css'; 


import stars from '../social/pictures/stars2.png'

class Review extends React.Component  {

    render() {
    return(
        <div className="Review">
            <div className="review1">
                <p>“Sent really quickly with a gift note to a friend, thank you. My friend said this was the best Victoria Sponge she’s ever had an I think she may have ordered more. Would recommend. -DG"</p>
                <img src={stars} alt="5 review stars" className="review-stars" />
            </div>
            <div className="review2">
                <p>“Sent really quickly with a gift note to a friend, thank you. My friend said this was the best Victoria Sponge she’s ever had an I think she may have ordered more. Would recommend. -DG"</p>
                <img src={stars} alt="5 review stars" className="review-stars" />
            </div>
            <div className="review3">
                <p>“Sent really quickly with a gift note to a friend, thank you. My friend said this was the best Victoria Sponge she’s ever had an I think she may have ordered more. Would recommend. -DG"</p>
                <img src={stars} alt="5 review stars" className="review-stars" />
            </div>
            
           
        </div>
    )
  }
}

export default Review