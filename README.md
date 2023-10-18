# BOT FRIENDS Coding Challenge

## How to use this code:

- Clone the repo to your local machine

### Backend (Express)

- Navigate to the `backend` folder: `cd backend`
- Run `npm ci` to install dependencies.
- Add the `.env` file directly under the `backend' folder with the following variables:

  - DATABASE_URL=mongodb+srv://_user_:_password_@bf-cluster.dvtd36o.mongodb.net/
    > NOTE: The credentials have been sent separately in email.
  - DB_NAME=bot-friends-db
  - COLLECTION_NAME=developers

- Start the server by running `npm run dev`

The server will start, listening to port **5000**:

```
http://localhost:5000

Routes:
[GET]    /api/developers       - List all developers
[POST]   /api/developers/add   - Create a new developer.
  body: {
    firstName: string
    lastName: string
    jobDescription: string
    imageUrl: string
  }
[PUT]    /api/developers/[id]   - Update existing developer by ID
[DELETE] /api/developers/[id]   - Delete existing developer by ID
```

In order to **group by** attribute, run the script:

```
npm run groupBy -- <attr (firstName|lastName|jobDescription|imageUrl)>
```

## Client

- Navigate to the `client` folder: `cd client`
- Run `npm ci` to install dependencies.
- Start the server by running `npm run dev`

The server will start, listening to port **5173**:

> NOTE: Backend server needs to run in parallel.

---

# Comment:

I had issues connecting server to my mongodb docker instance, so I decided to use my Atlas server as a workaround.
