import { Position, PositionFormFields } from '@types';

export const INITIAL_POSITION_VALUES: Omit<Position, PositionFormFields.WIDTH> =
  {
    colorId: '',
    isDoubleSided: false,
    isFirstClass: false,
    isGlossy: false,
    materialId: '',
    profileId: '',
    rollId: '',
    sheets: [],
    thicknessId: '',
  };
