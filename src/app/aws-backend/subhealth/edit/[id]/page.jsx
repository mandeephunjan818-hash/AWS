import DashboardHeader from "@/lib/DashboardHeader";
import SubHealthForm from "../../components/SubHealthForm";
import { getHealthNames } from "@/actions/health.actions";
import { getSubHealthById } from "@/actions/subHealth.actions";

export default async function EditSubHealth({ params }) {
    const paramsId = await params;
    const [{ data }, categories] = await Promise.all([
        getSubHealthById(paramsId.id),
        getHealthNames(),
    ]);
    return (
        <>
            <DashboardHeader
                text="Edit Sub Health Care"
                url="/aws-backend/subhealth"
            />
            <SubHealthForm initialData={data} categories={categories.data} />
        </>
    );
}