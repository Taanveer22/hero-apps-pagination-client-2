import { useLoaderData } from 'react-router';
import Banner from '../components/Banner';
import Stats from '../components/Stats';
import TrendingApps from '../components/TrendingApps';

const Home = () => {
  const { apps } = useLoaderData();
  return (
    <>
      <section>
        <Banner></Banner>
      </section>
      <section className="py-10 bg-linear-to-tl to-[#632EE3] from-[#9F62F2] ">
        <Stats></Stats>
      </section>
      <section className="my-16">
        <TrendingApps apps={apps}></TrendingApps>
      </section>
    </>
  );
};

export default Home;
