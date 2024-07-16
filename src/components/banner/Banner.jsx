
import PropTypes from 'prop-types';
import styles from './Banner.module.css';
import banner from '../../assets/banner.png'; 

function Banner({ card, categoryLookup }) {


    if (!card || !card.category || !categoryLookup || !categoryLookup[card.category]) {
        return null;
    }

    const { title, link} = card;
    const { name, primaryColor } = categoryLookup[card.category];

    const titleStyle = {
        backgroundColor: primaryColor,

    };

    return (
        <main id="banner" className={styles.layer} style={{ backgroundImage: `url(${banner})`, '--primary-color': primaryColor }}>
            <div className={styles.gradient}></div> 
            <section className={styles.content}>
                <h1 className={styles.name} style={titleStyle}>{name}</h1>
                <h2 className={styles.title}>Challenge React</h2>
                <p className={styles.subtitle}>
                    Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.
                </p>
            </section>
            <section className={styles.containerBanner}>
                <iframe
                    src={link}
                    title={title}
                    className={styles.video}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </main>
    );
}

Banner.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    categoryLookup: PropTypes.object.isRequired,
};

export default Banner;
