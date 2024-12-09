import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'M.Tech, CSA, IISc Bangalore',
      subtitle: 'Aug 2024 - June 2026 | Full Time',
      img: require('@site/static/img/iisc-logo.png').default,
    description: (
      <>
       Pursuing M.Tech at Computer Science and Automation Department of Indian Institute of Science, Bangalore.
      </>
    ),
  },

    {
        title: 'Ex-TCSer, System Engineer, TCS Indore',
        subtitle: 'Aug 2021 - May 2024 | Full Time',
        img: require('@site/static/img/tcs-logo.png').default,
        description: (
            <>
                Worked as a System Engineer in TCS(Digital) as a Full Stack Java Web Developer.
            </>
        ),
    },


  {
    title: 'B.Tech, CSE, RGPV Bhopal',
      subtitle: 'Aug 2017 - June 2021 | Full Time',
    img: require('@site/static/img/rgpv-logo.png').default,
    description: (
      <>
          Pursued B.Tech at Computer Science and Engineering Department of Technocrats Institute, Bhopal.
      </>
    ),
  },


    // {
    //     title: 'Powered by React 2',
    //     Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    //     description: (
    //         <>
    //             Extend or customize your website layout by reusing React. Docusaurus can
    //             be extended while reusing the same header and footer.
    //         </>
    //     ),
    // }
];

function Feature({img, title, description, subtitle}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} alt={"Not Found"}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
          <Heading as="h5">{subtitle}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
