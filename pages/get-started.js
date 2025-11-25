import React, { useState } from 'react';
import Layout from '../components/Layout';
import { ArrowRight, Check, ChevronLeft, Plus, Package, Truck, Globe, Building2, User, Warehouse, X, Zap, Scale, Layers, Info, Feather, Box, Dumbbell, Container, UserX, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Helper Components
const FedExLogo = () => (
    <img src="/annship-home/logos/fedex.png" alt="FedEx" className="h-8 w-auto object-contain" />
);

const UPSLogo = () => (
    <img src="/annship-home/logos/ups.png" alt="UPS" className="h-8 w-auto object-contain" />
);

const USPSLogo = () => (
    <img src="/annship-home/logos/usps.png" alt="USPS" className="h-8 w-auto object-contain" />
);

const SelectionCard = ({ selected, onClick, label, icon: Icon, className = "" }) => (
    <motion.div
        whileHover={{ y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`
            relative p-8 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col items-center justify-center text-center h-full bg-white
            ${selected
                ? 'border-primary ring-2 ring-primary/20 shadow-lg shadow-primary/10'
                : 'border-slate-100 hover:border-primary/30 shadow-sm'}
            ${className}
        `}
    >
        {Icon && (
            <div className={`p-4 rounded-full mb-4 transition-colors duration-300 ${selected ? 'bg-primary text-white' : 'bg-slate-50 text-slate-400 group-hover:text-primary'}`}>
                <Icon className="w-8 h-8" />
            </div>
        )}
        <span className={`text-lg font-semibold transition-colors duration-300 ${selected ? 'text-primary' : 'text-slate-700'}`}>{label}</span>
        {selected && (
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-4 right-4 text-primary"
            >
                <div className="bg-primary text-white rounded-full p-1">
                    <Check size={12} strokeWidth={3} />
                </div>
            </motion.div>
        )}
    </motion.div>
);

const SimpleCard = ({ selected, onClick, label, icon: Icon }) => (
    <motion.div
        whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)" }}
        whileTap={{ scale: 0.98 }}
        onClick={onClick}
        className={`
            relative p-5 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col items-center justify-center text-center font-medium text-lg h-full
            ${selected
                ? 'border-primary bg-white ring-2 ring-primary/20 shadow-md shadow-primary/10'
                : 'bg-white border-slate-200 hover:border-primary/50 text-slate-600 hover:text-primary'}
        `}
    >
        {Icon && (
            <div className={`p-3 rounded-full mb-3 transition-colors duration-300 ${selected ? 'bg-primary/10' : 'bg-slate-50'} flex items-center justify-center`}>
                <Icon className={`w-8 h-8 ${selected ? 'text-primary' : 'text-slate-400'}`} />
            </div>
        )}
        <span className={`${selected ? 'text-primary font-semibold' : ''}`}>{label}</span>
        {selected && (
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-2 right-2 text-primary"
            >
                <div className="bg-primary text-white rounded-full p-0.5">
                    <Check size={10} strokeWidth={3} />
                </div>
            </motion.div>
        )}
    </motion.div>
);

const InputField = ({ label, ...props }) => (
    <div className="group">
        <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1 transition-colors group-focus-within:text-primary">{label}</label>
        <input
            {...props}
            className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200 placeholder:text-slate-400"
        />
    </div>
);

export default function GetStarted() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        userType: '',
        services: [],
        dimensions: [{ length: '', width: '', height: '' }],
        noTypicalDimensions: false,
        weightRange: [],
        contentDescription: '',
        volumePerWeek: '',
        currentCarrier: [],
        preferredCarrier: [],
        accountStatus: '',
        contact: {
            name: '',
            company: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            email: '',
            referredBy: ''
        }
    });

    const totalSteps = 9;
    const progress = Math.round(((step - 1) / totalSteps) * 100);

    const handleSingleSelect = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleMultiSelect = (field, value) => {
        setFormData(prev => {
            const current = prev[field] || [];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [field]: updated };
        });
    };

    const US_STATES = [
        { code: 'AL', name: 'Alabama' }, { code: 'AK', name: 'Alaska' }, { code: 'AZ', name: 'Arizona' }, { code: 'AR', name: 'Arkansas' }, { code: 'CA', name: 'California' },
        { code: 'CO', name: 'Colorado' }, { code: 'CT', name: 'Connecticut' }, { code: 'DE', name: 'Delaware' }, { code: 'FL', name: 'Florida' }, { code: 'GA', name: 'Georgia' },
        { code: 'HI', name: 'Hawaii' }, { code: 'ID', name: 'Idaho' }, { code: 'IL', name: 'Illinois' }, { code: 'IN', name: 'Indiana' }, { code: 'IA', name: 'Iowa' },
        { code: 'KS', name: 'Kansas' }, { code: 'KY', name: 'Kentucky' }, { code: 'LA', name: 'Louisiana' }, { code: 'ME', name: 'Maine' }, { code: 'MD', name: 'Maryland' },
        { code: 'MA', name: 'Massachusetts' }, { code: 'MI', name: 'Michigan' }, { code: 'MN', name: 'Minnesota' }, { code: 'MS', name: 'Mississippi' }, { code: 'MO', name: 'Missouri' },
        { code: 'MT', name: 'Montana' }, { code: 'NE', name: 'Nebraska' }, { code: 'NV', name: 'Nevada' }, { code: 'NH', name: 'New Hampshire' }, { code: 'NJ', name: 'New Jersey' },
        { code: 'NM', name: 'New Mexico' }, { code: 'NY', name: 'New York' }, { code: 'NC', name: 'North Carolina' }, { code: 'ND', name: 'North Dakota' }, { code: 'OH', name: 'Ohio' },
        { code: 'OK', name: 'Oklahoma' }, { code: 'OR', name: 'Oregon' }, { code: 'PA', name: 'Pennsylvania' }, { code: 'RI', name: 'Rhode Island' }, { code: 'SC', name: 'South Carolina' },
        { code: 'SD', name: 'South Dakota' }, { code: 'TN', name: 'Tennessee' }, { code: 'TX', name: 'Texas' }, { code: 'UT', name: 'Utah' }, { code: 'VT', name: 'Vermont' },
        { code: 'VA', name: 'Virginia' }, { code: 'WA', name: 'Washington' }, { code: 'WV', name: 'West Virginia' }, { code: 'WI', name: 'Wisconsin' }, { code: 'WY', name: 'Wyoming' }
    ];

    const handleZipBlur = async (e) => {
        const zip = e.target.value;
        if (zip.length === 5) {
            try {
                const response = await fetch(`https://api.zippopotam.us/us/${zip}`);
                if (response.ok) {
                    const data = await response.json();
                    setFormData(prev => ({
                        ...prev,
                        contact: {
                            ...prev.contact,
                            city: data.places[0]['place name'],
                            state: data.places[0]['state abbreviation']
                        }
                    }));
                }
            } catch (error) {
                console.error('Error fetching zip data:', error);
            }
        }
    };

    const handleDimensionChange = (index, field, value) => {
        setFormData(prev => {
            const newDimensions = [...prev.dimensions];
            newDimensions[index] = { ...newDimensions[index], [field]: value };
            return { ...prev, dimensions: newDimensions, noTypicalDimensions: false };
        });
    };

    const handleAddDimension = () => {
        setFormData(prev => ({
            ...prev,
            dimensions: [...prev.dimensions, { length: '', width: '', height: '' }],
            noTypicalDimensions: false
        }));
    };

    const handleRemoveDimension = (index) => {
        setFormData(prev => ({
            ...prev,
            dimensions: prev.dimensions.filter((_, i) => i !== index)
        }));
    };

    const handleContactChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            contact: { ...prev.contact, [name]: value }
        }));
    };

    const validateStep = (currentStep) => {
        switch (currentStep) {
            case 1:
                return !!formData.userType;
            case 2:
                return formData.services.length > 0;
            case 3:
                if (formData.noTypicalDimensions) return true;
                return formData.dimensions.some(d => d.length && d.width && d.height);
            case 4:
                return formData.weightRange.length > 0;
            case 5:
                return !!formData.contentDescription.trim();
            case 6:
                return !!formData.volumePerWeek;
            case 7:
                return formData.currentCarrier.length > 0 && formData.preferredCarrier.length > 0;
            case 8:
                return !!formData.accountStatus;
            case 9:
                const { name, address, city, state, zip, phone, email, referredBy } = formData.contact;
                return name && address && city && state && zip && phone && email && referredBy;
            default:
                return true;
        }
    };

    const nextStep = () => {
        if (!validateStep(step)) {
            alert("Please fill in the required fields to proceed.");
            return;
        }
        if (step < totalSteps + 1) {
            setStep(step + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            setStep(step - 1);
            window.scrollTo(0, 0);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateStep(step)) {
            alert("Please fill in the required fields to submit.");
            return;
        }
        console.log('Form Submitted:', formData);
        nextStep();
    };

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
    };

    return (
        <Layout title="Get Started - Annship" description="Tell us about your shipping needs.">
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100 py-12 px-4 sm:px-6 lg:px-8 font-sans">
                <div className="max-w-4xl mx-auto">

                    {/* Progress Header */}
                    {step <= totalSteps && (
                        <div className="mb-10 px-2">
                            <div className="flex justify-between items-end mb-4">
                                <div>
                                    <h1 className="text-2xl font-bold text-secondary mb-1">Let's get you started</h1>
                                    <p className="text-slate-500 text-sm">Step {step} of {totalSteps}</p>
                                </div>
                                <span className="text-2xl font-bold text-primary">{progress}%</span>
                            </div>
                            <div className="w-full bg-white rounded-full h-3 p-1 shadow-sm border border-slate-100">
                                <motion.div
                                    className="bg-gradient-to-r from-primary to-blue-400 h-full rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                ></motion.div>
                            </div>
                        </div>
                    )}

                    {/* Main Card */}
                    <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-white/50 overflow-hidden relative">
                        {/* Decorative background blobs */}
                        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                        <div className="p-8 md:p-12 relative z-10 min-h-[500px] flex flex-col justify-center">
                            <AnimatePresence mode="wait">
                                {step > totalSteps ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5 }}
                                        className="text-center py-12"
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                                            className="w-28 h-28 bg-gradient-to-tr from-green-400 to-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-500/30"
                                        >
                                            <Check size={56} strokeWidth={3} />
                                        </motion.div>
                                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6 tracking-tight">Request Received!</h2>
                                        <p className="text-xl text-slate-600 mb-12 max-w-lg mx-auto leading-relaxed">
                                            Thanks! We have received your information and one of our logistics experts will reach out to you within 24 hours.
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => window.location.href = '/'}
                                            className="bg-secondary hover:bg-secondary-light text-white px-12 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl"
                                        >
                                            Back to Home
                                        </motion.button>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="h-full flex flex-col">
                                        <motion.div
                                            key={step}
                                            variants={containerVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            className="flex-grow"
                                        >
                                            {/* Step 1: User Type */}
                                            {step === 1 && (
                                                <div className="space-y-10">
                                                    <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center tracking-tight">How would you describe yourself?</h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                                        <SelectionCard
                                                            label="Individual"
                                                            icon={User}
                                                            selected={formData.userType === 'Individual'}
                                                            onClick={() => handleSingleSelect('userType', 'Individual')}
                                                        />
                                                        <SelectionCard
                                                            label="Company"
                                                            icon={Building2}
                                                            selected={formData.userType === 'Company'}
                                                            onClick={() => handleSingleSelect('userType', 'Company')}
                                                        />
                                                        <div className="md:col-span-2">
                                                            <SelectionCard
                                                                label="Warehouse"
                                                                icon={Warehouse}
                                                                selected={formData.userType === 'Warehouse'}
                                                                onClick={() => handleSingleSelect('userType', 'Warehouse')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 2: Services */}
                                            {step === 2 && (
                                                <div className="space-y-10">
                                                    <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center tracking-tight">Which shipping service(s) are you interested in?</h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                                        <SimpleCard
                                                            label="Ground"
                                                            icon={Truck}
                                                            selected={formData.services.includes('Ground')}
                                                            onClick={() => handleMultiSelect('services', 'Ground')}
                                                        />
                                                        <SimpleCard
                                                            label="Express"
                                                            icon={Zap}
                                                            selected={formData.services.includes('Express')}
                                                            onClick={() => handleMultiSelect('services', 'Express')}
                                                        />
                                                        <SimpleCard
                                                            label="International"
                                                            icon={Globe}
                                                            selected={formData.services.includes('International')}
                                                            onClick={() => handleMultiSelect('services', 'International')}
                                                        />
                                                        <SimpleCard
                                                            label="Others"
                                                            icon={Package}
                                                            selected={formData.services.includes('Others')}
                                                            onClick={() => handleMultiSelect('services', 'Others')}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 3: Dimensions */}
                                            {step === 3 && (
                                                <div className="space-y-10">
                                                    <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center tracking-tight">Your typical shipment dimensions (inch)?</h2>

                                                    <div className="max-w-3xl mx-auto space-y-6">
                                                        {formData.dimensions.map((dim, index) => (
                                                            <div key={index} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-200 backdrop-blur-sm relative">
                                                                {index > 0 && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => handleRemoveDimension(index)}
                                                                        className="absolute -top-3 -right-3 bg-red-100 text-red-500 p-1.5 rounded-full hover:bg-red-200 transition-colors shadow-sm"
                                                                    >
                                                                        <X size={16} />
                                                                    </button>
                                                                )}
                                                                <div className="flex flex-col md:flex-row items-center gap-4">
                                                                    {['Length', 'Width', 'Height'].map((field) => (
                                                                        <div key={field} className="w-full">
                                                                            <input
                                                                                type="number"
                                                                                placeholder={field}
                                                                                value={dim[field.toLowerCase()]}
                                                                                onChange={(e) => handleDimensionChange(index, field.toLowerCase(), e.target.value)}
                                                                                className="w-full p-5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-center text-lg font-medium shadow-sm"
                                                                            />
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}

                                                        <div className="flex flex-col sm:flex-row gap-4">
                                                            <motion.button
                                                                whileHover={{ scale: 1.02 }}
                                                                whileTap={{ scale: 0.98 }}
                                                                type="button"
                                                                onClick={handleAddDimension}
                                                                className="flex-1 p-4 rounded-xl border-2 border-dashed border-primary/30 text-primary font-semibold hover:bg-primary/5 hover:border-primary/50 transition-all flex items-center justify-center gap-2"
                                                            >
                                                                <Plus size={20} />
                                                                Add Another Package
                                                            </motion.button>

                                                            <motion.div
                                                                whileHover={{ scale: 1.02 }}
                                                                whileTap={{ scale: 0.98 }}
                                                                onClick={() => setFormData(prev => ({ ...prev, noTypicalDimensions: !prev.noTypicalDimensions, dimensions: [{ length: '', width: '', height: '' }] }))}
                                                                className={`
                                                                    flex-1 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 text-center font-medium flex items-center justify-center
                                                                    ${formData.noTypicalDimensions
                                                                        ? 'border-primary bg-primary/5 text-primary'
                                                                        : 'border-dashed border-slate-300 hover:border-slate-400 text-slate-500 hover:text-slate-600'}
                                                                `}
                                                            >
                                                                I don't have typical dimensions
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 4: Weight */}
                                            {step === 4 && (
                                                <div className="space-y-10">
                                                    <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center tracking-tight">Your typical shipment weights (lb)?</h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                                        <SimpleCard
                                                            label="<1"
                                                            icon={Feather}
                                                            selected={formData.weightRange.includes('<1')}
                                                            onClick={() => handleMultiSelect('weightRange', '<1')}
                                                        />
                                                        <SimpleCard
                                                            label="1-10"
                                                            icon={Package}
                                                            selected={formData.weightRange.includes('1-10')}
                                                            onClick={() => handleMultiSelect('weightRange', '1-10')}
                                                        />
                                                        <SimpleCard
                                                            label="10-20"
                                                            icon={Box}
                                                            selected={formData.weightRange.includes('10-20')}
                                                            onClick={() => handleMultiSelect('weightRange', '10-20')}
                                                        />
                                                        <SimpleCard
                                                            label="20-50"
                                                            icon={Dumbbell}
                                                            selected={formData.weightRange.includes('20-50')}
                                                            onClick={() => handleMultiSelect('weightRange', '20-50')}
                                                        />
                                                        <SimpleCard
                                                            label=">50"
                                                            icon={Container}
                                                            selected={formData.weightRange.includes('>50')}
                                                            onClick={() => handleMultiSelect('weightRange', '>50')}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 5: Content */}
                                            {step === 5 && (
                                                <div className="space-y-10">
                                                    <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center tracking-tight">Describe the content of your package?</h2>
                                                    <div className="max-w-2xl mx-auto w-full">
                                                        <textarea
                                                            value={formData.contentDescription}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, contentDescription: e.target.value }))}
                                                            className="w-full h-48 p-6 rounded-2xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none resize-none text-lg transition-all shadow-inner"
                                                            placeholder="e.g. Electronics, Clothing, Documents..."
                                                        ></textarea>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 6: Volume */}
                                            {step === 6 && (
                                                <div className="space-y-10">
                                                    <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center tracking-tight">Shipment Volume Per Week?</h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                                        <SimpleCard
                                                            label="1-10"
                                                            icon={Package}
                                                            selected={formData.volumePerWeek === '1-10'}
                                                            onClick={() => handleSingleSelect('volumePerWeek', '1-10')}
                                                        />
                                                        <SimpleCard
                                                            label="10-100"
                                                            icon={Layers}
                                                            selected={formData.volumePerWeek === '10-100'}
                                                            onClick={() => handleSingleSelect('volumePerWeek', '10-100')}
                                                        />
                                                        <SimpleCard
                                                            label=">100"
                                                            icon={Warehouse}
                                                            selected={formData.volumePerWeek === '>100'}
                                                            onClick={() => handleSingleSelect('volumePerWeek', '>100')}
                                                        />
                                                        <SimpleCard
                                                            label="Others"
                                                            icon={Package}
                                                            selected={formData.volumePerWeek === 'Others'}
                                                            onClick={() => handleSingleSelect('volumePerWeek', 'Others')}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 7: Carriers */}
                                            {step === 7 && (
                                                <div className="space-y-12">
                                                    <div className="max-w-3xl mx-auto">
                                                        <h2 className="text-xl font-bold text-slate-400 uppercase tracking-wider mb-6 text-center">Current Carrier (Select all that apply)</h2>
                                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                            <SimpleCard
                                                                label="FedEx"
                                                                icon={FedExLogo}
                                                                selected={formData.currentCarrier.includes('FedEx')}
                                                                onClick={() => handleMultiSelect('currentCarrier', 'FedEx')}
                                                            />
                                                            <SimpleCard
                                                                label="UPS"
                                                                icon={UPSLogo}
                                                                selected={formData.currentCarrier.includes('UPS')}
                                                                onClick={() => handleMultiSelect('currentCarrier', 'UPS')}
                                                            />
                                                            <SimpleCard
                                                                label="USPS"
                                                                icon={USPSLogo}
                                                                selected={formData.currentCarrier.includes('USPS')}
                                                                onClick={() => handleMultiSelect('currentCarrier', 'USPS')}
                                                            />
                                                            <SimpleCard
                                                                label="Others"
                                                                icon={Truck}
                                                                selected={formData.currentCarrier.includes('Others')}
                                                                onClick={() => handleMultiSelect('currentCarrier', 'Others')}
                                                            />
                                                        </div>
                                                    </div>

                                                    <div className="max-w-3xl mx-auto">
                                                        <h2 className="text-xl font-bold text-slate-400 uppercase tracking-wider mb-6 text-center">Preferred Carrier (Select all that apply)</h2>
                                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                            <SimpleCard
                                                                label="FedEx"
                                                                icon={FedExLogo}
                                                                selected={formData.preferredCarrier.includes('FedEx')}
                                                                onClick={() => handleMultiSelect('preferredCarrier', 'FedEx')}
                                                            />
                                                            <SimpleCard
                                                                label="UPS"
                                                                icon={UPSLogo}
                                                                selected={formData.preferredCarrier.includes('UPS')}
                                                                onClick={() => handleMultiSelect('preferredCarrier', 'UPS')}
                                                            />
                                                            <SimpleCard
                                                                label="USPS"
                                                                icon={USPSLogo}
                                                                selected={formData.preferredCarrier.includes('USPS')}
                                                                onClick={() => handleMultiSelect('preferredCarrier', 'USPS')}
                                                            />
                                                            <SimpleCard
                                                                label="Others"
                                                                icon={Truck}
                                                                selected={formData.preferredCarrier.includes('Others')}
                                                                onClick={() => handleMultiSelect('preferredCarrier', 'Others')}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 8: Account Status */}
                                            {step === 8 && (
                                                <div className="space-y-10">
                                                    <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center tracking-tight">Do you have your own account with the carrier?</h2>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                                                        <SimpleCard
                                                            label="No"
                                                            icon={UserX}
                                                            selected={formData.accountStatus === 'No'}
                                                            onClick={() => handleSingleSelect('accountStatus', 'No')}
                                                        />
                                                        <SimpleCard
                                                            label="Yes and with account executive"
                                                            icon={UserCheck}
                                                            selected={formData.accountStatus === 'Yes and with account executive'}
                                                            onClick={() => handleSingleSelect('accountStatus', 'Yes and with account executive')}
                                                        />
                                                        <SimpleCard
                                                            label="Yes but no account executive"
                                                            icon={User}
                                                            selected={formData.accountStatus === 'Yes but no account executive'}
                                                            onClick={() => handleSingleSelect('accountStatus', 'Yes but no account executive')}
                                                        />
                                                        <SimpleCard
                                                            label="Not sure"
                                                            icon={Info}
                                                            selected={formData.accountStatus === 'Not sure'}
                                                            onClick={() => handleSingleSelect('accountStatus', 'Not sure')}
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Step 9: Contact Info */}
                                            {step === 9 && (
                                                <div className="space-y-8">
                                                    <h2 className="text-3xl md:text-4xl font-bold text-secondary text-center tracking-tight mb-8">Final Step! Where should we send the info?</h2>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                                                        <InputField label="Name *" required type="text" name="name" value={formData.contact.name} onChange={handleContactChange} />
                                                        <InputField label="Company" type="text" name="company" value={formData.contact.company} onChange={handleContactChange} />
                                                        <div className="md:col-span-2">
                                                            <InputField label="Address *" required type="text" name="address" value={formData.contact.address} onChange={handleContactChange} />
                                                        </div>
                                                        <InputField label="City *" required type="text" name="city" value={formData.contact.city} onChange={handleContactChange} />
                                                        <div className="grid grid-cols-2 gap-6">
                                                            <div className="group">
                                                                <label className="block text-sm font-semibold text-slate-700 mb-2 ml-1 transition-colors group-focus-within:text-primary">State *</label>
                                                                <div className="relative">
                                                                    <select
                                                                        name="state"
                                                                        value={formData.contact.state}
                                                                        onChange={handleContactChange}
                                                                        required
                                                                        className="w-full px-5 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all duration-200 appearance-none cursor-pointer"
                                                                    >
                                                                        <option value="">Select State</option>
                                                                        {US_STATES.map((state) => (
                                                                            <option key={state.code} value={state.code}>{state.code} - {state.name}</option>
                                                                        ))}
                                                                    </select>
                                                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                                        <ChevronLeft size={16} className="-rotate-90" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <InputField
                                                                label="Zip *"
                                                                required
                                                                type="text"
                                                                name="zip"
                                                                value={formData.contact.zip}
                                                                onChange={handleContactChange}
                                                                onBlur={handleZipBlur}
                                                                maxLength={5}
                                                            />
                                                        </div>
                                                        <InputField label="Phone *" required type="tel" name="phone" value={formData.contact.phone} onChange={handleContactChange} />
                                                        <InputField label="Email *" required type="email" name="email" value={formData.contact.email} onChange={handleContactChange} />
                                                        <div className="md:col-span-2">
                                                            <InputField label="Referred By *" required type="text" name="referredBy" value={formData.contact.referredBy} onChange={handleContactChange} />
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </motion.div>

                                        {/* Navigation Buttons */}
                                        <div className="flex justify-between mt-12 pt-8 border-t border-slate-100">
                                            {step > 1 ? (
                                                <button
                                                    type="button"
                                                    onClick={prevStep}
                                                    className="px-6 py-3 text-slate-500 font-semibold hover:text-secondary hover:bg-slate-50 rounded-xl transition-colors flex items-center group"
                                                >
                                                    <ChevronLeft size={20} className="mr-1 group-hover:-translate-x-1 transition-transform" />
                                                    Back
                                                </button>
                                            ) : (
                                                <div></div>
                                            )}

                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                type="submit"
                                                className="bg-primary hover:bg-primary-dark text-white px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-primary/25 flex items-center"
                                            >
                                                {step === totalSteps ? 'Submit Request' : 'Next Step'}
                                                {step < totalSteps && <ArrowRight size={20} className="ml-2" />}
                                            </motion.button>
                                        </div>
                                    </form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
