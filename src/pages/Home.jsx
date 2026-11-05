import ImageSlider from '../components/common/ImageSlider';
import { activitySlides } from '../data/profileImages';
import HeroSection from '../sections/HeroSection';
import FounderSection from '../sections/FounderSection';
import ExpertiseSection from '../sections/ExpertiseSection';
import ProcessSection from '../sections/ProcessSection';
import WhyChooseSection from '../sections/WhyChooseSection';
import ProjectsSection from '../sections/ProjectsSection';
import AssessmentSection from '../sections/AssessmentSection';
import TestimonialsFaqSection from '../sections/TestimonialsFaqSection';
import ContactSection from '../sections/ContactSection';
/** Homepage: the ten requested sections in the specified order. */
export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="section-wrap !py-8"><ImageSlider slides={activitySlides} /></div>
      <FounderSection />
      <ExpertiseSection />
      <ProcessSection />
      <WhyChooseSection />
      <ProjectsSection />
      <AssessmentSection />
      <TestimonialsFaqSection />
      <ContactSection />
    </>
  );
}
