# Build context: /home/nick  (run via docker-compose from docker/onboarding/)

# ── Stage 1: Build — onboarding ─────────────────────────────────────────────
FROM node:22-alpine AS builder-onboarding

WORKDIR /app
COPY sites/onboarding/package.json sites/onboarding/package-lock.json* ./
RUN npm ci --ignore-scripts
COPY sites/onboarding/ .
RUN npm run build

# ── Add more build stages here for additional sites ──────────────────────────
# FROM node:22-alpine AS builder-site2
# WORKDIR /app
# COPY sites/site2/package.json sites/site2/package-lock.json* ./
# RUN npm ci --ignore-scripts
# COPY sites/site2/ .
# RUN npm run build

# ── Stage 2: Serve (Nginx) ───────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# Remove nginx defaults
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copy all nginx configs (shared settings + per-site server blocks)
COPY docker/nginx/ /etc/nginx/conf.d/

# Copy built dist from each build stage into named subdirectories
COPY --from=builder-onboarding /app/dist /usr/share/nginx/html/onboarding

# Uncomment and repeat for each additional site:
# COPY --from=builder-site2 /app/dist /usr/share/nginx/html/site2

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
