export interface SkillCardProps {
  title: string;
  description: string;
  level: string;
  technologies: string[];
}

export default function SkillCard({ title, description, level, technologies }: SkillCardProps) {
  return (
    <article className="rounded-lg border border-zinc-200 bg-white p-6 shadow-md dark:border-zinc-700 dark:bg-zinc-800">
          <div className="mb-3 flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-800 dark:text-emerald-100">
                {level}
            </span>
          </div>
          
          <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{description}</p>
      
          <div className="flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <span key={technology} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-800 dark:bg-zinc-700 dark:text-zinc-100">
                {technology}
              </span>
            ))}
          </div>
    </article>
  );
}