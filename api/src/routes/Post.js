const router = require("express").Router();
const { DogBreed, Temperament } = require("../db");
const { default: axios } = require("axios");

router.post("/puppy", async (req, res) => {
  let { name, height, weight, life_span, image, temperament, createdInDB } =
    req.body;

  if (!image) {
    try {
      image = await (
        await axios.get("https://dog.ceo/api/breeds/image/random")
      ).data.message;
    } catch (error) {
      console.log(error);
    }
  }

  if (name && height && weight && temperament && image) {
    const newBreed = await DogBreed.create({
      name,
      height,
      weight,
      life_span,
      image: image || "https://dog.ceo/api/breeds/image/random",
      createdInDB,
    });
    temperament.map(async (el) => {
      const findTemp = await Temperament.findAll({
        where: { name: el },
      });

      await newBreed.addTemperament(findTemp);
    });
    res.status(200).send(newBreed);
  } else {
    res.status(404).send("Data needed to proceed is missing");
  }
});

module.exports = router;

// ◥------◥
// l ● ▄ ◉ l
// l‿/ʊ\‿l  WOOF WOOF!
//  l══o══l
// ︳ ︳︳ l⊃
// ఋ︵ ఋ
