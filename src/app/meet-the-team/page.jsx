import { getTeamMembers } from "@/actions/team.actions";
import { getTeamIndex } from "@/actions/teamIndex.actions";
import Banner from "@/components/Banner";
import Image from "next/image";

export async function generateMetadata() {
  const { data } = await getTeamIndex();
  return {
    title: data?.metaTitle,
    description: data?.metaDescription,
    keywords: data?.metaKeywords,
    openGraph: {
      title: 'AWS Private Finance',
      description: 'AWS Private Finance',
      images:
      {
        url: `https://aws-privatefinance.co.uk/logodark.webp`, // Must be an absolute URL
      },
      type: 'website',
    },
  };
}

export default async function TeamPage() {
  // Comment out dynamic data for now
  // const [{ data }, indexData] = await Promise.all([
  //   getTeamMembers(),
  //   getTeamIndex(),
  // ]);

  const indexData = await getTeamIndex();

  const teamCategories = [
    {
      title: "AWS Financial Leadership",
      description: "Meet our executive team leading AWS Financial Services",
      bgColor: "bg-blue-50",
      titleColor: "text-blue-900",
      members: [
        {
          name: "Ashley Slade",
          designation: "Managing Partner",
          image: "/team/Ashley Slade.png",
          company: "AWS",
        },
        {
          name: "Scott Cossington",
          designation: "Operations Director",
          image: "/team/Scott Cossington.png",
          company: "AWS",
        },
      ],
    },
    {
      title: "Brokers",
      description: "Our experienced mortgage and protection advisors",
      bgColor: "bg-green-50",
      titleColor: "text-green-900",
      members: [
        {
          name: "Fred Barham",
          designation: "Senior Partner (Mortgage & Protection Advisor)",
          image: "/team/fred.webp",
          company: "AWS",
        },
        {
          name: "Joel Callen",
          designation: "Mortgage & Protection Advisor",
          image: "/team/Joel.jpg",
          company: "AWS",
        },
        {
          name: "Josh Dixon",
          designation: "Senior Mortgage & Protection Advisor",
          image: "/team/josh.webp",
          company: "AWS",
        },
        {
          name: "Luke Ainsworth",
          designation: "Mortgage & Protection Advisor",
          image: "/team/Luke Ainsworth.png",
          company: "AWS",
        },
        {
          name: "Max Brown",
          designation: "Mortgage & Protection Advisor",
          image: "/team/Maxwell Brown.png",
          company: "AWS",
        },
        {
          name: "Ravi Joshi",
          designation: "Associate Partner (Mortgage & Protection Advisor)",
          image: "/team/ravi.webp",
          company: "AWS",
        },
        {
          name: "Thomas Routledge",
          designation: "Mortgage & Protection Advisor",
          image: "/team/Thomas Routledge.png",
          company: "AWS",
        },
      ],
    },
    {
      title: "Paraplanners",
      description: "Our specialized financial planning experts",
      bgColor: "bg-purple-50",
      titleColor: "text-purple-900",
      members: [
        {
          name: "Jamie Johnston",
          designation: "Senior Paraplanner",
          image: "/team/jamie.webp",
          company: "AWS",
        },
        {
          name: "Rajan Joshi",
          designation: "Paraplanner",
          image: "/team/rajan.webp",
          company: "AWS",
        },
      ],
    },
    {
      title: "Admin Team",
      description: "Our dedicated administrative professionals",
      bgColor: "bg-orange-50",
      titleColor: "text-orange-900",
      members: [
        {
          name: "Christine Eyres",
          designation: "Admin Team Leader",
          image: "/team/Christine Eyres.png",
          company: "AWS",
        },
        {
          name: "Chelsea Lister",
          designation: "Mortgage & Protection Administrator",
          image: "/team/Chelsea Lister.png",
          company: "AWS",
        },
        {
          name: "Kate Sellars",
          designation: "Mortgage & Protection Administrator",
          image: "/team/Kate-Sellars.webp",
          company: "AWS",
        },
        {//photo
          name: "Ella Piggott",
          designation: "Mortgage & Protection Administrator",
          image: "/team/Ella Piggott.png",
          company: "AWS",
        },
        {//photo
          name: "Emily Putnam",
          designation: "Mortgage & Protection Administrator",
          image: "/team/Emily Putnum.png",
          company: "AWS",
        },
        // {
        //   name: "Sameena Williamson",
        //   designation: "Mortgage & Protection Administrator",
        //   image: "/team/Sameena.jpg",
        //   company: "AWS",
        // },
      ],
    },
    {
      title: "Support Team",
      description: "Our support and coordination specialists",
      bgColor: "bg-indigo-50",
      titleColor: "text-indigo-900",
      members: [
        {
          name: "Joanne Hughes",
          designation: "PA Support to MD, Finance & HR",
          image: "/team/Jo Hughes.png",
          company: "AWS",
        },
        {
          name: "Roger Hughes",
          designation: "Sales & Leads Co-Ordinator",
          image: "/team/Roger Hughes.png",
          company: "AWS",
        },
      ],
    },
  ];

  return (
    <>
      <Banner />
      <div className="bg-gray-50 min-h-screen">
        <section className="section-container py-16">
          {indexData.data.content && (
            <div
              className="editor-container mb-12 max-w-4xl mx-auto text-center"
              dangerouslySetInnerHTML={{
                __html: indexData?.data?.content || "",
              }}
            ></div>
          )}

          <div className="space-y-16">
            {teamCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`${category.bgColor} rounded-2xl p-8`}
              >
                <div className="text-center mb-10">
                  <h2
                    className={`text-3xl font-medium underlines underline-offset-8 decoration-[1.5px] ${category.titleColor} mb-3`}
                  >
                    {category.title}
                  </h2>
                </div>

                <div
                  className={`${category.members.length === 6
                    ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-4 [&>*:nth-child(5)]:lg:col-start-2 [&>*:nth-child(6)]:lg:col-start-3"
                    : category.members.length <= 2
                      ? "grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
                      : category.members.length <= 3
                        ? "grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                        : "grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    }`}
                >
                  {category.members.map((member, memberIndex) => (
                    <div key={memberIndex} className="group overflow-hidden">
                      <Image
                        className="h-96 w-full rounded-md object-cover object-top transition-all duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl"
                        src={member.image}
                        alt={member.name}
                        width="826"
                        height="1239"
                      />
                      <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                        <div className="flex justify-center">
                          <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                            {member.name}
                          </h3>
                        </div>
                        <div className="mt-1 flex items-center justify-center">
                          <span className="text-center text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                            {member.designation}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
