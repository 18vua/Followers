# Roblox Followers Proxy

A simple Node.js backend that fetches Roblox follower counts securely.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env` and edit your secret key:
   ```bash
   cp .env.example .env
   ```

3. Run the server:
   ```bash
   npm start
   ```

## Usage

Request followers by user ID (with your secret key):

```
GET http://localhost:3000/followers/123456
Authorization: balling24hours
```

Response:
```json
{
  "userId": 123456,
  "followers": 927
}
```
