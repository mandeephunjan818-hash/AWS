"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Banner from "@/components/Banner";
import ObfuscatedEmailLink from "@/components/ObfuscatedEmailLink";

const sections = [
    { id: "introduction", label: "Introduction" },
    { id: "how-we-collect", label: "How We Collect Data" },
    { id: "what-data", label: "What Data Do We Collect?" },
    { id: "how-we-use", label: "How Do We Use Your Data?" },
    { id: "records-held", label: "Records Held by Us" },
    { id: "your-rights", label: "Your Individual Data Protection Rights" },
    { id: "security", label: "Security & Breach Notifications" },
    { id: "data-transfer", label: "Data Transfer Out of the EU" },
    { id: "conclusion", label: "Conclusion" },
];

export default function PrivacyNotice() {
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
                                Privacy Notice
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
                                GDPR Privacy Notice
                            </div>
                        </div>
                    </aside>

                    <main className="flex-1 min-w-0 px-6 sm:px-10 lg:px-16 py-12 max-w-3xl">
                        <div className="mb-12 pb-8 border-b-2 border-[#0A2B5C]">
                            <p className="text-xs uppercase tracking-[0.2em] text-[#8a7d6a] mb-2">
                                AWS Private Finance
                            </p>
                            <h2 className="text-4xl sm:text-5xl font-bold text-[#0A2B5C] leading-tight tracking-tight">
                                Customer Data<br />Protection
                            </h2>
                            <p className="mt-3 text-base text-[#5a6e80] tracking-wide">(GDPR) Privacy Notice</p>
                        </div>

                        <Section id="introduction" title="Introduction">
                            <p>
                                This privacy statement explains what personal data our firm collects from you through our business
                                relationship and how we will use that data and how you may amend the data we hold. The processing of your
                                data is necessary as you are asking the firm to take specific steps, (in your interests), by entering into
                                a contract with us to source a mortgage, finance and/or an insurance product for you.
                            </p>
                            <p className="mt-4">
                                Without the data being provided we cannot carry out the high level of service we wish to provide. We have
                                a legitimate interest in the collection of your data which is necessary to enable us to complete any
                                contractual arrangements and personalise your experience with us as described above and below.
                            </p>
                        </Section>

                        <Section id="how-we-collect" title="How We Collect Data">
                            <p>
                                Your information may be passed onto us from a third party with your knowledge and permission, who may ask
                                our firm to contact you by either telephone, text message, letter, email, social media, fax, or by you
                                making enquiries to our website.
                            </p>
                            <p className="mt-4">
                                The reasons we collect data from you is so that we can source a more relevant and suitable mortgage, loan,
                                finance and/or insurance product(s) for you, or to make introductions to other firms where we do not have
                                access to certain products ourselves.
                            </p>
                            <p className="mt-4">
                                Our firm can collect data via its website using <strong className="text-[#0A2B5C]">"cookies"</strong>{" "}
                                which are small text files that can be read by the web server in the domain that puts the cookie on your
                                computer's hard drive. We may use cookies to store your preferences and settings which help you when
                                accessing our website. You have the option to accept, block or delete cookies when accessing our website
                                to personalise your experience with us.
                            </p>
                        </Section>

                        <Section id="what-data" title="What Data Do We Collect?">
                            <p>
                                To enable us to source the most effective product(s) for you, we need to collect data about you, your
                                family, including your children (the data being limited and for information purposes only). They will not
                                form part of any contract with us. Your occupations, income and expenditure, financial commitments
                                including credit facilities and bank details you hold as well as any mortgages and insurances that you may
                                hold.
                            </p>
                            <p className="mt-4">
                                We may ask details of your health, medical history and ethnic origin if discussing various insurances with
                                you. You have a duty to provide us with accurate information.
                            </p>
                            <p className="mt-4">
                                We will also need to know of any third-party relationships you hold with any industry connections such as
                                your Bank, Lenders, Insurers, Solicitors, Conveyancers, Will Writers, Surveyors, Estate
                                Agents/Management Agents and Accountants, so we may liaise with them on related issues to improve the
                                service we provide to you. This information is stored within our Data Base.
                            </p>
                        </Section>

                        <Section id="how-we-use" title="How Do We Use Your Data?">
                            <div className="space-y-4 text-[#3a3530]">
                                <p>
                                    Our firm's aim is to source the most suitable product(s) for you from many product providers available
                                    to us which necessitates our firm to pass on the data we have collected about you to various controlled
                                    affiliated third parties, using third party software to compare and research various products for you.
                                    This requires us to share your data with controlled third-party affiliates to obtain the best possible
                                    product for you. The product providers are firms such as Lenders, Packagers, Insurance facilitators and
                                    Insurance firms so that we can find the most suitable product for your benefit. In relation to our fees
                                    we have agreed with you, we will collect this from you, or we may pass on details to Mortgage Force Ltd
                                    to process your Bank/Credit card details so that they may collect the fee on our behalf.
                                </p>
                                <p>
                                    We may also obtain some information from third parties, for example, credit checks, information from
                                    your employer, and searches of information in the public domain such as the voters roll. We may use
                                    technology solutions to assist in the collection of your Personal Data — for example software that can
                                    verify your credit status. We will only do this if we have consent from you for us or our nominated
                                    processor to access your information in this manner. When completing electronic ID checks, we would not
                                    require your consent but will inform you of how such software operates and the purpose for which it is
                                    used.
                                </p>
                                <p>
                                    We are required by law and our regulators to "know and verify our customers" which requires us to check
                                    the identification and addresses of our customers to protect the industry against fraud, which benefits
                                    everyone. We will use the data provided to us to make checks using legitimate third-party software to
                                    verify your identity and your address. We can also ask third party compliance firms to assess our
                                    performance to ensure we carry out our duties to adhere to regulatory requirements, which helps you to
                                    have the confidence that the firm is providing the best possible overall service to you. These are
                                    regulatory requirements we must abide by.
                                </p>
                                <p>
                                    We will record and store your personal data in our paper files, mobile devices and on our computer
                                    systems (websites, email, hard drives, and cloud facilities). This information can only be accessed by
                                    employees and consultants within our Firm and only when it is necessary to provide our service to you
                                    and to perform any administration tasks associated with or incidental to that service.
                                </p>
                                <p>
                                    We will submit your personal data to product providers where you have agreed to progress your enquiry
                                    to an application both in paper form and on-line via a secure portal. The provision of this information
                                    to a third party is essential in allowing us to progress any enquiry or application made on your behalf
                                    and to deal with any additional questions or administrative issues that lenders and providers may raise.
                                </p>
                                <p>
                                    On occasions and with your permission, we may introduce your details to other firms so that they may
                                    make a recommendation to you. You will be aware of this introduction before such an introduction is
                                    made. In the course of your dealings with us, we may be required to pass on your data to other
                                    third-party firms within our industry, such as Banks, Solicitors, Conveyancers, Will Writers,
                                    Surveyors, Accountants and other Financial Advisers to assist you with your connected financial
                                    products or products not available to us. You will be aware of such introductions. Our aim is to simply
                                    share your personal data for the purpose of progressing your enquiry. We do not provide permission for
                                    any third party with whom we deal with to send you marketing or promotional messages.
                                </p>
                                <p>
                                    Our firm's aim is to build up a long-term relationship with you to ensure you receive the best possible
                                    service from us, which is likely to necessitate us communicating with you at varying times by either
                                    telephone, text message, letter, email, social media, or by fax. We will contact you to review the
                                    products previously organised for you when that product reaches maturity, or some external influence
                                    affects the advice previously given where an alternative product may benefit you. We will inform you of
                                    any developments in relation to those products and/or policies of which we might become aware.
                                </p>
                                <p>
                                    We will discuss organising the optional updated advice service with you. We normally review the
                                    products we have helped organise every{" "}
                                    <strong className="text-[#0A2B5C]">two to five years</strong>. You have the option at any time to
                                    accept such an invitation or not.
                                </p>
                            </div>
                        </Section>

                        <Section id="records-held" title="Records Held by Us">
                            <p>
                                Our firm has an industry requirement under regulation by the Financial Conduct Authority and the
                                Information Commissioner to make available the data we hold about you to them if we are called upon to do
                                so. We are also required by them to hold records containing your data for at least{" "}
                                <strong className="text-[#0A2B5C]">six years</strong> after the mortgage or insurance term reaches
                                maturity.
                            </p>
                            <p className="mt-4">
                                In the event of a complaint we may be required to provide your details to the Financial Ombudsman
                                Service, our Professional Indemnity Insurers and the Financial Services Compensation Scheme.
                            </p>
                        </Section>

                        <Section id="your-rights" title="Your Individual Data Protection Rights">
                            <div className="space-y-4 text-[#3a3530]">
                                {[
                                    {
                                        right: "Right to be Informed",
                                        desc: 'By way of this "privacy notice", of our obligations to provide transparency as to how we use your personal data.',
                                    },
                                    {
                                        right: "Right of Access",
                                        desc: "To obtain confirmation that your data is being processed and have a right to access your data.",
                                    },
                                    {
                                        right: "Right to Rectification",
                                        desc: "You have a right to have data collected rectified if inaccurate or incomplete. If we have passed inaccurate information to other third parties, we will notify them of this anomaly and request they correct it.",
                                    },
                                    {
                                        right: "Right to Portability",
                                        desc: "You have the right to have your data ported to other organisations within the UK and European Union.",
                                    },
                                    {
                                        right: "Right to Erasure",
                                        desc: "Individuals have the right to have their personal data erased.",
                                    },
                                    {
                                        right: "Right to Object",
                                        desc: "You have the right to object to the processing of your data. You also have the right to request we stop using your data for marketing purposes.",
                                    },
                                    {
                                        right: "Right to Restrict or Block",
                                        desc: "You have the right to restrict or block the processing of your data under certain circumstances such as when you contest the accuracy of the data. We can store the data, but not process it.",
                                    },
                                ].map((item, i) => (
                                    <div key={i} className="md:flex block gap-4 items-start">
                                        <span className="mt-1 w-2 h-2 rounded-full bg-[#0A2B5C] shrink-0" />
                                        <div>
                                            <span className="font-semibold text-[#0A2B5C]">{item.right} — </span>
                                            {item.desc}
                                        </div>
                                    </div>
                                ))}

                                <p className="mt-2">
                                    The rules require our firm to provide safeguards for individuals against the risk that a potentially
                                    damaging decision is taken without human intervention where automated decision-making facilities are
                                    used by our firm. We do take automated decisions within our firm.
                                </p>
                                <p>
                                    All the above rights are{" "}
                                    <strong className="text-[#0A2B5C]">free of charge</strong> to a customer except in instances where
                                    requests are manifestly unfounded or excessive. All requests will be completed within a maximum of{" "}
                                    <strong className="text-[#0A2B5C]">30 days</strong>.
                                </p>
                            </div>

                            <div className="mt-6 bg-[#0A2B5C] text-white rounded-xl p-6">
                                <h3 className="text-base font-bold tracking-wide mb-4 uppercase text-[#a8bdd0]">
                                    Exercise Your Rights — Contact
                                </h3>
                                <div className="space-y-3 text-sm">
                                    <ContactRow label="Data Controller">
                                        Intra Private Finance{"\n"}4th Floor, Sunshine House{"\n"}7 Cutler Street, London, EI 7DJ
                                    </ContactRow>
                                    <ContactRow label="ICO Website">
                                        <Link
                                            href="https://ico.org.uk/concerns/"
                                            target="_blank"
                                            className="underline underline-offset-2 hover:text-[#a8bdd0]"
                                        >
                                            https://ico.org.uk/concerns/
                                        </Link>
                                    </ContactRow>
                                    <ContactRow label="ICO Helpline">
                                        <Link href="tel:03031231113" className="underline underline-offset-2 hover:text-[#a8bdd0]">
                                            0303 123 1113
                                        </Link>
                                    </ContactRow>
                                    <ContactRow label="ICO Post">
                                        Information Commissioner's Office{"\n"}Wycliffe House, Water Lane{"\n"}Wilmslow, Cheshire, SK9 SAF
                                    </ContactRow>
                                </div>
                            </div>
                        </Section>

                        <Section id="security" title="Security &amp; Breach Notifications">
                            <div className="space-y-4 text-[#3a3530]">
                                <p>
                                    The Data Protection rules require all organisations to report certain types of data protection breaches
                                    to the relevant supervisory authority and in some cases to the individuals affected.
                                </p>
                                <p>
                                    We have procedures in place to detect, report and investigate a personal data breach. Certain types of
                                    data breaches must be made to the Information Commissioners Organisation (ICO), and in some cases, to
                                    you the individual within <strong className="text-[#0A2B5C]">72 hours</strong> of its discovery. We
                                    are required to notify the ICO of a breach where it is likely to result in a risk to the rights and
                                    freedoms of you the individual — for instance, it could result in discrimination, damage to reputation,
                                    financial loss, loss of confidentiality or any other significant economic or social disadvantage. Where
                                    a breach is likely to result in a high risk to your rights and freedoms, we will notify you.
                                </p>
                                <p>
                                    We keep your data secure by operating secure passwords on various computer programmes and back up data
                                    to ensure it is secure. We will take reasonable steps to safeguard your Personal Data against it being
                                    accessed unlawfully or maliciously by a third party.
                                </p>
                                <p>
                                    We also expect you to take reasonable steps to safeguard your own privacy when transferring information
                                    to us, such as not sending confidential information over unprotected email, ensuring email attachments
                                    are password protected or encrypted and only using secure methods of postage when original
                                    documentation is being sent to us. You can safely send documents to us using a{" "}
                                    <strong className="text-[#0A2B5C]">"Client Portal"</strong> — ask your adviser for details.
                                </p>
                            </div>
                        </Section>

                        <Section id="data-transfer" title="Data Transfer Out of the European Union">
                            <p>
                                Personal data may only be transferred outside of the EU in compliance with the conditions for transfer
                                set out in Chapter V of the GDPR. The recipient firm of the data must have adequate safeguards and
                                controls in place before the data is transferred to them.
                            </p>
                        </Section>

                        <Section id="conclusion" title="Conclusion">
                            <p>
                                We hope this document is useful to you and will help you understand how we handle your data and explain
                                the uses to which it is put. The information we receive helps us to source the most suitable deals for
                                you and enables us to provide a better service to you.
                            </p>
                            <p className="mt-4">
                                If you have any queries in relation to this document, please contact the Data Controller, whose details
                                are above.
                            </p>
                        </Section>

                        <div className="mt-16 pt-6 border-t border-[#d0c8bb] text-xs text-[#9a8f7e] flex flex-wrap justify-between gap-2">
                            <span>AWS Private Finance Ltd — FCA Reg: 1014991 · ICO Reg: ZA579532</span>
                            <span>
                                <ObfuscatedEmailLink className="hover:underline" /> · (0)204 553 9750
                            </span>
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