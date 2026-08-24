import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Reveal } from "@/components/motion/reveal";
import { likedProjects } from "@/config/liked-projects";

function initials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Sits right under the Guides section: a quiet wall of projects City Glory
 * likes. Deliberately bare — logo mark and name only, wrapped with generous
 * air so the row breathes at any count, unlike the big cards above it.
 */
export async function LikedProjects() {
  const t = await getTranslations("home");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
      <Reveal>
        <p className="text-center text-xs uppercase tracking-wide text-muted">
          {t("likedProjectsEyebrow")}
        </p>
      </Reveal>

      <div className="mt-10 flex flex-wrap items-start justify-center gap-x-14 gap-y-10 sm:mt-12 sm:gap-x-20 sm:gap-y-12">
        {likedProjects.map((project, i) => (
          <Reveal key={project.key} delay={i * 0.05}>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-20 flex-col items-center gap-3 sm:w-24"
            >
              <span
                aria-hidden
                className="flex size-16 items-center justify-center rounded-full bg-cream text-muted transition-colors duration-200 group-hover:bg-mist group-hover:text-ink sm:size-20"
              >
                {project.logo ? (
                  <Image
                    src={project.logo}
                    alt=""
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                ) : (
                  <span className="text-sm font-medium tracking-tight">
                    {initials(project.name)}
                  </span>
                )}
              </span>
              <span className="text-center text-xs lowercase tracking-tight text-muted transition-colors duration-200 group-hover:text-ink sm:text-sm">
                {project.name}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
