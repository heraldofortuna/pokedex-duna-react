export function ChooseColorAccordingType(type: any) {
  let backgroundColor = "var(--white)";
  switch (type) {
    case "grass": {
      backgroundColor = "var(--green)";
      break;
    }
    case "fire": {
      backgroundColor = "var(--light-red)";
      break;
    }
    case "water": {
      backgroundColor = "var(--blue)";
      break;
    }
    case "bug": {
      backgroundColor = "var(--light-green)";
      break;
    }
    case "normal": {
      backgroundColor = "var(--gray)";
      break;
    }
    case "poison": {
      backgroundColor = "var(--light-purple)";
      break;
    }
    case "electric": {
      backgroundColor = "var(--light-yellow)";
      break;
    }
    case "ground": {
      backgroundColor = "var(--yellow)";
      break;
    }
    case "fighting": {
      backgroundColor = "var(--red)";
      break;
    }
    case "psychic": {
      backgroundColor = "var(--pink)";
      break;
    }
    case "rock": {
      backgroundColor = "var(--brown)";
      break;
    }
    case "ghost": {
      backgroundColor = "var(--purple)";
      break;
    }
    case "ice": {
      backgroundColor = "var(--light-blue)";
      break;
    }
    default: {
      break;
    }
  }
  return backgroundColor;
}
