import { Alert, Button } from "flowbite-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Star = ({ filled, onClick }) => (
  <span
    onClick={onClick}
    style={{ cursor: "pointer", color: filled ? "gold" : "gray" }}
  >
    ★
  </span>
);

export default function RatingSection({ postId }) {
  const { currentUser } = useSelector((state) => state.user);
  const [rating, setRating] = useState(0);
  const [ratingError, setRatingError] = useState(null);
  const [ratings, setRatings] = useState([]);

  const submitRating = async (e) => {
    e.preventDefault();
    if (!rating) {
      setRatingError("Pusti recenziju");
      return;
    }
    try {
      const res = await fetch("/backend/rating/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rating,
          postId,
          userId: currentUser._id,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setRating(0);
        setRatingError(null);
        setRatings([data, ...ratings]);
      }
    } catch (error) {
      setRatingError(error.message);
    }
  };

  useEffect(() => {
    const getRatings = async () => {
      try {
        const res = await fetch(`/backend/rating/getPostRatings/${postId}`);
        if (res.ok) {
          const data = await res.json();
          setRatings(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getRatings();
  }, [postId]);

  const averageRating = (ratings) => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((acc, rating) => acc + rating.rating, 0);
    return (total / ratings.length).toFixed(1); // na jendu decimalu logicno
  };

  return (
    <div className="max-w-2xl mx-auto w-full p-3">
      {currentUser ? (
        <div className="flex items-center gap-1 my-5 text-gray-500 text-sm">
          <p>Prijavljen kao:</p>

          <Link
            to={"/profile"}
            className="text-xs text-cyan-600 hover:underline"
          >
            @{currentUser.username}
          </Link>
        </div>
      ) : (
        <div className="text-sm text-teal-500 my-5 flex gap-1">
          You must be signed in to leave a rating.
          <Link className="text-blue-500 hover:underline" to={"/sign-in"}>
            Sign In
          </Link>
        </div>
      )}
      {currentUser && (
        <form
          onSubmit={submitRating}
          className="border border-teal-500 rounded-md p-3"
        >
          <div>
            <h4 className="mb-2">Tvoja recenzija:</h4>
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                filled={star <= rating}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
          <div className="flex justify-between items-center mt-5">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Pošalji
            </button>
          </div>
          {ratingError && (
            <Alert color="failure" className="mt-5">
              {ratingError}
            </Alert>
          )}
        </form>
      )}
      {ratings.length === 0 ? (
        <p className="text-sm my-5">Nema trenutnih recenzija</p>
      ) : (
        <>
          <div className="text-sm my-5 flex items-center gap-1">
            <p>Prosječna recenzija</p>
            <div className="border border-gray-400 py-1 px-2 rounded-sm">
              <p>{averageRating(ratings)}</p>
            </div>
          </div>
          {/* {ratings.map((rating) => (
            <div key={rating._id} className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} filled={star <= rating.rating} />
                ))}
              </div>
            </div>
            ispisuje mi svaku recenziju...
          ))} */}
        </>
      )}
    </div>
  );
}
