import { Linkedin, Mail } from "lucide-react";
import type { TeamMember } from "@/data/teamData";

const TeamCard = ({ member }: { member: TeamMember }) => (
  <article className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-300 motion-safe:hover:-translate-y-1 hover:shadow-md">
    <div className="aspect-[4/5] w-full overflow-hidden bg-muted">
      <img
        src={member.image}
        alt={member.alt ?? `${member.name}, ${member.role} at Men Matter`}
        loading="lazy"
        decoding="async"
        sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 90vw"
        className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
      />
    </div>
    <div className="p-5">
      <h3 className="font-heading text-lg font-semibold text-foreground">{member.name}</h3>
      <p className="mt-0.5 text-sm font-medium text-primary">{member.role}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
      {(member.linkedin || member.email) && (
        <div className="mt-4 flex items-center gap-3">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          )}
          {member.email && (
            <a
              href={`mailto:${member.email}`}
              aria-label={`Email ${member.name}`}
              className="rounded-md p-1.5 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              <Mail size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </div>
  </article>
);

export default TeamCard;
