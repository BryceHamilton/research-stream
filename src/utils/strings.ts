const STUDY_CARD_MAX_LENGTH = 150;

export const trimString = (inputString: string): string => {
  if (inputString.length > STUDY_CARD_MAX_LENGTH) {
    let trimmedString = inputString.substr(0, STUDY_CARD_MAX_LENGTH);
    trimmedString = trimmedString.substr(
      0,
      Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')),
    );
    return trimmedString;
  } else {
    return inputString;
  }
};
