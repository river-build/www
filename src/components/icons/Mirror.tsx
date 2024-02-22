export const MirrorGradient = () => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1286_1261)">
        <path
          d="M9.86647 0.313676C9.91088 0.312893 9.95539 0.3125 9.99999 0.3125C10.032 0.3125 10.0641 0.312703 10.096 0.313108C14.1541 0.364674 17.4294 3.68018 17.4294 7.7645V18.8236C17.4294 19.3007 17.0427 19.6875 16.5654 19.6875H3.43453C2.95736 19.6875 2.57056 19.3007 2.57056 18.8236V7.7645C2.57056 3.69277 5.82573 0.385117 9.86647 0.313676ZM17.1346 19.039V7.7645C17.1346 3.81405 13.9412 0.610015 9.99999 0.610015C6.0588 0.610015 2.86539 3.81404 2.86539 7.7645V19.039C2.86539 19.2319 3.02146 19.39 3.21622 19.39H16.7838C16.9793 19.39 17.1346 19.2312 17.1346 19.039ZM16.5096 7.7645V18.765H3.49039V7.7645C3.49039 4.1575 6.4057 1.23501 9.99999 1.23501C13.5943 1.23501 16.5096 4.1575 16.5096 7.7645Z"
          fill="url(#paint0_linear_1286_1261)"
          stroke="url(#paint1_linear_1286_1261)"
          strokeWidth="0.625"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_1286_1261"
          x1="8.50806"
          y1="5.9375"
          x2="17.8831"
          y2="20"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3A3941" stopOpacity="0" />
          <stop offset="1" stopColor="#99CFA0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1286_1261"
          x1="10"
          y1="20"
          x2="9.64579"
          y2="0.00627406"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#82E4A3" />
          <stop offset="0.5" stopColor="#E48290" />
          <stop offset="1" stopColor="#8C84F7" />
        </linearGradient>
        <clipPath id="clip0_1286_1261">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const Mirror = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.152 0.502279C16.2302 0.500762 16.3085 0.5 16.3871 0.5C16.4384 0.5 16.4896 0.500325 16.5407 0.500973C23.0337 0.583478 28.2742 5.88829 28.2742 12.4232V30.1177C28.2742 30.8811 27.6554 31.5 26.8918 31.5H5.88236C5.11889 31.5 4.5 30.8811 4.5 30.1177V12.4232C4.5 5.91564 9.69675 0.627911 16.152 0.502279ZM27.8024 30.4624V12.4232C27.8024 6.10247 22.6931 0.976023 16.3871 0.976023C10.0812 0.976023 4.97173 6.10247 4.97173 12.4232V30.4624C4.97173 30.7711 5.22147 31.024 5.53306 31.024H27.2412C27.554 31.024 27.8024 30.7699 27.8024 30.4624ZM26.8024 12.4232V30.024H5.97173V12.4232C5.97173 6.65201 10.6362 1.97602 16.3871 1.97602C22.138 1.97602 26.8024 6.652 26.8024 12.4232Z"
        fill="url(#paint0_linear_1286_923)"
        stroke="#959499"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1286_923"
          x1="14"
          y1="9.5"
          x2="29"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#3A3941" stopOpacity="0" />
          <stop offset="1" stopColor="#3A3941" />
        </linearGradient>
      </defs>
    </svg>
  )
}
