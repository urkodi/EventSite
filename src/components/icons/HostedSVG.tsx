function HostedSVG({ width, height }: { width: string; height: string }) {
    return (
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V20C20 21.1046 19.1046 22 18 22H6C4.89543 22 4 21.1046 4 20V4ZM7 3C6.44772 3 6 3.44772 6 4V20H18V4C18 3.44772 17.5523 3 17 3H7ZM8 7H16V9H8V7ZM8 11H16V13H8V11ZM8 15H13V17H8V15Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  
  export default HostedSVG;
  