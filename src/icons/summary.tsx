import { memo } from 'react';
import type { SVGProps } from 'react';

const wrapperStyles = {
  transformOrigin: 'center center',
};

const Svg = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    strokeWidth={1.5}
    color="currentColor"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 6h12M6 10h12M13 14h5M13 18h5M2 21.4V2.6a.6.6 0 0 1 .6-.6h18.8a.6.6 0 0 1 .6.6v18.8a.6.6 0 0 1-.6.6H2.6a.6.6 0 0 1-.6-.6Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18v-4h3v4H6Z"
    />
  </svg>
);

const SvgSummary = memo((props: SVGProps<SVGSVGElement>) => (
  <Svg
    {...props}
    style={{
      ...wrapperStyles,
      ...(props.style || {}),
    }}
  />
));

SvgSummary.displayName = 'SvgSummary';

export default SvgSummary;
