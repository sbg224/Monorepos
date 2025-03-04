import type { RequestHandler } from "express";

const categories = [
  {
    id: 1,
    name: "Comédie",
  },
  {
    id: 2,
    name: "Science-Fiction",
  },
];

const browse: RequestHandler = (req, res) => {
  res.json(categories);
};

const read: RequestHandler = (req, res) => {
  const parsedId = Number.parseInt(req.params.id);
  const categorie = categories.find((c) => c.id === parsedId);

  if (categorie) {
    res.json(categorie);
  } else {
    res.status(404).json({ message: "Catégorie non trouvée" });
  }
};

export default { browse, read };
