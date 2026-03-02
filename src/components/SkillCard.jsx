import React from 'react';

const SkillCard = ({ title, icon, skills }) => {
    return (
        <div className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200 ring-1 ring-slate-100 transition-transform hover:-translate-y-2">
            <div className="mb-6 flex items-center gap-3 text-xl font-black text-slate-900">
                <div className="rounded-xl bg-slate-50 p-3 text-2xl shadow-inner">{icon}</div>
                {title}
            </div>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill.name}
                        className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-all ${skill.primary
                                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                                : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                            }`}
                    >
                        {skill.icon}
                        {skill.name}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default SkillCard;
