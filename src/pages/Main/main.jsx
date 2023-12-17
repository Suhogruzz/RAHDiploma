import Banner from '../../components/main/Banner/banner';

function Main({ children }) {
  return (
    <main className="container">
      <div className="row">
        <div className="col">
          <Banner />
          {children}
        </div>
      </div>
    </main>
  );
}

export default Main;
