export function X({
  fill = '#F7F7F8',
  ...props
}: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_597_6870)">
        <path
          d="M15.2036 1.875H17.9614L11.9379 8.75781L19.0239 18.125H13.477L9.12933 12.4453L4.16058 18.125H1.39886L7.84027 10.7617L1.0473 1.875H6.7348L10.6606 7.06641L15.2036 1.875ZM14.2348 16.4766H15.7621L5.90277 3.4375H4.26215L14.2348 16.4766Z"
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id="clip0_597_6870">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function XGradient(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.2031 0.875H16.9609L10.9375 7.75781L18.0234 17.125H12.4766L8.12891 11.4453L3.16016 17.125H0.398438L6.83984 9.76172L0.046875 0.875H5.73437L9.66016 6.06641L14.2031 0.875ZM13.2344 15.4766H14.7617L4.90234 2.4375H3.26172L13.2344 15.4766Z"
        fill="url(#paint0_linear_698_1041)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_698_1041"
          x1="9.03515"
          y1="17.9375"
          x2="8.80718"
          y2="0.0654081"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#82E4A3" />
          <stop offset="0.5" stopColor="#E48290" />
          <stop offset="1" stopColor="#8C84F7" />
        </linearGradient>
      </defs>
    </svg>
  )
}
