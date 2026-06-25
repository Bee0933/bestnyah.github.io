---
date: '1'
title: 'Solana DEX Analytics'
cover: './solana-Pipeline-architecture-diagram.png'
github: 'https://github.com/Bee0933/solana-dex-analytics'
external: '#'
tech:
  - Python
  - sql
  - dbt
  - BigQuery
  - Google Cloud Platform
  - Cloud Run
  - Cloud Scheduler
  - Terraform
  - Docker
  - Grafana
  - GitHub Actions
cta: 'https://github.com/Bee0933/solana-dex-analytics'
---

A daily data pipeline analyzing Solana DEX activity across Raydium, Orca, Meteora and DefiLlama, surfacing liquidity provider earnings and DEX market share through interactive Grafana dashboards. <br>

It runs on Cloud Scheduler as a containerized Cloud Run job: extracting from public APIs, landing raw JSON in GCS, loading into BigQuery, and transforming with dbt. Infrastructure is managed with Terraform and CI/CD runs on GitHub Actions.
