import DashboardHeader from "@/lib/DashboardHeader";
import HealthForm from "../components/HealthForm";

export default function Page() {
  return (
    <>
      <DashboardHeader text="Add Health Care" url="/aws-backend/health" />
      <HealthForm initialData={null} />
    </>
  );
}
