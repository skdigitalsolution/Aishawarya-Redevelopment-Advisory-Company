import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/common/PageHero';
import ProjectShowcase from '../components/common/ProjectShowcase';
import { projectData } from '../data/projects';
import CTAButton from '../components/common/CTAButton';
/** Category-aware case-study publishing state; no illustrative project is presented as completed work. */
export default function Projects() {
  const [params, setParams] = useSearchParams();
  const current = params.get('category') ?? 'all';
  return (
    <>
      <PageHero
        title="Projects & Case Studies"
        description="Our role is advisory and professional coordination. Verified project stories will identify that role clearly."
      />
      <section className="section-wrap">
        <div role="group" aria-label="Project category" className="mb-8 flex flex-wrap gap-3">
          {projectData.categories.map((category) => {
            const slug = category.toLowerCase().replaceAll(' ', '-');
            return (
              <button
                key={slug}
                type="button"
                aria-pressed={current === slug}
                onClick={() => setParams(slug === 'all' ? {} : { category: slug })}
                className={`min-h-11 rounded-full border px-5 py-3 text-xs font-semibold ${current === slug ? 'border-navy bg-navy text-white' : 'border-navy/15 bg-white'}`}
              >
                {category}
              </button>
            );
          })}
        </div>
        <p className="mb-5 text-xs text-navy/65" role="status">
          {current === 'all'
            ? 'All advisory categories'
            : `${projectData.categories.find((x) => x.toLowerCase().replaceAll(' ', '-') === current) ?? 'Selected'} advisory`}
          : verified case studies awaiting publication.
        </p>
        <ProjectShowcase />
        <div className="mt-10">
          <CTAButton to="/contact-us">Discuss your advisory requirements</CTAButton>
        </div>
      </section>
    </>
  );
}
