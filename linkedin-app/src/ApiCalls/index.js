export const fetchProfiles = async () => {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/profile/",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${process.env.REACT_APP_JWT_TOKEN}`
     },
    }
  );

  let allUserProfiles = await response.json();
  return allUserProfiles;
};
<<<<<<< Updated upstream
export const fetchPersonalProfileInfo = async () => {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/profile/me",
=======
export const fetchPersonalProfile = async (id) => {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/profile/" + id,
>>>>>>> Stashed changes
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${process.env.REACT_APP_JWT_TOKEN}`
     },
    }
  );

  let personalProfile = await response.json();
  return personalProfile;
<<<<<<< Updated upstream
};

=======
};
>>>>>>> Stashed changes
