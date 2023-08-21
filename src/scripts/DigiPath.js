import DigiDb from '../mocks/DigiDB';

const database = new DigiDb().digimonData;
let path = [];
let found = false;

function getID(digiName) {
  const {digimons} = database;
  const ID = digimons.findIndex(digimon => digimon.name === digiName);
  return ID;
}
function getName(digiID) {
  return database.digimons[digiID].name;
}

function verifyCurrentLine(digiID, final) {
  const into = database.digimons[digiID].into.findIndex(
    digimon => digimon === final,
  );
  const from = database.digimons[digiID].from.findIndex(
    digimon => digimon === final,
  );

  if (into != -1 || from != -1) {
    path.push(getName(digiID));
  }

  return into != -1 || from != -1;
}

export default function DigiPath(initial, final, exceptions) {
  const initialID = getID(initial);
  verifyCurrentLine(initialID, final);
  if (path[0] == initial) {
    path.push(final);
  }

  return path;
}
