import React from 'react';
import StreamContainer from '../stream/stream_container';
import Footer from '../footer/footer';

const Home = ({ children }) => (
  <main className="home">
    <StreamContainer />

    <section className="sidebar">
      <Footer />
    </section>
  </main>
);

export default Home;
