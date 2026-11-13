"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Banner from "@/components/Banner";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "how-to-complain", label: "How to Make a Complaint" },
    { id: "what-happens-next", label: "What Happens Next?" },
    { id: "forwarded-complaints", label: "Forwarded Complaints" },
    { id: "contact-information", label: "Complaints Handling Contact Information" },
    { id: "further-support", label: "Further Support" },
];

export default function ComplaintsPolicy() {
    const [activeSection, setActiveSection] = useState("introduction");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        const headings = document.querySelectorAll("[data-section]");
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.getAttribute("data-section"));
                    }
                });
            },
            { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
        );
        headings.forEach((h) => observerRef.current.observe(h));
        return () => observerRef.current?.disconnect();
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        setSidebarOpen(false);
    };

    return (
        <>
            <Banner />
            <div className="min-h-screen text-[#1a1a1a]">
                <header className=" bg-[#0A2B5C] shadow-md">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                        <div>
                            <span className="text-white text-lg font-bold tracking-widest uppercase">
                                AWS Private Finance
                            </span>
                            <span className="ml-3 text-[#a8bdd0] text-xs uppercase tracking-widest hidden sm:inline">
                                Complaints Policy
                            </span>
                        </div>
                        <button
                            className="sm:hidden text-white text-sm border border-white/30 px-3 py-1 rounded"
                            onClick={() => setSidebarOpen((p) => !p)}
                        >
                            {sidebarOpen ? "Close" : "Contents"}
                        </button>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto flex relative">
                    <aside
                        className={`
            ${sidebarOpen ? "block" : "hidden"} sm:block
            fixed sm:sticky top-[64px] sm:top-[100px] left-0 z-40
            w-72 sm:w-64 lg:w-72 h-[calc(100vh-64px)]
            bg-[#0A2B5C] sm:bg-transparent
            sm:bg-[#ede9e1] border-r border-[#d0c8bb]
            overflow-y-auto shrink-0
            sm:h-[calc(100vh-64px)] sm:sticky
          `}
                    >
                        <div className="p-6 pt-8">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#7a8fa0] sm:text-[#8a7d6a] font-semibold mb-5">
                                Contents
                            </p>
                            <nav className="space-y-1">
                                {sections.map((s) => (
                                    <button
                                        key={s.id}
                                        onClick={() => scrollTo(s.id)}
                                        className={`
                    w-full text-left text-sm px-3 py-2.5 rounded transition-all duration-200
                    ${activeSection === s.id
                                                ? "bg-[#0A2B5C] text-white font-semibold sm:bg-[#0A2B5C] sm:text-white"
                                                : "text-white/70 sm:text-[#4a3f30] hover:text-white hover:bg-[#2d3f52] sm:hover:bg-[#0A2B5C]/10 sm:hover:text-[#0A2B5C]"
                                            }
                  `}
                                    >
                                        {s.label}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        <div className="px-6 pb-8 mt-4">
                            <div className="text-[10px] text-white/30 sm:text-[#a0947e] uppercase tracking-widest">
                                <span>Complaints Policy</span>
                            </div>
                        </div>
                    </aside>

                    <main className="flex-1 min-w-0 px-6 sm:px-10 lg:px-16 py-12 max-w-3xl">
                        <div className="mb-12 pb-8 border-b-2 border-[#0A2B5C]">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d6a] mb-2">
                                AWS Private Finance
                            </p>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2B5C] leading-tight tracking-tight">
                                Complaints<br />Policy
                            </h2>
                        </div>

                        <Section id="introduction" number="1" title="Introduction">
                            <p>
                                AWS Private Finance are committed to providing products and services of the highest standard. If for any
                                reason, you feel you are not entirely satisfied with any aspect of our service, please let us know
                                straight away. We are also a member of NACFB and adhere to their Code of Practice.
                            </p>
                            <p className="mt-4">
                                Our Complaints department will investigate your complaint competently, diligently and impartially.
                            </p>
                        </Section>

                        <Section id="how-to-complain" number="2" title="How to Make a Complaint">
                            <p>
                                Firstly, let us know what has happened. You can call us, email us or write to us. Our contact information
                                is detailed at the bottom of this document.
                            </p>
                            <p className="mt-4 font-semibold text-[#0A2B5C]">We will need to know:</p>
                            <ul className="mt-3 space-y-2 text-[#3a3530]">
                                {[
                                    "Your name and address.",
                                    "Your agreement number or policy number as appropriate.",
                                    "Details of how we can contact you.",
                                    "A clear description of your complaint and whether any 3rd party is involved.",
                                    "Details of what you would like us to do to resolve your complaint.",
                                    "If appropriate, copies of any relevant supporting documentation.",
                                ].map((item, i) => (
                                    <li key={i} className="md:flex block items-start gap-3">
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0A2B5C] shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </Section>

                        <Section id="what-happens-next" number="3" title="What Happens Next?">
                            <div className="space-y-4 text-[#3a3530]">
                                <p>
                                    AWS Private Finance aim to resolve all complaints as quickly as possible. We will consider all the
                                    available evidence, the circumstances together with any relevant laws or regulations. We will keep you
                                    regularly updated about what is happening and discuss our findings.
                                </p>
                                <p>
                                    We will contact you within <strong className="text-[#0A2B5C]">three working days</strong> to let you
                                    know we are considering your complaint and clarify any points where necessary. If we can resolve your
                                    complaint within 3 working days, we will send you a <em>Summary Resolution Communication</em> — a
                                    written confirmation that confirms you made a complaint and that we now consider the matter resolved.
                                </p>
                                <p>
                                    Sometimes AWS Mortgages are not able to find a resolution within 3 working days. On these occasions we
                                    will issue you with an initial response letter which outlines the circumstances of your complaint. We
                                    aim to respond to all complainants within <strong className="text-[#0A2B5C]">four weeks</strong>{" "}
                                    although we have <strong className="text-[#0A2B5C]">eight weeks</strong> from the date of receipt of
                                    your complaint to investigate and provide you with our final response.
                                </p>
                                <p>
                                    Sometimes it can take a bit longer to reach a decision. If it is going to take us more than eight weeks
                                    to resolve your complaint, from when you first contacted us, we will update you on our progress and
                                    explain why it is still ongoing.
                                </p>
                                <p>
                                    When we have fully investigated your complaint and reached a decision, we will write to you to let you
                                    know our final response. This is a detailed letter which will tell you what we have found, what we plan
                                    to do and how we came to our decision.
                                </p>
                                <p>
                                    If you are unsatisfied with the outcome of our investigation, the final response letter will explain
                                    that you may have the right to refer your complaint to the Financial Ombudsman Service within{" "}
                                    <strong className="text-[#0A2B5C]">six months</strong> of the final response being issued by AWS
                                    Private Finance.
                                </p>
                                <p className="font-medium text-[#0A2B5C]">
                                    The Ombudsman cannot consider a complaint if the complainant refers it to the Financial Ombudsman
                                    Service:
                                </p>
                                <ul className="space-y-2">
                                    {[
                                        "More than six months after the date on which the respondent sent the complainant its final response, redress determination or summary resolution communication; or",
                                        "More than six years after the event complained of; or (if later) three years from the date on which the complainant became aware (or ought reasonably to have become aware) that he had cause for complaint.",
                                    ].map((item, i) => (
                                        <li key={i} className="md:flex block items-start gap-3">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#0A2B5C] shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p>
                                    We will indicate within the communication whether we consent to waive the relevant time limits as set
                                    out in the FCA handbook (Dispute Resolution) if this is applicable.
                                </p>
                            </div>
                        </Section>

                        <Section id="forwarded-complaints" number="4" title="Forwarded Complaints">
                            <div className="space-y-4 text-[#3a3530]">
                                <p>
                                    Where AWS Private Finance identify a third-party may be solely or jointly responsible for the matters
                                    disclosed within a complaint, we will forward the complaint to the relevant party without delay.
                                </p>
                                <p>
                                    AWS Private Finance will notify the complainant in the form of a 'final response letter' that we have
                                    referred the matter to the third party for investigation. Where AWS Private Finance are jointly
                                    responsible for matters disclosed within a complaint, we will investigate the element relating to us
                                    and we will respond accordingly. Where AWS Private Finance is in receipt of a forwarded complaint, we
                                    will acknowledge the complaint and will apply the standard time limits for a response from the date on
                                    receipt.
                                </p>
                                <p>
                                    If you subsequently decide that you are dissatisfied with the resolution of the complaint, you may be
                                    able to refer the complaint to the Financial Ombudsman Service, ICO or the NACFB dependent upon the
                                    circumstances surrounding the case. The NACFB suggest trying to resolve the complaint directly with us
                                    in the first instance. If the complaint is referred to the NACFB, they will investigate the complaint
                                    competently, diligently and impartially. It is important to be aware, the NACFB have no powers or
                                    sanction relating to any form of compensation.
                                </p>
                            </div>
                        </Section>

                        <Section id="contact-information" number="5" title="Complaints Handling Contact Information">
                            <div className="mt-2 overflow-hidden rounded-lg border border-[#d0c8bb]">
                                <table className="w-full text-sm">
                                    <tbody>
                                        <tr className="bg-[#ede9e1]">
                                            <td className="px-5 py-3.5 font-semibold text-[#0A2B5C] w-44 align-top">Address</td>
                                            <td className="px-5 py-3.5 text-[#3a3530] whitespace-pre-line">
                                                AWS Private Finance{"\n"}4th Floor Sunshine House{"\n"}7 Cutler Street, London{"\n"}EI 7DJ
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-5 py-3.5 font-semibold text-[#0A2B5C] w-44 align-top">Contact Number</td>
                                            <td className="px-5 py-3.5 text-[#3a3530] whitespace-pre-line">02045539750</td>
                                        </tr>
                                        <tr className="bg-[#ede9e1]">
                                            <td className="px-5 py-3.5 font-semibold text-[#0A2B5C] w-44 align-top">Email</td>
                                            <td className="px-5 py-3.5 text-[#3a3530] whitespace-pre-line">
                                                <ObfuscatedEmailLink user="s.cossington" />
                                            </td>
                                        </tr>
                                        <tr className="bg-white">
                                            <td className="px-5 py-3.5 font-semibold text-[#0A2B5C] w-44 align-top">Complaints Manager</td>
                                            <td className="px-5 py-3.5 text-[#3a3530] whitespace-pre-line">Scott Cossington</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </Section>

                        <Section id="further-support" number="6" title="Further Support">
                            <div className="space-y-4 text-[#3a3530]">
                                <p>
                                    If you are not satisfied with how AWS Private Finance dealt with your complaint or you are not happy
                                    with our decision and wish to take it further, you may be able to contact the Financial Ombudsman
                                    Service (FOS) regarding your complaint, provided that the complaint concerns a regulated activity, or
                                    you fall within the classification of an "eligible complainant".
                                </p>

                                <div className="mt-6 bg-[#0A2B5C] text-white rounded-xl p-6">
                                    <h3 className="text-base font-bold tracking-wide mb-4 uppercase text-[#a8bdd0]">
                                        Financial Ombudsman Service — Contact Details
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <ContactRow label="Address">
                                            Financial Ombudsman Service (FOS){"\n"}Exchange Tower{"\n"}London{"\n"}E14 9SR
                                        </ContactRow>
                                        <ContactRow label="Consumer Helpline">
                                            <Link href="tel:08000234567" className="underline underline-offset-2 hover:text-[#a8bdd0]">
                                                0800 023 4567
                                            </Link>{" "}
                                            or{" "}
                                            <Link href="tel:03001239123" className="underline underline-offset-2 hover:text-[#a8bdd0]">
                                                0300 123 9123
                                            </Link>
                                        </ContactRow>
                                        <ContactRow label="Switchboard">
                                            <Link href="tel:02079641000" className="underline underline-offset-2 hover:text-[#a8bdd0]">
                                                0207 964 1000
                                            </Link>
                                        </ContactRow>
                                        <ContactRow label="Fax">0207 964 1001</ContactRow>
                                        <ContactRow label="Email">
                                            <ObfuscatedEmailLink
                                                user="complaint.info"
                                                domain="financial-ombudsman.org.uk"
                                                className="underline underline-offset-2 hover:text-[#a8bdd0] break-all"
                                            />
                                        </ContactRow>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <div className="mt-16 pt-6 border-t border-[#d0c8bb] text-xs text-[#9a8f7e] flex justify-between">
                            <span>AWS Private Finance — Complaints Policy</span>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

function Section({ id, number, title, children }) {
    return (
        <section id={id} data-section={id} className="mb-12 scroll-mt-24">
            <div className="flex items-baseline gap-3 mb-5">
                <span className="text-xs font-bold text-white bg-[#0A2B5C] rounded px-2 py-0.5 shrink-0">
                    {number}
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0A2B5C] tracking-tight leading-snug">
                    {title}
                </h2>
            </div>
            <div className="text-[#3a3530] leading-relaxed text-[0.95rem]">{children}</div>
        </section>
    );
}

function ContactRow({ label, children }) {
    return (
        <div className="md:flex block gap-4">
            <span className="text-[#a8bdd0] font-semibold w-36 shrink-0 md:me-0 me-4">{label}</span>
            <span className="whitespace-pre-line leading-relaxed">{children}</span>
        </div>
    );
}