import { getHealthById } from "@/actions/health.actions";
import DashboardHeader from "@/lib/DashboardHeader";
import HealthForm from "../../components/HealthForm";

export default async function EditHealth({ params }) {
  const paramsId = await params;
  const { data } = await getHealthById(paramsId.id);
  return (
    <>
      <DashboardHeader text="Edit Health Care" url="/aws-backend/health" />
      <HealthForm initialData={data} />
    </>
  );
}
