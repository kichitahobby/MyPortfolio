import React from 'react';
import { FaGithub } from 'react-icons/fa';

const ProjectCard = ({ title, type, description, techs, githubUrl }) => {
    return (
        <div className="group overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200 ring-1 ring-slate-100 transition-all hover:ring-indigo-300">
            <div className="bg-gradient-to-br from-indigo-500 to-violet-600 px-8 py-10 transition-all group-hover:scale-105">
                <div className="mb-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                    {type}
                </div>
                <h3 className="text-3xl font-black text-white">{title}</h3>
            </div>
            <div className="p-8">
                <p className="mb-6 text-slate-600 leading-relaxed font-medium">{description}</p>
                <div className="flex flex-wrap gap-2">
                    {techs.map((t) => (
                        <span
                            key={t}
                            className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600 uppercase tracking-wider"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <div className="mt-8">
                    <a
                        href={githubUrl || "#"}
                        className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                    >
                        <FaGithub /> View Source Code →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
