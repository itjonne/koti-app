const ruokaAjat = {
  'Aamu': 8,
  'Päivä': 12,
  'Ilta': 18,
}

export const onkoAntamatta = (tunti, tyyppi) => {
  if (!tyyppi in ruokaAjat) {
    return false;
  }
  if (tunti > ruokaAjat[tyyppi]) {
    return true;
  }
  return false;
}