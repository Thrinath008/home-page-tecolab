# 1. Use the official Node.js image
FROM node:18-alpine AS builder

# 2. Set working directory
WORKDIR /app

# 3. Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# 4. Copy rest of the code
COPY . .

# 5. Build the Next.js app
COPY next.config.js ./
RUN npm run build

# 6. Use a lighter image for running
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# 7. Copy built output and required files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 8. Expose the port
EXPOSE 3000

# 9. Run the app
CMD ["npm", "start"]