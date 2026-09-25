const NotFound = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-6 py-24 sm:py-32 lg:px-8">
      {/* Decorative ambient background glow */}
      <div 
        className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-violet-600/20 via-fuchsia-500/20 to-pink-500/20 blur-3xl"
        aria-hidden="true"
      />

      <div className="text-center">
        {/* Large Status Code */}
        <p className="text-base font-semibold text-fuchsia-500 select-none tracking-wide uppercase">
          404 Error
        </p>
        
        {/* Heading */}
        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          Page not found
        </h1>
        
        {/* Description */}
        <p className="mt-6 text-lg leading-7 text-slate-400 max-w-md mx-auto">
          Sorry, we couldn’t find the page you’re looking for. It might have been moved, deleted, or never existed.
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/"
            className="w-full sm:w-auto rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:from-violet-500 hover:to-fuchsia-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fuchsia-500 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
          >
            Go back home
          </a>
          <a
            href="/support"
            className="w-full sm:w-auto rounded-xl bg-slate-900 border border-slate-800 px-6 py-3 text-sm font-semibold text-slate-300 hover:bg-slate-800 hover:text-white transition-colors duration-200"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
