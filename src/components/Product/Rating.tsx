import { ReactElement } from "react";
import IconComponent from "../Icon";
import "./style/product.css";

function RatingComponent(props: { value: number }): ReactElement {
  const formatRating = () => {
    const ratingValueFormatted = Math.floor(props.value);    
    const ratings = [];

    for(let rate = 0;  rate < ratingValueFormatted; rate++) {
      ratings.push('full');
    }

    if(!Number.isInteger(props.value))
      ratings.push('half');

    return ratings;
  }

  return (
    <div className="rating-container">
      {
        formatRating()
          .map((rate) => <IconComponent image={`/images/icons/star-${rate}.png`} width={15} height={15} key={rate} />)
      }
      <p className="rating-text">{ Number.isInteger(props.value) ? `${props.value}.0` : props.value }/5</p>
    </div>
  )
}

export default RatingComponent;
