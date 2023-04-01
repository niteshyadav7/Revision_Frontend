import React from "react";

class MovieCard extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "The Avenger",
      plot: "Supernatural power shown in movie",
      price: 199,
      rating: 8.9,
    };
   
    }
     handlePlus=()=>{
      console.log(`stars :`,this);
  }
  render() {
    const {title,plot,price,rating}=this.state;
    return (
      <>
        <img
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
          alt="images"
          width={100}
        />
        {/* <h3>{this.state.title}</h3>
        <p>{this.state.plot}</p>
        <p>Rs.{this.state.price}</p>
        <p>{this.rating}</p> */}
        <h3>{title}</h3>
        <p>{plot}</p>
        <p>{price}</p>
        <p>{rating}</p>
        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/43/43625.png"
            alt="images of minus"
            width={10}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
            alt="images of star"
            width={25}
          />
          <img onClick={this.handlePlus}
            src="https://cdn-icons-png.flaticon.com/512/748/748113.png"
            alt="images of plus"
            width={10}
          />
        </div>
        <p>
          <button>favorite</button>&nbsp;
          <button>Add to cart</button>
        </p>
      </>
    );
  }
}
export default MovieCard;
