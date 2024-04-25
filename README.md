**Fetch data by Using React js**

The code is a React functional component named App that fetches posts data from the JSONPlaceholder API and displays it. It uses the useState hook to manage state for the posts data and loading status. The useEffect hook is used to fetch data when the component mounts. While data is being fetched, loading spinners are displayed, and once the data is loaded, the posts are rendered as Bootstrap cards. Finally, we get a  message displayed below the posts.

 ** Small Roadmap **     

Define State -->   Fetch Data  ──────────>   Display Loading ──────────>  Render Posts
                                               |                             |
                                               v                             v
                                              Display Completion Message <───────

    

Here We start by defining state variables for managing the posts data and loading status ,then we fetch data from the JSONPlaceholder API using the useEffect hook.
While data is being fetched, loading spinners are displayed to indicate the loading process.
Once the data is loaded, the posts are rendered as Bootstrap cards.
Finally, after all posts are rendered, a completion message is displayed.

**Steps :**

1) Define State: Initialize state variables for posts data and loading status using the useState hook.
2) Fetch Data: Use the useEffect hook to fetch posts data from the JSONPlaceholder API when the component mounts.
3) Display Loading: Show loading spinners while data is being fetched.
4) Render Posts: Once data is loaded, render each post as a Bootstrap card.
5) Display Completion Message: Show a completion message once all posts are rendered.
