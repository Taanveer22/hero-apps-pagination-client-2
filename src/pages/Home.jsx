import Banner from '../components/Banner';
import Stats from '../components/Stats';

const Home = () => {
  return (
    <>
      <section>
        <Banner></Banner>
      </section>
      <section className="py-10 bg-linear-to-tl to-[#632EE3] from-[#9F62F2] ">
        <Stats></Stats>
      </section>
      {/* <section>
        <TrendingApps></TrendingApps>
      </section> */}
    </>
  );
};

export default Home;
