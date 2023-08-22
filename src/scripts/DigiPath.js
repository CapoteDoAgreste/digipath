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

  from.forEach(digimon => {
    if (digimon == final) {
      path.push(digimon);
      found_ = true;
    } else {
      console.log(getID(digimon), digimon);
      digiCache.push(getID(digimon));
    }
  });

  into.forEach(digimon => {
    if (digimon == final) {
      path.push(digimon);
      newFinal = digimon;
      found_ = true;
    } else {
      if (getID(digimon) < -0) {
        console.log(getID(digimon), digimon);
      }

      digiCache.push(getID(digimon));
    }
  });

  return found_;
}

export default function DigiPath(initialDigimon, finalDigimon, exceptions) {
  const initialID = getID(initialDigimon);
  const initialSeek = verifyCurrentLine(
    initialID,
    initialDigimon,
    finalDigimon,
  );
  if (!initialSeek) {
    while (!found) {
      digiCache.forEach(digimon => {
        found = verifyCurrentLine(digimon, initialDigimon, newFinal);
      });
    }
  } else {
  }

  return path;
}
