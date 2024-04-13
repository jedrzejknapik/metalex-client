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
      d="M21 12V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"
    />
    <path
      stroke="currentColor"
      d="M20.879 16.917c.494.304.463 1.043-.045 1.101l-2.567.291-1.151 2.312c-.228.46-.933.234-1.05-.334l-1.255-6.116c-.099-.48.333-.782.75-.525l5.318 3.271Z"
    />
  </svg>
);

const SvgSelect = memo((props: SVGProps<SVGSVGElement>) => (
  <Svg
    {...props}
    style={{
      ...wrapperStyles,
      ...(props.style || {}),
    }}
  />
));

SvgSelect.displayName = 'SvgSelect';

export default SvgSelect;
