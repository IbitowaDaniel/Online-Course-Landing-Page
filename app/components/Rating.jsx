import { FaStar } from 'react-icons/fa';


const Rating = ({ rating, starColor }) => {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <li className={`${starColor} mr-[3px]`}>
          <FaStar />
        </li>
      );
    } else {
      totalRating.push(
        <li className="text-muted opacity-20 mr-[3px]">
          <FaStar />
        </li>
      );
    }
  }

  return (
    <div className="">
      <ul className='flex mb-4'>{totalRating}</ul>
    </div>
  );
};

export default Rating;