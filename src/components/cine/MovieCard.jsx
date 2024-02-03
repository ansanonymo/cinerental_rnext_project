/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { MovieContext } from "../../context";
import TagIcon from "./../../assets/others/tag.svg";
import MovieDetailsModal from "./MovieDetailsModal";
import Rating from "./Rating";

export default function MovieCard({ movie }) {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { cartState, cartDispatch } = useContext(MovieContext);

  function handleModalClose() {
    setSelectedMovie(null);
  }

  function handleAddToCart(event, movie) {
    event.stopPropagation();
    event.preventDefault();

    const found = cartState.cartData.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      cartDispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
      toast.success(`Movie ${movie.title} added successfully.`, {
        position: "bottom-right",
      });
    } else {
      toast.error(`Movie ${movie.title} has been added to the cart already`, {
        position: "bottom-right",
      });
    }
  }
  return (
    <>
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure
        key={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="#" onClick={() => setSelectedMovie(movie)}>
          <img
            className="w-full object-cover"
            src={movie.cover}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">
              {movie.genre.split(",").join("/")}
            </p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <button
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={TagIcon} alt="tag" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </a>
      </figure>
    </>
  );
}
