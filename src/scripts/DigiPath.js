import DigiDb from '../mocks/DigiDB';

const database = new DigiDb().digimonData;
let path = [];
let digiCache = [];
let found = false;
let newFinal = '';

function getID(digiName) {
  const {digimons} = database;
  const ID = digimons.findIndex(digimon => digimon.name === digiName);
  return ID;
}

function getName(digiID) {
  return database.digimons[digiID].name;
}

function verifyCurrentLine(digiID, initial, final) {
  let found_ = false;

  const {from, into} = database.digimons[digiID];

  found_ = from.includes(final);
  if (!found_) found_ = into.includes(final);

  if (found_) {
    digiName = getName(digiID);
    console.log(digiName);
    path.push(digiName);
    newFinal = digiName;
    if (digiName == initial) found = true;
  } else {
    digiCache = digiCache.concat(from);
    digiCache = digiCache.concat(into);
  }

  return found_;
}

export default function DigiPath(initialDigimon, finalDigimon, exceptions) {
  newFinal = finalDigimon;
  digiCache.push(initialDigimon);

  while (!found) {
    digiCache.forEach(seekedDigimon => {
      console.log(seekedDigimon);
      verifyCurrentLine(getID(seekedDigimon), initialDigimon, newFinal);
    });
  }

  path.push(finalDigimon);

  return path;
}
