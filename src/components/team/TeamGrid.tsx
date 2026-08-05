import { motion } from "framer-motion";
import TeamCard from "./TeamCard";
import { teamCategories, teamMembers, type TeamMember } from "@/data/teamData";

const Grid = ({ members }: { members: TeamMember[] }) => (
  <div className="flex flex-wrap justify-center gap-6">
    {members.map((member, i) => (
      <motion.div
        key={member.name}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.4, delay: Math.min(i, 3) * 0.06 }}
        className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)] max-w-[320px]"
      >
        <TeamCard member={member} />
      </motion.div>
    ))}
  </div>
);

const TeamGrid = () => {
  const grouped = teamCategories
    .map((category) => ({
      category,
      members: teamMembers.filter((m) => m.category === category),
    }))
    .filter((g) => g.members.length > 0);

  const uncategorised = teamMembers.filter((m) => !m.category);

  return (
    <section aria-labelledby="team-heading" className="container px-4 pb-20">
      <h2 id="team-heading" className="sr-only">
        Our team members
      </h2>
      <div className="space-y-14">
        {grouped.map(({ category, members }) => (
          <div key={category}>
            <h3 className="mb-6 text-center font-heading text-xl font-bold text-foreground sm:text-2xl">
              {category}
            </h3>
            <Grid members={members} />
          </div>
        ))}
        {uncategorised.length > 0 && <Grid members={uncategorised} />}
      </div>
    </section>
  );
};

export default TeamGrid;