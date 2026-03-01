
import {
  FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaGithub, FaMicrosoft, FaDatabase, FaCode, FaRobot
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiTailwindcss, SiJest, SiVite, SiQiita
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';

function App() {
  const experiences = [
    {
      date: "2026/2 - 現在",
      title: "WEBシステムのリバースエンジニアリング",
      role: "AI活用 / 開発担当",
      description: "既存WEBシステムのリプレイスに際し、システムのソースから機能設計書を作成する業務。",
      details: [
        "機能設計書の作成にAIを活用（既存ソースコードを読み込ませて生成）",
        "今後は作成した機能設計書をAIに読み込ませ、Playwrightを用いたE2Eテストコードを自動生成させる計画を推進"
      ],
      techs: ["GitHub Copilot"]
    },
    {
      date: "2023/7 - 2025/7",
      title: "WEBシステムの開発保守",
      role: "サブリーダー / プログラマ",
      description: "既存システムにおける新機能開発（CRUD機能を有する新規画面）や保守対応。",
      details: [
        "バグ対応、要望対応、各種調査、単体テストの実施",
        "2024/4〜：サブリーダーとしてメンバーへの指示出し、コードレビューを担当。定例会におけるシステム面の質疑応答も実施",
        "2024/7〜：新入社員のOJTを担当"
      ],
      techs: ["HTML", "CSS", "TypeScript", "Knockout.js", "C#", "SQL Server"]
    },
    {
      date: "2023/3 - 2023/6",
      title: "WEBシステムのマイグレーション",
      role: "フロントエンド担当",
      description: "システムの老朽化に伴うマイグレーション対応（アジャイル開発、OpenAPIの採用）。",
      details: [
        "フロント側のマイグレーション実装と単体テストを担当",
        "Jestを用いた自動テストを導入。不慣れな部分もありながらもキャッチアップし推進"
      ],
      techs: ["HTML", "Tailwind CSS", "TypeScript", "Vue.js", "Jest", "Open API"]
    },
    {
      date: "2022/7 - 2023/2",
      title: "社内プロジェクト管理システムの開発",
      role: "プログラマ (1名体制)",
      description: "社内プロジェクトの概要、受発注、参画者登録、社員の工数管理などを行う社内システム。",
      details: [
        "システムの企画段階から実装までを私1人で担当しリリース（多大なる技術アドバイスは受けた）"
      ],
      techs: ["Power Apps"]
    },
    {
      date: "2020/7 - 2022/6",
      title: "WEBシステム開発",
      role: "プログラマ",
      description: "既存システムへの新機能追加（CRUD機能を有する新規画面の開発）および保守。",
      details: [
        "バグ対応、要望対応、各種調査、単体テストといった開発全体を経験"
      ],
      techs: ["HTML", "CSS", "TypeScript", "Knockout.js", "C#", "SQL Server"]
    },
    {
      date: "2020/4",
      title: "現在のSI企業に入社",
      role: "新入社員",
      description: "新卒プログラマとしてキャリアをスタート。",
      details: [],
      techs: []
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-indigo-100 selection:text-indigo-600">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="group flex items-center gap-2 text-2xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent group-hover:from-pink-500 group-hover:to-orange-500 transition-all duration-300">
              kichita
            </span>
            <span className="text-slate-400 font-light">.dev</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {['profile', 'skills', 'projects'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors capitalize tracking-wide"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-5xl px-6 pb-24">

        {/* Hero Section */}
        <section className="flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
          <div className="mb-6 inline-flex animate-bounce items-center gap-2 rounded-full bg-indigo-50 px-4 py-1.5 text-sm font-bold text-indigo-600 ring-1 ring-inset ring-indigo-200">
            <span>🚀 Open for new challenges</span>
          </div>
          <h1 className="mb-6 text-6xl font-black tracking-tight text-slate-900 md:text-8xl">
            Hello, <br />
            I'm <span className="bg-gradient-to-br from-indigo-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">kichita</span>
          </h1>
          <p className="max-w-2xl text-xl font-medium text-slate-500 md:text-2xl">
            Passionate <span className="text-slate-900 font-bold underline decoration-indigo-400 decoration-4 underline-offset-4">Programmer</span> weaving logic with code and AI to craft elegant solutions.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a href="#projects" className="rounded-full bg-slate-900 px-8 py-4 text-lg font-bold text-white shadow-xl shadow-slate-200 transition-all hover:-translate-y-1 hover:bg-slate-800 active:translate-y-0">
              Check My Work
            </a>
            <a href="#profile" className="rounded-full bg-white px-8 py-4 text-lg font-bold text-slate-900 ring-1 ring-slate-200 transition-all hover:bg-slate-50 hover:ring-slate-300">
              About Me
            </a>
          </div>
        </section>

        {/* Profile Section */}
        <section id="profile" className="py-24">
          <div className="mb-16 flex items-center gap-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Profile & Career</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
          </div>

          <div className="overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-2xl shadow-slate-200 md:p-12">
            <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
              <div className="shrink-0 text-center">
                <div className="group relative">
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-emerald-400 to-cyan-400 opacity-75 blur transition duration-300 group-hover:opacity-100"></div>
                  <a href="https://qiita.com/kichita" target="_blank" rel="noopener noreferrer" className="relative block overflow-hidden rounded-full ring-4 ring-white transition-transform duration-500 group-hover:scale-105">
                    <img src="./avatar.png" alt="Profile" className="h-40 w-40 object-cover" />
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-center gap-2 font-bold transition-colors hover:text-[#55C500]">
                  <SiQiita className="text-[#55C500]" size="1.4em" />
                  <a href="https://qiita.com/kichita" target="_blank" rel="noopener noreferrer">@kichita</a>
                </div>
              </div>

              <div className="flex-1 space-y-6">
                <p className="text-lg leading-relaxed text-slate-600">
                  2020年に新卒でSI企業に入社し、プログラマとして複数の業務システムでフルスタックに機能開発・保守に携わってきました。
                  <span className="font-bold text-slate-900">C#やTypeScript</span>を用いた堅牢なシステム開発から、サブリーダーとしてのマネジメントまで幅広く対応しています。
                </p>
                <p className="text-lg leading-relaxed text-slate-600">
                  現在は <span className="rounded-md bg-indigo-50 px-2 py-1 font-bold text-indigo-600 italic">GitHub Copilot</span> を活用したリバースエンジニアリングなど、AI時代のモダンな開発手法を追求しています。
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="mt-20 space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="group relative pl-8 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-slate-200 last:before:hidden">
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
                        <span key={idx} className="rounded-lg bg-white px-3 py-1 text-xs font-bold text-indigo-600 ring-1 ring-slate-200 group-hover:ring-indigo-200 transition-all">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24">
          <div className="mb-16 flex items-center gap-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Skills & Tools</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Frontend',
                icon: <FaReact className="text-cyan-400" />,
                skills: [
                  { name: 'HTML / CSS', icon: <FaHtml5 color="#E34F26" /> },
                  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
                  { name: 'TypeScript', icon: <SiTypescript color="#3178C6" /> },
                  { name: 'React', icon: <FaReact color="#61DAFB" />, primary: true },
                  { name: 'Vite', icon: <SiVite color="#646CFF" />, primary: true },
                  { name: 'Vue.js', icon: <FaVuejs color="#4FC08D" /> },
                  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> }
                ]
              },
              {
                title: 'Backend',
                icon: <TbBrandCSharp className="text-violet-500" />,
                skills: [
                  { name: 'C#', icon: <TbBrandCSharp color="#68217A" /> },
                  { name: 'SQL Server', icon: <FaDatabase color="#CC292B" /> }
                ]
              },
              {
                title: 'Workflow',
                icon: <FaGithub className="text-slate-800" />,
                skills: [
                  { name: 'GitHub Copilot', icon: <FaRobot color="#000" />, primary: true },
                  { name: 'Git / GitHub', icon: <FaGithub /> },
                  { name: 'Jest', icon: <SiJest color="#C21325" /> },
                  { name: 'Power Apps', icon: <FaMicrosoft color="#00A4EF" /> }
                ]
              }
            ].map((cat) => (
              <div key={cat.title} className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-200 ring-1 ring-slate-100 transition-transform hover:-translate-y-2">
                <div className="mb-6 flex items-center gap-3 text-xl font-black text-slate-900">
                  <div className="rounded-xl bg-slate-50 p-3 text-2xl shadow-inner">{cat.icon}</div>
                  {cat.title}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
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
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24">
          <div className="mb-16 flex items-center gap-4">
            <h2 className="text-4xl font-black text-slate-900 tracking-tight">Projects</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent"></div>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            <div className="group overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-slate-200 ring-1 ring-slate-100 transition-all hover:ring-indigo-300">
              <div className="bg-gradient-to-br from-indigo-500 to-violet-600 px-8 py-10 transition-all group-hover:scale-105">
                <div className="mb-4 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  Personal Project
                </div>
                <h3 className="text-3xl font-black text-white">Portfolio Website</h3>
              </div>
              <div className="p-8">
                <p className="mb-6 text-slate-600 leading-relaxed font-medium">
                  AIコーディングアシスタントと対話し、「仕様駆動開発」のアプローチでゼロから構築したReact製のWebサイト。
                </p>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vite', 'Tailwind CSS'].map(t => (
                    <span key={t} className="rounded-lg bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600 uppercase tracking-wider">{t}</span>
                  ))}
                </div>
                <div className="mt-8">
                  <a href="#" className="inline-flex items-center gap-2 font-bold text-slate-900 hover:text-indigo-600 transition-colors">
                    <FaGithub /> View Source Code →
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center rounded-[2.5rem] border-4 border-dashed border-slate-200 p-12 transition-all hover:border-indigo-300 hover:bg-indigo-50/30">
              <div className="mb-4 rounded-full bg-slate-100 p-6 text-4xl text-slate-300 transition-colors group-hover:bg-indigo-100 group-hover:text-indigo-400">✨</div>
              <p className="text-xl font-black text-slate-400">Coming Soon...</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white py-12 text-center text-slate-400 border-t border-slate-100">
        <p className="text-sm font-bold uppercase tracking-[0.2em]">&copy; {new Date().getFullYear()} kichita. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
