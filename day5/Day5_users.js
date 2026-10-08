const loadButton = document.querySelector("#load-users");
const filterInput = document.querySelector("#filter-input");
const status = document.querySelector("#status");
const usersList = document.querySelector("#users-list");

let users = [];

function renderUsers(list) {
  usersList.replaceChildren();

  for (const user of list) {
    const item = document.createElement("li");
    const name = document.createElement("span");
    const details = document.createElement("span");

    name.className = "user-name";
    name.textContent = user.name;

    details.className = "user-details";
    details.textContent =
      `${user.email} · ${user.address.city} · ${user.company.name}`;

    item.append(name, details);
    usersList.append(item);
  }

  if (users.length > 0 && list.length === 0) {
    status.textContent = "No users match your filter.";
  } else if (users.length > 0) {
    status.textContent = `Showing ${list.length} of ${users.length} users.`;
  }
}

async function loadUsers() {
  loadButton.disabled = true;
  status.textContent = "Loading users…";
  usersList.replaceChildren();

  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    users = await response.json();
    const query = filterInput.value.trim().toLowerCase();
    renderUsers(
      users.filter((user) => user.name.toLowerCase().includes(query))
    );
  } catch (error) {
    users = [];
    status.textContent = `Could not load users: ${error.message}`;
  } finally {
    loadButton.disabled = false;
  }
}

loadButton.addEventListener("click", loadUsers);

filterInput.addEventListener("input", () => {
  const query = filterInput.value.trim().toLowerCase();
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(query)
  );

  renderUsers(filteredUsers);
});
