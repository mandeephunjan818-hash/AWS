"use client";

import Banner from "@/components/Banner";
import Image from "next/image";

const COLOR_THEMES = [
    { bgColor: "bg-blue-50", titleColor: "text-blue-900" },
    { bgColor: "bg-green-50", titleColor: "text-green-900" },
    { bgColor: "bg-purple-50", titleColor: "text-purple-900" },
    { bgColor: "bg-orange-50", titleColor: "text-orange-900" },
    { bgColor: "bg-indigo-50", titleColor: "text-indigo-900" },
];

// `members` arrives pre-sorted by { teamOrder, order } from the DB query,
// so grouping in insertion order preserves both the team order and each
// person's order within their team — no client-side sorting needed.
function groupMembersByTeam(members = []) {
    const grouped = new Map();

    for (const member of members) {
        const key = member.team || "Team";
        if (!grouped.has(key)) grouped.set(key, []);
        grouped.get(key).push(member);
    }

    return Array.from(grouped.entries()).map(([title, teamMembers], index) => ({
        title,
        members: teamMembers,
        ...COLOR_THEMES[index % COLOR_THEMES.length],
    }));
}

export default function TeamPageClient({ members, indexContent }) {
    const teamCategories = groupMembersByTeam(members);

    return (
        <>
            <link
                rel="canonical"
                href={`https://aws-privatefinance.co.uk/meet-the-team`}
            />
            <Banner />
            <div className="bg-gray-50 min-h-screen">
                <section className="section-container py-16">
                    {indexContent && (
                        <div
                            className="editor-container mb-12 max-w-4xl mx-auto text-center"
                            dangerouslySetInnerHTML={{ __html: indexContent }}
                        ></div>
                    )}

                    <div className="space-y-16">
                        {teamCategories.map((category, categoryIndex) => (
                            <div
                                key={category.title || categoryIndex}
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
                                    className={`${
                                        category.members.length === 6
                                            ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-4 [&>*:nth-child(5)]:lg:col-start-2 [&>*:nth-child(6)]:lg:col-start-3"
                                            : category.members.length <= 2
                                            ? "grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-2xl mx-auto"
                                            : category.members.length <= 3
                                            ? "grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                                            : "grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                                    }`}
                                >
                                    {category.members.map((member) => (
                                        <div key={member._id} className="group overflow-hidden">
                                            <Image
                                                className="h-96 w-full rounded-md object-cover object-top transition-all duration-500 group-hover:h-[22.5rem] group-hover:rounded-xl"
                                                src={member.image}
                                                alt={member.imageAlt || member.name}
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