import { useI18nContext } from '@i18n/i18n-react';

import { ListHeader, OrderListHeaderKeys } from '@types';

export const useListHeaders = () => {
  const { LL } = useI18nContext();

  const headers: ListHeader<OrderListHeaderKeys>[] = [
    {
      id: OrderListHeaderKeys.ORDER_NR,
      name: LL.ORDER_LIST.HEADERS.ORDER_NR(),
    },
    {
      id: OrderListHeaderKeys.CREATED,
      name: LL.ORDER_LIST.HEADERS.CREATED(),
    },
    {
      id: OrderListHeaderKeys.CUSTOMER,
      name: LL.ORDER_LIST.HEADERS.CUSTOMER(),
    },
    {
      id: OrderListHeaderKeys.PRICE,
      name: LL.ORDER_LIST.HEADERS.PRICE(),
    },
    {
      id: OrderListHeaderKeys.STATUS,
      name: LL.ORDER_LIST.HEADERS.STATUS(),
    },
    {
      id: OrderListHeaderKeys.OPTIONS,
      name: LL.ORDER_LIST.HEADERS.OPTIONS(),
    },
  ];

  return {
    headers,
  };
};
