import Layout from "../components/Layout";
import Link from 'next/link';
import { Settings, Workflow, Layout as LayoutIcon, Database, Users, Cpu, Code2, ArrowRight } from 'lucide-react';

const SoftwareIntegration = () => {
    return (
        <Layout title="Software Integration - Annship" description="Seamlessly integrate Annship with your existing software ecosystem.">
            {/* Hero Section */}
            <div className="bg-secondary text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/90"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            Custom Software Solutions
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Tailored software integrations to streamline your unique business workflows. We build the bridges between your systems.
                        </p>
                        <Link href="/contact-us" className="inline-flex items-center px-8 py-4 bg-accent hover:bg-accent-hover text-white font-bold rounded-lg transition-colors shadow-lg shadow-accent/25">
                            Consult with an Expert
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Solutions Section */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-secondary mb-6">Seamless ERP & CRM Integration</h2>
                            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                                Connect Annship directly with your existing ERP (SAP, Oracle, NetSuite) or CRM (Salesforce, HubSpot). Eliminate manual data entry and reduce errors.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Automated Order Syncing",
                                    "Two-way Inventory Updates",
                                    "Customer Data Synchronization",
                                    "Custom Reporting & Analytics"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-surface rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                                <Database className="h-8 w-8 text-accent mb-4" />
                                <h3 className="font-bold text-secondary">Data Sync</h3>
                            </div>
                            <div className="p-6 bg-surface rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                                <Workflow className="h-8 w-8 text-accent mb-4" />
                                <h3 className="font-bold text-secondary">Automation</h3>
                            </div>
                            <div className="p-6 bg-surface rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                                <LayoutIcon className="h-8 w-8 text-accent mb-4" />
                                <h3 className="font-bold text-secondary">Dashboards</h3>
                            </div>
                            <div className="p-6 bg-surface rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow">
                                <Settings className="h-8 w-8 text-accent mb-4" />
                                <h3 className="font-bold text-secondary">Configurable</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="bg-surface py-24 border-t border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-secondary">Our Integration Process</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { title: "Discovery", desc: "We analyze your current stack and requirements.", icon: <Users /> },
                            { title: "Design", desc: "We architect a custom solution for your workflow.", icon: <LayoutIcon /> },
                            { title: "Development", desc: "Our engineers build and test the integration.", icon: <Code2 /> },
                            { title: "Deployment", desc: "Seamless launch with ongoing support.", icon: <Cpu /> }
                        ].map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-accent mb-6 border border-purple-100 group-hover:scale-110 transition-transform">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                                    <p className="text-slate-600">{step.desc}</p>
                                </div>
                                {index < 3 && (
                                    <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-10"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default SoftwareIntegration;
