// script.js
document.addEventListener("DOMContentLoaded", () => {
  const userCardsContainer = document.getElementById("user-cards");

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      displayUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
      userCardsContainer.innerHTML =
        '<p class="text-red-500">Error loading users.</p>';
    }
  };

  const displayUsers = (users) => {
    users.forEach((user) => {
      const card = document.createElement("div");
      card.className = "bg-white shadow-lg rounded-lg p-6";
      card.innerHTML = `
                <h2 class="text-xl font-semibold">${user.name}</h2>
                <p class="text-gray-600">${user.email}</p>
                <p class="text-gray-600">${user.phone}</p>
                <p class="text-gray-600">${user.website}</p>
            `;
      userCardsContainer.appendChild(card);
    });
  };

  fetchUsers();
});
