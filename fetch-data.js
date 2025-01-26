// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Define the function to fetch user data
    async function fetchUserData() {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Select the data container element
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create and append the user list
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set the user name
                userList.appendChild(listItem); // Append to the list
            });
            dataContainer.appendChild(userList); // Append the list to the container
        } catch (error) {
            // Handle any errors
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    // Call the function when the DOM content is loaded
    fetchUserData();
});
