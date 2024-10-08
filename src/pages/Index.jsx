import Header from '../components/Header';
import Hero from '../components/Hero';
import ImageCard from '../components/ImageCard';
import WorldUsersSection from '../components/WorldUsersSection';
import ServicesSection from '../components/ServicesSection';
import ComparisonTable from '../components/ComparisonTable';
import IntegrationsSection from '../components/IntegrationsSection';
import CompanyProfiles from '../components/CompanyProfiles';
import VeloxforceTeam from '../components/VeloxforceTeam';
import ProjectDiscussion from '../components/ProjectDiscussion';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="fixed top-0 left-0 w-full bg-orange-100 text-orange-600 py-1 px-4 text-center z-50">
        <span className="mr-2">AI Features coming soon</span>
        <span className="font-bold">10 courses in one for $9.99</span>
      </div>
      <div className="pt-8">
        <div className="bg-gradient-to-b from-orange-100 to-transparent pb-1">
          <Header />
          <Hero />
        </div>
      </div>
      <ImageCard />
      <WorldUsersSection />
      <ServicesSection />
      <ComparisonTable />
      <IntegrationsSection />
      <CompanyProfiles />
      <VeloxforceTeam />
      <ProjectDiscussion />
      <Footer />
    </div>
  );
};

export default Index;
