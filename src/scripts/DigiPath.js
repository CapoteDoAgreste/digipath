import DigiDb from "../mocks/DigiDB";

const database = new DigiDb().digimonData;
let path = [];

function getID(digiName) {
  const { digimons } = database;
  const ID = digimons.findIndex((digimon) => digimon.name === digiName);
  return ID;
}

function getName(digiID) {
  return database.digimons[digiID].name;
}

function findPath(initialDigimon, finalDigimon, exceptions) {
  const initialID = getID(initialDigimon);
  const finalID = getID(finalDigimon);

  const queue = [{ digimonID: initialID, path: [initialDigimon] }];
  const visited = new Set();

  while (queue.length > 0) {
    const { digimonID, path } = queue.shift();
    visited.add(digimonID);

    if (digimonID === finalID) {
      return path;
    }

    const { from, into } = database.digimons[digimonID];

    [...from, ...into].forEach((relation) => {
      if (!visited.has(getID(relation)) && !exceptions.includes(relation)) {
        queue.push({ digimonID: getID(relation), path: [...path, relation] });
      }
    });
  }

  return null; // No path found
}

export default findPath;
