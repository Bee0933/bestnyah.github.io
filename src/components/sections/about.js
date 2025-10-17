import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(200px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;

      &:after {
        top: 15px;
        left: 15px;
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 20px;
      left: 20px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Programming Languages⋮ Python, SQL',
    'Developer Tools⋮ Git, GitHub, Pytest, YAML, Bash, VS Code, Wiz',
    'DataOps/DevOps⋮ AWS, Azure, Digital Ocean, OVH Cloud, Terraform, Ansible, GitHub Actions, Docker, Helm, Kubernetes, Prometheus, Loki, Grafana',
    'Data Processing⋮ Apache Spark, Apache Kafka, Debezium, Pandas, Polars, BeautifulSoup, Soda-core, Athena, Tableau, Google Looker',
    'ETL/ELT Tools⋮ Prefect, Apache Airflow, Glue, EMR, Lambda, Step Functions, Fivetran, Airbyte, dltHub, DBT, SQLFluf',
    'DB/Datastore/Warehouse: Postgres, MongoDB, Redis, DuckDB, S3, Minio, Snowflake, Redshift, Apache Iceberg',
    'Data Modeling & Warehousing⋮ Dimensional Modeling, ERD Modeling, Data Warehouse Design',
    'Backend: Flask, FastAPI, RabbitMQ, Traefik, Nginx',
    'ML/AI: Jupyter, Scikit-learn, Numpy, Keras, Tensorflow, JAX, Flax, OpenAI, NLTK, Librosa, SciPy',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>I build data-driven solutions that turn complexity into clarity. </p>
            <p>
              With a background in Computer Engineering, I specialize in building end-to-end data
              platforms and AI/ML solutions that solve complex, real-world problems.{' '}
            </p>

            <p>
              My journey began at <a href="https://technocolabs.com/">Technocolabs Softwares</a>
              &nbsp; where I contributed to the development of intelligent data pipelines, applying
              spectral analysis and unsupervised learning techniques to audio data. Since then, I’ve
              grown into a multidisciplinary Data & software Engineer, working with clients across
              the globe to design, implement, and scale data infrastructure using tools like Apache
              Kafka, Spark, Airflow, DBT, and cloud-native platforms.{' '}
            </p>

            <p>
              My work blends software engineering, data architecture, and machine learning to
              deliver systems that are not only efficient and reliable but also insight-driven and
              production-ready.
            </p>

            <p>Here is a list of the technologies that I'm familiar with:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me1.jpg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
