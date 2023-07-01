import { Keyboard } from "react-native";

export function calculateTriangleArea(base, height) {
  const baseValue = parseFloat(base);
  const heightValue = parseFloat(height);

  if (isNaN(baseValue) || isNaN(heightValue)) {
    return 0;
  } else {
    return (baseValue * heightValue) / 2;
  }
}

export function resetTriangleArea(setBase, setHeight, setArea) {
  setBase("");
  setHeight("");
  setArea(0);
}

export const calculateRectangleArea = (height, width) => {
  const heightValue = parseFloat(height);
  const widthValue = parseFloat(width);

  if (isNaN(heightValue) || isNaN(widthValue)) {
    return 0;
  } else {
    return heightValue * widthValue;
  }
};

export const resetRectangleArea = (setHeight, setWidth, setArea) => {
  setHeight("");
  setWidth("");
  setArea(0);
};

export const calculateTriangleVolume = (area, height) => {
  const areaValue = parseFloat(area);
  const heightValue = parseFloat(height);

  if (isNaN(areaValue) || isNaN(heightValue)) {
    return 0;
  } else {
    return areaValue * heightValue;
  }
};

export const resetTriangleVolume = (setArea, setHeight, setVolume) => {
  setArea("");
  setHeight("");
  setVolume(0);
};

export function dismissKeyboard() {
  Keyboard.dismiss();
}
