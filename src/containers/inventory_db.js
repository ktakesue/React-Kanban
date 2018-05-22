const cardsDB = [
  {
    id: 1,
    title: "drink a potion",
    priority: "medium",
    status: "queue",
    created_by: "domo",
    assigned_to: "your mom"
  },
  {
    id: 2,
    title: "eat some corn",
    priority: "high",
    status: "in-progress",
    created_by: "someone",
    assigned_to: "you"
  },
  {
    id: 3,
    title: "die to elephants",
    priority: "low",
    status: "done",
    created_by: "God",
    assigned_to: "humans"
  }
];

let newId = 4;

export const getCards = () =>
  new Promise((resolve, reject) => {
    resolve(cardsDB.slice());
  });

export const addCardtoDB = card =>
  new Promise((resolve, reject) => {
    card.id = newId;
    newId++;
    cardsDB.push(card);
    console.log("cardDB", cardsDB);
    resolve(cardsDB);
  });

export const getCardById = cardId =>
  new Promise((resolve, reject) => {
    const cardResponse = cardsDB.find(card => card.id === cardId);
    if (cardResponse) resolve(cardResponse);
    else reject({ status: 404, message: "item not found" });
  });
