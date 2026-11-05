import TopicPage from '../components/common/TopicPage';
import ServiceImageSection from '../components/common/ServiceImageSection';
import ImageSlider from '../components/common/ImageSlider';
import ContactForm from '../components/forms/ContactForm';
import { content } from '../data/content';
import { activitySlides, profileImage } from '../data/profileImages';
import { advisoryGuides } from '../data/advisoryGuides';
export default function SocietyRedevelopment() {
 return <><TopicPage topic={{ ...content.topicPages.SocietyRedevelopment, image: profileImage('member-meeting') }} /><section className="section-wrap !pt-0"><ImageSlider compact slides={activitySlides.filter((_,i) => [0,3,4,5].includes(i))} label="Supporting your society’s decisions" />{advisoryGuides.filter((_,i) => i !== 3).map((item,i) => <ServiceImageSection key={item.id} item={item} reverse={i % 2 === 1} />)}</section><section className="section-wrap !pt-0"><div className="grid items-start gap-8 lg:grid-cols-2"><div><h2 className="text-3xl">Request a Society Consultation</h2><p className="mt-4 text-sm leading-7 text-navy/75">Tell us about your building, member concerns and the stage of the discussion. We can help identify which records and professional inputs are needed next.</p></div><ContactForm /></div></section></>;
}
