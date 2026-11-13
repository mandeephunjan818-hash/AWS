import { getTeamMembers } from "@/actions/team.actions";
import { getTeamIndex } from "@/actions/teamIndex.actions";
import TeamPageClient from "./TeamPageClient";

// ISR: statically generated, regenerated in the background at most
// once every hour (also revalidated on-demand via revalidatePath
// in your team/teamIndex server actions).
export const revalidate = 3600;

export async function generateMetadata() {
  const { data } = await getTeamIndex();
  return {
    title: data?.metaTitle,
    description: data?.metaDescription,
    keywords: data?.metaKeywords,
    openGraph: {
      title: "AWS Private Finance",
      description: "AWS Private Finance",
      images: {
        url: `https://aws-privatefinance.co.uk/logo-dark.webp`, // Must be an absolute URL
      },
      type: "website",
      url: "https://aws-privatefinance.co.uk/meet-the-team", // Must be an absolute URL
    },
  };
}

export default async function TeamPage() {
  const [{ data: members }, { data: indexData }] = await Promise.all([
    getTeamMembers(),
    getTeamIndex(),
  ]);

  return (
    <TeamPageClient
      members={members || []}
      indexContent={indexData?.content || ""}
    />
  );
}