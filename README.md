# Comparing Software Process Models in Cloud-Native and Live-Service Architectures

An empirical comparison of software development processes at Netflix and Riot Games, focusing on how architecture, release cadence, and operational risk shape process choices.

## Project information

- **Author:** Truong Phat Tu
- **Faculty sponsor:** Dr. Visvasuresh (Victor) Govindaswamy
- **Institution:** Concordia University Chicago
- **Course:** Computer Networks / Software Engineering (BLA 02)
- **Semester:** Fall 2026
- **Track:** Software Process Models & Comparative Systems Engineering
- **Hashtag:** #WGP — “From Learning to Building — From Building to Innovation”

## Overview

This study compares Netflix’s cloud-native video streaming platform with Riot Games’ live-service multiplayer game engine, League of Legends. It examines four core software process activities: requirements specification, design and implementation, verification and validation (V&V), and continuous evolution.

The comparison considers plan-driven Waterfall, incremental development, integration and configuration, and Agile methodologies. Rather than identifying one universally best model, the study explores how process choices fit each system’s architecture, team organization, operational risk, and release requirements.

## Comparison at a glance

| Area | Netflix | Riot Games |
|---|---|---|
| System | Cloud-native video streaming platform | Live-service multiplayer game (League of Legends) |
| Development approach | Continuous, microservices-driven DevOps | Hybrid Agile-incremental framework |
| Release and feedback | Thousands of production deployments daily, feature flags, and A/B telemetry | Synchronized bi-weekly global patches and public beta playtesting (PBE) |
| Verification and resilience | Chaos Engineering and continuous validation | Multi-tier playtesting and deterministic client-server validation |

## Key takeaway

Software process selection is constrained by system architecture, team topology, safety and security risks, and the required release frequency. Large-scale platforms tend to combine plan-driven architectural baselines with iterative execution. AI-assisted static analysis and automated canary verification are emerging considerations that further support adapting processes to operational risk and domain constraints.

## Keywords

Software Process Models · Agile Development · Incremental Delivery · Waterfall · Chaos Engineering · Microservices · Live-Service Games · Netflix · Riot Games

## Project links

- **YouTube:** [Link](https://youtu.be/95JT58Lz9xY)
- **LinkedIn post:** [Link](https://lnkd.in/p/gEe6MZ-f)
- **Github Link:** [Link](https://github.com/sturekev/blast)
