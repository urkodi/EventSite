export default function ServerError() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[var(--color-whiteblue)] overflow-hidden">

      {/* Background soft circles */}
      <div className="absolute w-96 h-96 rounded-full bg-[var(--color-vanilla)] opacity-30 top-10 -left-20 blur-xl"></div>
      <div className="absolute w-80 h-80 rounded-full bg-[var(--color-lightermoonstone)] opacity-30 bottom-10 -right-10 blur-xl"></div>

      {/* Main content card */}
      <div className="relative bg-lightermoonstone/40 backdrop-blur-md border border-white/30 rounded-3xl shadow-xl px-24 py-20 text-center z-10 max-w-4xl w-full mx-auto">

        {/* Glow behind icon */}
        <div className="absolute w-48 h-48 rounded-full bg-[var(--color-moonstone)] opacity-20 blur-3xl left-1/2 top-10 -translate-x-1/2"></div>

        {/* warning icon */}
        <div className="w-28 h-28 mx-auto mb-6 relative">
          <div className="absolute inset-0 bg-[var(--color-darkervanilla)] rounded-lg opacity-20 blur-xl"></div>
          <div className="relative w-full h-full bg-gradient-to-b from-[var(--color-darkervanilla)] to-[var(--color-vanilla)] rounded-xl shadow-lg flex items-center justify-center">
            <span className="text-[var(--color-moonstone)] text-5xl font-extrabold">!</span>
          </div>
        </div>

        {/* Error code */}
        <h1 className="text-7xl font-extrabold text-[var(--color-moonstone)] mt-2">
          500
        </h1>

        {/* Subtitle */}
        <p className="text-2xl font-semibold text-[var(--color-darkervanilla)] mt-3">
          Internal Server Error
        </p>

        {/* Description */}
        <p className="mt-4 text-xl font-semibold text-[var(--color-moonstone)]/85 leading-relaxed max-w-lg mx-auto">
          Something went wrong on our end.  
          Our team is already investigating the issue.  
          Please try refreshing the page or come back shortly.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block mt-8 px-8 py-3 bg-[var(--color-moonstone)] text-white rounded-xl shadow-md hover:bg-[var(--color-lightermoonstone)] transition"
        >
          Return Home
        </a>
      </div>
    </div>
  );
}
