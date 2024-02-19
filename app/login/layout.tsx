export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="text-xs" id="background">
      <div className="flex flex-column justify-center items-center h-screen">
        <div
          className="bg-[#171A1C] p-12 rounded-lg w-96 backdrop-blur-md"
          id="bg-card"
        >
          <div className="flex flex-col space-y-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
  