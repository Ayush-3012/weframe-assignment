import LowerDashboard from "@/components/layout/dashboard-components/LowerDashboard";
import UpperDashboard from "@/components/layout/dashboard-components/UpperDashboard";

export default function Home() {
  return (
    <>
      <div className="flex flex-col h-screen p-4">
        <UpperDashboard />
        <LowerDashboard />
      </div>
    </>
  );
}
