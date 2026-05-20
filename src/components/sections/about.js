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
    'Programming Languages⋮ Python, Go, SQL',
    'Developer Tools⋮ Git, GitHub, Pytest, SQLFluff, YAML, Bash, VSCode, Wiz',
    'Data Infra/DevOps⋮ AWS, GCP, Digital Ocean, OVH Cloud, Terraform, Ansible, GitHub Actions, Jenkins, Docker, Helm, Kubernetes, Prometheus, Loki, Grafana',
    'Data Processing⋮ Apache Spark, Apache Kafka, SNS, SQS, Debezium, Pandas, Athena',
    'ETL/ELT Tools⋮ Prefect, Apache Airflow, Glue, EMR, Lambda, Step Functions, Fivetran, dltHub',
    'DB/Datastore/Warehouse: Postgres, MongoDB, Redis, S3, Minio, Snowflake, BigQuery, Apache Iceberg',
    'Data Modeling & Transformation⋮ DBT, Dimensional Modeling, ERD Modeling, Data Warehouse Design, Tableau, Looker',
    'Software: Flask, FastAPI, RabbitMQ, Traefik, Nginx',
    'ML/AI: LangChain, LangGraph, Mastra, Jupyter, Scikit-learn, Numpy, Keras, Tensorflow, JAX, Flax, OpenAI, NLTK, Librosa, SciPy',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              I’m a Data &amp; Software Engineer specializing in production-grade data pipelines,
              cloud-native platforms, data lakehouse architectures, and AI-powered agent systems
              that turn raw data into real insights and intelligent decisions.
            </p>

            <p>
              Currently a Data Engineer at <a href="https://skywardops.com/">SkywardOps</a>, where I
              design and deploy Apache Iceberg table infrastructure on AWS, architect near real-time
              streaming pipelines, and build lakehouse solutions that reduce storage costs while
              maintaining sub-minute data freshness for business-critical dashboards.
            </p>

            <p>
              Across fulltime and freelance engagements, I’ve worked with teams across multiple
              industries and geographies to deliver scalable data platforms, reliable pipelines, and
              production-ready systems that drive real business outcomes.
            </p>

            <p>
              My foundation in Computer Engineering grounds everything I build, from data modeling
              and pipeline reliability to observability and cost-efficient architecture. Here are
              some of the technologies I work with:
            </p>
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
