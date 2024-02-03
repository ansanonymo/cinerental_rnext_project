/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa6";
export default function Rating({ value }) {
  const stars = [];

  // filling stars
  for (let i = 1; i >= 1 && i <= value && i <= 5; i++) {
    stars.push(
      <FaStar width={14} height={14} key={`fill${i}`} color="#00D991" />
    );
  }

  // unfill start
  for (let i = 1; i <= 5 - value && i <= 5; i++) {
    stars.push(
      <FaStar width={14} height={14} key={`unfill${i}`} color="#909b9f" />
    );
  }
  return <>{stars}</>;
}
