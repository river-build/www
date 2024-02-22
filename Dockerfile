FROM node:18

WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Install app dependencies
RUN pnpm install

# Copy the rest of the app files
COPY . .

# Build the Next.js app
RUN pnpm run build

# Expose the appropriate port (if needed)
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]
