import React from 'react'

type SatelliteProps = {
  withGradient?: boolean
} & React.SVGProps<SVGSVGElement>

export default function Satellite({ withGradient, ...props }: SatelliteProps) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 3.75C17.5 5.13071 16.3807 6.25 15 6.25V10.6106L16.2614 11.872C16.5869 12.1974 16.5869 12.7251 16.2614 13.0505C15.0293 14.2826 13.4752 14.9964 11.87 15.1919L12.3429 17.0835H13.3333C13.7936 17.0835 14.1667 17.4566 14.1667 17.9168C14.1667 18.3771 13.7936 18.7502 13.3333 18.7502H3.33333C2.8731 18.7502 2.5 18.3771 2.5 17.9168C2.5 17.4566 2.8731 17.0835 3.33333 17.0835H4.44452L5.75581 13.1496C5.72192 13.117 5.68826 13.0839 5.65484 13.0505C2.72591 10.1216 2.72591 5.37284 5.65484 2.44391C5.98028 2.11847 6.50792 2.11847 6.83336 2.44391L8.13945 3.75H12.5C12.5 2.36929 13.6193 1.25 15 1.25C16.3807 1.25 17.5 2.36929 17.5 3.75ZM13.75 3.75C13.75 4.44036 14.3096 5 15 5C15.6904 5 16.25 4.44036 16.25 3.75C16.25 3.05964 15.6904 2.5 15 2.5C14.3096 2.5 13.75 3.05964 13.75 3.75ZM13.1366 5.41667H9.80611L13.3333 8.94389V5.61342C13.2642 5.55152 13.1985 5.48583 13.1366 5.41667ZM7.1575 14.215C8.08846 14.7629 9.11233 15.0927 10.1551 15.2044L10.6249 17.0835H6.20134L7.1575 14.215ZM7.10132 5.0689C6.67096 4.63854 5.95156 4.68928 5.68992 5.2388C4.65811 7.4059 5.03926 10.0779 6.83336 11.872C8.62746 13.6661 11.2995 14.0472 13.4666 13.0154C14.0161 12.7538 14.0668 12.0344 13.6365 11.604L7.10132 5.0689Z"
        fill={`url(#paint0_linear_3152_1180_${withGradient ? 'gradient' : 'no_gradient'})`}
      />
      <defs>
        <linearGradient
          id={`paint0_linear_3152_1180_${withGradient ? 'gradient' : 'no_gradient'}`}
          x1="10"
          y1="18.7502"
          x2="9.72004"
          y2="1.25448"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={withGradient ? '#82E4A3' : 'currentColor'} />
          <stop offset="0.5" stopColor={withGradient ? '#E48290' : 'currentColor'} />
          <stop offset="1" stopColor={withGradient ? '#8C84F7' : 'currentColor'} />
        </linearGradient>
      </defs>
    </svg>
  )
}
