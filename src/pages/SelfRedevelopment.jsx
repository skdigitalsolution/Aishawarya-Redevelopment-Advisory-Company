import TopicPage from '../components/common/TopicPage';
import ServiceImageSection from '../components/common/ServiceImageSection';
import { content } from '../data/content';
import { profileImage } from '../data/profileImages';
import { advisoryServices } from '../data/advisoryServices';
export default function SelfRedevelopment() {
 return <><TopicPage topic={{ ...content.topicPages.SelfRedevelopment, image: profileImage('residential-building') }} /><section className="section-wrap !pt-0"><h2 className="text-3xl">Plan the responsibilities before starting</h2>{advisoryServices.filter((item) => ['self-redevelopment','project-finance','construction-quality'].includes(item.id)).map((item,i) => <ServiceImageSection key={item.id} item={item} reverse={i % 2 === 1} />)}</section></>;
}
