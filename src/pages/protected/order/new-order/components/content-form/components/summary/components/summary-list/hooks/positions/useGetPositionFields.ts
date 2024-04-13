import { Position } from '@types';

import { useGetColor } from './useGetColor';
import { useGetThickness } from './useGetThickness';
import { useGetMaterial } from './useGetMaterial';
import { useGetRoll } from './useGetRoll';
import { useGetWidth } from './useGetWidth';
import { useGetDoubleSided } from './useGetDoubleSided';
import { useGetFirstClass } from './useGetFirstClass';
import { useGetGlossy } from './useGetGlossy';
import { useGetSheets } from './sheets';

import { Summary } from '../../summary.types';

export const useGetPositionFields = () => {
  const { getColor } = useGetColor();
  const { getThickness } = useGetThickness();
  const { getMaterial } = useGetMaterial();
  const { getRoll } = useGetRoll();
  const { getWidth } = useGetWidth();
  const { getDoubleSided } = useGetDoubleSided();
  const { getFirstClass } = useGetFirstClass();
  const { getGlossy } = useGetGlossy();
  const { getSheets } = useGetSheets();

  const getPositionFields = ({
    colorId,
    thicknessId,
    materialId,
    rollId,
    width,
    isDoubleSided,
    isFirstClass,
    isGlossy,
    sheets,
  }: Position) => {
    const fields: Summary[] = [];

    const color = getColor(colorId);

    if (color) {
      fields.push(color);
    }

    const thickness = getThickness(thicknessId);

    if (thickness) {
      fields.push(thickness);
    }

    const material = getMaterial(materialId);

    if (material) {
      fields.push(material);
    }

    const roll = getRoll(rollId);

    if (roll) {
      fields.push(roll);
    }

    fields.push(getWidth(width));
    fields.push(getDoubleSided(isDoubleSided));
    fields.push(getFirstClass(isFirstClass));
    fields.push(getGlossy(isGlossy));

    const sheetArray = getSheets(sheets);

    if (sheetArray) {
      fields.push(sheetArray);
    }

    return fields;
  };

  return {
    getPositionFields,
  };
};
