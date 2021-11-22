export const fetchProfiles = async () => {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/profile/",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTliYjQxN2QzNzU4MDAwMTU0OWI5ZmQiLCJpYXQiOjE2Mzc1OTQxMzUsImV4cCI6MTYzODgwMzczNX0.GF65NsMQUDXPIszIMXhd7gBE5ThkNe1QjyfkYnFy8Tg",
      },
    }
  );

  let Profiles = await response.json();
  return Profiles;
};
