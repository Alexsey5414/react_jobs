import React, { useContext } from "react";
import {
  useReviewForm,
  UPDATE_USER_ACTION,
  UPDATE_COMMENT_ACTION,
  UPDATE_RATING_ACTION,
  CLEAR_ACTION,
} from "./use-from";

import ReviewRatingCount from "../ReviewRatingCount/review-rating-count";
import { AuthContext } from "../../../context";
import "./review-form.css";

const ReviewForm = () => {
  const { user, text, rating, dispatch } = useReviewForm();
  const userAuth = useContext(AuthContext);
  const minLimit = 0;
  const maxLimit = 5;

  const increaseRating = (event) => {
    if (rating < maxLimit) {
      handleChange(event, UPDATE_RATING_ACTION, rating + 1);
    }
  };

  const decreaseRating = (event) => {
    if (rating > minLimit) {
      handleChange(event, UPDATE_RATING_ACTION, rating - 1);
    }
  };

  const handleChange = (event, type, value = null) => {
    event.preventDefault();
    dispatch({
      type: type,
      payload: value,
    });
  };
  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Данные формы:", { user, text, rating });
    alert("Форма отправлена! Проверьте консоль для просмотра данных.");
  };
  // Обработчик очистки формы
  const handleReset = (event) => {
    handleChange(event, CLEAR_ACTION);
  };

  return (
    <div className="form-container ">
      <h2>Форма отзыва</h2>
      <form>
        <div className="form-field">
          <label htmlFor="user">Пользователь</label>
          <input
            type="text"
            id="user"
            value={user}
            onChange={(e) =>
              handleChange(e, UPDATE_USER_ACTION, e.target.value)
            }
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="text">Комментарий</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) =>
              handleChange(e, UPDATE_COMMENT_ACTION, e.target.value)
            }
            required
          />
        </div>
        {userAuth.username && (
          <div className="form-field">
            <ReviewRatingCount
              quantity={rating}
              minLimit={minLimit}
              maxLimit={maxLimit}
              onIncrease={(e) => increaseRating(e)}
              onDecrease={(e) => decreaseRating(e)}
            />
          </div>
        )}
        {/* Кнопки */}
        <div className="form-buttons">
          <button
            type="button"
            className="btn btn-submit"
            onClick={(e) => handleSubmit(e)}
          >
            Отправить
          </button>
          <button
            type="button"
            onClick={(e) => handleReset(e)}
            className="btn btn-reset"
          >
            Очистить
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
