import { useI18nContext } from '@i18n/i18n-react';
import { v4 as uuidv4 } from 'uuid';

import { Sheet } from '@types';

import { useGetSheetFields } from './useGetSheetFields';

import { Summary } from '../../../summary.types';
import { Heading } from '../../../components';

import styles from '../../../styles/sheets.module.scss';

export const useGetSheets = () => {
  const { LL } = useI18nContext();
  const { getSheetFields } = useGetSheetFields();

  const getSheets = (sheets: Sheet[]): Summary | undefined => {
    if (!sheets.length) {
      return;
    }

    return {
      id: uuidv4(),
      hasChildren: true,
      heading: (
        <Heading
          title={LL.ORDER.NEW_ORDER.SUMMARY.FIELDS.POSITIONS.FIELDS.SHEETS.LABEL()}
        />
      ),
      classNames: {
        item: styles.item,
        container: styles.container,
      },
      children: sheets.map((sheet: Sheet) => {
        const fields: Summary[] = getSheetFields(sheet);

        return {
          id: uuidv4(),
          hasChildren: true,
          children: fields,
          classNames: {
            container: styles.subContainer,
          },
        };
      }),
    };
  };

  return {
    getSheets,
  };
};
