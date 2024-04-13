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
      d="M12 12h7m0 0-3 3m3-3-3-3M19 6V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
    />
  </svg>
);

const SvgSignOut = memo((props: SVGProps<SVGSVGElement>) => (
  <Svg
    {...props}
    style={{
      ...wrapperStyles,
      ...(props.style || {}),
    }}
  />
));

SvgSignOut.displayName = 'SvgSignOut';

export default SvgSignOut;
