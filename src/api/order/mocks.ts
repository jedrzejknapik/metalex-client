import { v4 as uuidv4 } from 'uuid';

import { Customer } from '@types';

export const CUSTOMER_MOCKS: Customer[] = [
  {
    id: uuidv4(),
    address: 'Pleśna 2137A',
    companyName: null,
    email: 'test@test.com',
    firstName: 'Pan',
    lastName: 'Janusz',
    nip: '2137',
    phoneNumber: '997',
    imageRef: 'images/pan-janusz.jpeg',
  },
  {
    id: uuidv4(),
    address: 'Pleśna 2137A',
    companyName: null,
    email: 'test@test.com',
    firstName: 'Jan',
    lastName: 'Kowalski',
    nip: '2137',
    phoneNumber: '997',
    imageRef: 'images/jan-kowalski.jpeg',
  },
  {
    id: uuidv4(),
    address: 'Pleśna 2137A',
    companyName: null,
    email: 'test@test.com',
    firstName: 'Anna',
    lastName: 'Nowak',
    nip: '2137',
    phoneNumber: '997',
    imageRef: 'images/anna-nowak.jpeg',
  },
];

export const getCustomer = (): Customer => {
  return CUSTOMER_MOCKS[Math.floor(Math.random() * 3)];
};
