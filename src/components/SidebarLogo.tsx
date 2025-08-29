export default function SidebarLogo() {
  return (
    <div className="flex  flex-col items-center py-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 80"
        className="w-36 h-12"
      >
        <path
          d="M40 40 L60 60 L100 20"
          stroke="#111"
          strokeWidth="10"
          fill="none"
        />
        <path
          d="M60 40 L80 60 L140 10"
          stroke="#38bdf8"
          strokeWidth="10"
          fill="none"
        />
      </svg>
      <h1 className="text-4xl font-light font-serif">
        <span className="text-black">we</span>
        <span className="text-sky-400">frame</span>
        <span className="text-black">tech</span>
      </h1>
    </div>
  );
}
