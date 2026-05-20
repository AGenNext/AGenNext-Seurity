# Pre-deploy security gate

Agent-Security owns vulnerability testing, security hardening validation, and deploy-readiness security gates for AGenNext.

## Decision

Agent-Security must run before Agent-deploy promotes or releases workloads.

## Boundary

| Component | Responsibility |
|---|---|
| Agent-Security | Vulnerability testing, hardening checks, policy gates |
| Agent-deploy | CI/CD, release workflows, deployment packaging |
| AgentKube | Kubernetes SDK operations |
| Agent-Secrets | Secure storage and secret access boundaries |
| Agent-Runtime | Runtime execution and profiles |

## Pre-deploy checks

Agent-Security should own:

- dependency vulnerability scans
- container image vulnerability scans
- secret scanning
- IaC/manifests security checks
- Kubernetes manifest hardening
- RBAC review
- network policy validation
- SSH hardening checks
- OS hardening baseline checks
- exposed service review
- supply-chain checks
- SBOM verification
- signed artifact verification

## Deployment gate flow

```txt
Pull request / release candidate
  ↓
Agent-Security scans and validates
  ↓
Security report generated
  ↓
Agent-deploy proceeds only if gate passes
  ↓
Deployment to target environment
```

## k8smicro preflight

Before deploying k8smicro to a Kimsufi/OVH node, Agent-Security should validate:

- SSH password login disabled
- firewall configured
- fail2ban installed/running
- root login policy reviewed
- required ports only exposed
- k3s manifests reviewed
- SurrealDB credentials not default in production
- Kubernetes RBAC least privilege
- secrets not committed to repo

## Rule

Agent-deploy should not bypass Agent-Security for production releases.
