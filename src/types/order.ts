import { Color, Customer, Material, Profile, Roll, Thickness } from '@types';

export enum OrderStatus {
  PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  UNFULFILLED = 'UNFULFILLED',
}

export interface Order {
  id: string;
  orderNr: string;
  createdAt: Date;
  customer: Customer;
  status: OrderStatus;
  price: string;
  productQuantity: number;
}

export enum SheetFormFields {
  QUANTITY = 'quantity',
  METERS = 'meters',
  IS_FOILED = 'isFoiled',
}

export interface Sheet {
  [SheetFormFields.QUANTITY]: number;
  [SheetFormFields.METERS]: number;
  [SheetFormFields.IS_FOILED]: boolean;
}

export enum PositionFormFields {
  PROFILE_ID = 'profileId',
  THICKNESS_ID = 'thicknessId',
  WIDTH = 'width',
  COLOR_ID = 'colorId',
  IS_GLOSSY = 'isGlossy',
  IS_DOUBLE_SIDED = 'isDoubleSided',
  IS_FIRST_CLASS = 'isFirstClass',
  ROLL_ID = 'rollId',
  MATERIAL_ID = 'materialId',
  SHEETS = 'sheets',
}

export interface Position {
  [PositionFormFields.PROFILE_ID]: Profile['id'];
  [PositionFormFields.THICKNESS_ID]: Thickness['id'];
  [PositionFormFields.WIDTH]: number;
  [PositionFormFields.COLOR_ID]: Color['id'];
  [PositionFormFields.IS_GLOSSY]: boolean;
  [PositionFormFields.IS_DOUBLE_SIDED]: boolean;
  [PositionFormFields.IS_FIRST_CLASS]: boolean;
  [PositionFormFields.ROLL_ID]: Roll['id'];
  [PositionFormFields.MATERIAL_ID]: Material['id'];
  [PositionFormFields.SHEETS]: Sheet[];
}

export enum CreateOrderFormFields {
  PROFILE_ID = 'profileId',
  ORDER_NR = 'orderNr',
  CREATED_AT = 'createdAt',
  CUSTOMER_ID = 'customerId',
  POSITIONS = 'positions',
  PRICE = 'price',
  PRODUCTS_QUANTITY = 'productQuantity',
}

export interface CreateOrderPayload {
  [CreateOrderFormFields.ORDER_NR]: Order['orderNr'];
  [CreateOrderFormFields.CREATED_AT]: Order['createdAt'];
  [CreateOrderFormFields.CUSTOMER_ID]: Customer['id'];
  [CreateOrderFormFields.POSITIONS]: Position[];
  [CreateOrderFormFields.PRICE]: Order['price'];
  [CreateOrderFormFields.PRODUCTS_QUANTITY]: Order['productQuantity'];
}
