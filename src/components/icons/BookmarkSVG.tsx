type BookmarkSVGProps = {
  width: string;
  height: string;
  filled?: boolean;
};

function BookmarkSVG({ width, height, filled = false }: BookmarkSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      {filled ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 1C5.34315 1 4 2.34315 4 4V20.9425C4 22.6114 5.92338 23.5462 7.23564 22.5152L12 18.7717L16.7644 22.5152C18.0766 23.5462 20 22.6114 20 20.9425V4C20 2.34315 18.6569 1 17 1H7Z"
          fill="currentColor"
        />
      ) : (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 4C4 2.34315 5.34315 1 7 1H17C18.6569 1 20 2.34315 20 4V20.9425C20 22.6114 18.0766 23.5462 16.7644 22.5152L12 18.7717L7.23564 22.5152C5.92338 23.5462 4 22.6114 4 20.9425V4ZM7 3C6.44772 3 6 3.44772 6 4V20.9425L12 16.2283L18 20.9425V4C18 3.44772 17.5523 3 17 3H7Z"
          fill="currentColor"
        />
      )}
    </svg>
  );
}

export default BookmarkSVG;