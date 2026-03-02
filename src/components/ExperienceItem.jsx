import React from 'react';

const ExperienceItem = ({ exp, isLast }) => {
    return (
        <div className={`group relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-slate-200 ${isLast ? 'before:hidden' : ''}`}>
            <div className="absolute left-[-5px] top-2 h-[11px] w-[11px] rounded-full bg-slate-300 group-hover:bg-indigo-500 transition-colors"></div>
            <div className="mb-1 text-sm font-bold tracking-widest text-indigo-500 uppercase">{exp.date}</div>
            <div className="flex flex-wrap items-baseline gap-3 mb-3">
                <h3 className="text-2xl font-black text-slate-900">{exp.title}</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500 uppercase tracking-wider">{exp.role}</span>
            </div>
            <p className="mb-4 text-slate-600 leading-relaxed font-medium">{exp.description}</p>

            {exp.details && exp.details.length > 0 && (
                <ul className="mb-6 space-y-2 text-sm text-slate-500 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    {exp.details.map((detail, idx) => (
                        <li key={idx} className="flex gap-2 before:content-['•'] before:text-indigo-400 font-medium">
                            <span>{detail}</span>
                        </li>
                    ))}
                </ul>
            )}

            {exp.techs && exp.techs.length > 0 && (
                <div className="flex flex-wrap gap-2">
                    {exp.techs.map((tech, idx) => (
                        <span key={idx} className="rounded-lg bg-white px-3 py-1 text-xs font-bold text-indigo-600 ring-1 ring-slate-200 group-hover:ring-indigo-200 transition-all">
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExperienceItem;
