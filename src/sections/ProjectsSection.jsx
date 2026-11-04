import { content as c } from '../data/content';
import SectionHeading from '../components/ui/SectionHeading';
import ProjectShowcase from '../components/common/ProjectShowcase';
import CTAButton from '../components/common/CTAButton';
/** Verified case-study publishing state. */
export default function ProjectsSection() {
  return (
    <section className="border-y border-gold/20 bg-white/60">
      <div className="section-wrap">
        <SectionHeading label={c.labels.projects} title={c.home.projectsTitle} />
        <ProjectShowcase />
        <div className="mt-8 text-center">
          <CTAButton to="/projects" secondary>
            {c.ui.cases}
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
