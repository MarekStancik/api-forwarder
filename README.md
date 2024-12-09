# API Forwarder

A simple API forwarder built with Node.js and Express, designed to bypass rate limits or other restrictions by acting as a proxy. Includes basic authentication for security.

## Features

- **Forward API Requests**: Pass API requests through this server to forward them to a target endpoint.
- **Simple Authentication**: Secured with an `x-session-token` header that is validated against an environment variable.
- **Rate Limit Mitigation**: Helps in scenarios where Google Sheets or other shared hosting environments hit API rate limits.
- **Vercel Deployment Ready**: Easily deployable on Vercel for serverless functionality.

---

## Installation

1. **Clone the Repository**

   ```
   git clone https://github.com/your-username/api-forwarder.git
   cd api-forwarder
   ```

2. **Install Dependencies**

   ```
   npm install
   ```

3. **Set Environment Variables**

   Create a `.env` file in the root of the project and define your session token:

   ```
   SESSION_TOKEN=your-secret-token
   ```

4. **Run Locally**

   ```
   npm start
   ```

   The server will start on [http://localhost:3000](http://localhost:3000).

---

## Usage

Send a GET request to the `/forward` endpoint with the following parameters:

- **Headers**:
  - `x-session-token`: Your pre-defined session token (set in the `.env` file).

- **Query Parameters**:
  - `url`: The URL of the API you want to forward to.

### Example Request

```
curl -X GET "https://your.vercel.app/forward?url=https%3A%2F%2Fapi.coingecko.com%2Fapi%2Fv3%2Fsimple%2Fprice%3Fids%3Dakash-network%26vs_currencies%3Dusd" -H "x-session-token: your-secret-token" -H "x-vercel-protection-bypass: vercel-security-bypass"
```

---

## Deployment on Vercel

1. **Install Vercel CLI**

   ```
   npm install -g vercel
   ```

2. **Deploy**

   ```
   vercel
   ```

   Follow the prompts to set up your deployment. Make sure to add your `SESSION_TOKEN` environment variable in the Vercel dashboard.

3. **Access the Live Server**

   After deployment, Vercel will provide you with a live URL where your API forwarder is hosted.

---

## Notes

- Ensure the forwarded URL is valid and properly encoded to avoid errors.
- Monitor your Vercel usage limits to prevent disruptions in service.

