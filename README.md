### Getting started with nodeJS, expressJS, and MongoDB

# POST API

1. Create POST API

```
app.post("/users", (req, res) => {
  console.log("POST API Called!");
});
```

** ON THE CLIENT SIDE **

2. Use fetch with method POST.
3. Add headers to the fetch.
``` 'content-type':'application/json' ```
4. Add body to the fetch to send data.
5. Use ```JSON.stringify(data) ``` while sending data.

```
fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
```

** ON THE SERVER SIDE **

- Use ```express.json()``` as middleware.

```
app.use(express.json());
app.post("/users", (req, res) => {
  console.log("POST API Called!");
  console.log(req.body);
});

```

- Finally to add (POST) a new user to the API(data)

** ON THE SERVER SIDE **

```
app.post("/users", (req, res) => {
  console.log("POST API Called!");
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  console.log(user);
  res.send(user);
});
```

** ON THE CLIENT SIDE **

```
fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const newUsers = [...users, data];
        setUsers(newUsers);
      })
      .catch((error) => console.error(error));

    event.target.reset();
```# simple-node-server
