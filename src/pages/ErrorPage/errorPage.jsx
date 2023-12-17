import PropTypes from 'prop-types';

function ErrorPage({ text }) {
  return (
    <section className="info-container">
      <h2 className="text-center">Страница не найдена</h2>
      <p>
        {text}
      </p>
    </section>
  );
}

ErrorPage.propTypes = {
  text: PropTypes.string,

};

ErrorPage.defaultProps = {
  text: 'Извините, такая страница не найдена!',
};

export default ErrorPage;
