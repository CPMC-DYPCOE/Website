import Head from 'next/head';
import Image from 'next/image';
import { Footer, Navbar } from '../../components';
import styles from '../../styles/Home.module.css';

const Events = () => {
  return (
    <>
      <Head>
        <title>CPMC EVENTS</title>
        <meta
          name="CPMC-EVENTS"
          content="Competetive Programming
and Mentorship Club.
DYPCOE, Pune."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="font-Paytone text-[#fff] flex items-center flex-col gap-10 justify-center w-[100vw] h-[90vh]">
        <div className=" flex items-center flex-col shadow-cde lg:px-[100px] px-[50px] lg:py-[100px] py-[50px]">
          <h1 className="lg:text-[50px] text-[30px]">
            Looking for <span className="text-[#f32053]"> Events</span> ?
          </h1>
          <h1 className="lg:text-[30px] text-[16px]">
            We are planning some <span className="text-[#f32053]">Surprises</span> for you.
          </h1>
          <h1 className="lg:text-[30px] text-[16px]">
            Stay <span className="text-[#f32053]">Tuned !</span>
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Events;
