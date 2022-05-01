const router = require("express").Router();
const { DogBreed, Temperament } = require("../db");

router.post("/puppy", async (req, res) => {
  let { name, height, weight, life_span, image, temperament, createdInDB } =
    req.body;

  const newBreed = await DogBreed.create({
    name,
    height,
    weight,
    life_span,
    image: image,
    createdInDB,
  });
  temperament.map(async (el) => {
    const findTemp = await Temperament.findAll({
      where: { name: el },
    });

    await newBreed.addTemperament(findTemp);
  });
  res.status(200).send(newBreed);
});

module.exports = router;

// ◥------◥
// l ● ▄ ◉ l
// l‿/ʊ\‿l  WOOF WOOF!
//  l══o══l
// ︳ ︳︳ l⊃
// ఋ︵ ఋ
