import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { postDog, getTemperamentsList } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

function validate(input) {
  let errors = {};
  input.name ? (errors.name = "") : (errors.name = "Name is required");

  input.temperaments.length < 1
    ? (errors.temperaments = "Temperaments is required")
    : (errors.temperaments = "");

  if (!input.image.includes("http://") && !input.image.includes("https://")) {
    errors.image = "This is not a image: puppy sad :(";
  } else {
    errors.image = "";
  }

  return errors;
}

export default function CreateDog() {
  const dispatch = useDispatch();
  const history = useHistory();
  const temperaments = useSelector((state) => state.temperaments);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(getTemperamentsList());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    height: 0,
    weight: 0,
    temperaments: [],
    image: "",
    life_span: 0,
  });

  function handleOnChange(e) {
    setInput((input) => ({ ...input, [e.target.name]: e.target.value }));
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  function handleSubmit(e) {
    if (input.name && input.temperaments > 0 && input.image) {
      e.prevetDefault();
      dispatch(postDog(input));
      alert("Puppy has been created");
      setInput({
        name: "",
        height: 0,
        weight: 0,
        temperaments: [],
        image: "",
        life_span: 0,
      });
      history.push("/home");
    } else {
      e.prevetDefault();
      alert("You must to complete ALL params");
    }
  }

  function handleSelectTemperaments(e) {
    setInput((input) => ({
      ...input,
      temperaments: [...input.temperaments, e.target.value],
    }));
    setErrors(
      validate({
        ...input,
        temperaments: [...input.temperaments, e.target.value],
      })
    );
  }

  function handleDeleteTemperaments(e, d) {
    e.prevetDefault();
    setInput({
      ...input,
      temperaments: input.temperaments.filter((temp) => temp !== d),
    });
  }

  return (
    <div>
      <h1>Create puppy</h1>

      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <div>
              <label>Name</label>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={(e) => handleOnChange(e)}
              />
              {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
              <label>height</label>
              <input
                type="text"
                value={input.height}
                name="height"
                onChange={(e) => handleOnChange(e)}
              />
            </div>

            <div>
              <label>weight</label>
              <input
                type="text"
                value={input.weight}
                name="weight"
                onChange={(e) => handleOnChange(e)}
              />
            </div>

            <div>
              <label>life_span</label>
              <input
                type="text"
                value={input.life_span}
                name="life_span"
                onChange={(e) => handleOnChange(e)}
              />
            </div>

            <div>
              <label>image</label>
              <input
                type="text"
                value={input.image}
                name="image"
                onChange={(e) => handleOnChange(e)}
              />
              {errors.image && <p>{errors.image}</p>}
            </div>
            <div>
              <span>Temperaments</span>
              <select onChange={(e) => handleSelectTemperaments(e)}>
                {temperaments.map((d) => (
                  <option value={d.name} key={d.name}>
                    {d.name}
                  </option>
                ))}
              </select>
              {input.temperaments.map((d, i) => (
                <ul key={i}>
                  <p>{d}</p>
                  <button onClick={(e) => handleDeleteTemperaments(e, d)}>
                    x
                  </button>
                </ul>
              ))}
              {errors.temperaments && <p>{errors.temperaments}</p>}
            </div>

            <div>
              <button type="submit">Create puppy</button>
              <Link to={"/home"}>
                <button>Back to Home</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
