import { Keyboard, Alert } from "react-native";

// 三角形の面積
export function calculateTriangleArea(base, height) {
  const baseValue = parseFloat(base);
  const heightValue = parseFloat(height);

  if (isNaN(baseValue) || isNaN(heightValue)) {
    return 0;
  } else {
    return (baseValue * heightValue) / 2;
  }
}
// 三角形の面積リセット
export function resetTriangleArea(setBase, setHeight, setArea) {
  setBase("");
  setHeight("");
  setArea(0);
}

// 正方形・長方形の面積
export const calculateRectangleArea = (height, width) => {
  const heightValue = parseFloat(height);
  const widthValue = parseFloat(width);

  if (isNaN(heightValue) || isNaN(widthValue)) {
    return 0;
  } else {
    return heightValue * widthValue;
  }
};
// 正方形・長方形の面積リセット
export const resetRectangleArea = (setHeight, setWidth, setArea) => {
  setHeight("");
  setWidth("");
  setArea(0);
};

// 円の面積
export const calculateCircleArea = (radius) => {
  const parsedRadius = parseFloat(radius);

  if (isNaN(parsedRadius) || parsedRadius <= 0) {
    return 0;
  }

  const circleArea = Math.PI * Math.pow(parsedRadius, 2);
  return circleArea.toFixed(2); // 四捨五入して小数点以下2桁まで表示
};
// 円の面積リセット
export const resetCircleArea = (setRadius, setArea) => {
  setRadius("");
  setArea(0);
};

// ○○柱の体積
export const calculateTriangleVolume = (area, height) => {
  const areaValue = parseFloat(area);
  const heightValue = parseFloat(height);

  if (isNaN(areaValue) || isNaN(heightValue)) {
    return 0;
  } else {
    return areaValue * heightValue;
  }
};
// ○○柱の体積リセット
export const resetTriangleVolume = (setArea, setHeight, setVolume) => {
  setArea("");
  setHeight("");
  setVolume(0);
};

// inputプロパティ外をタッチしたら、キーボードを消す
export function dismissKeyboard() {
  Keyboard.dismiss();
}

// ポップアップを表示する
export const showAlertPopup = () => {
  Alert.alert("Warning", "値を入力してください。", [{ text: "OK" }]);
};
