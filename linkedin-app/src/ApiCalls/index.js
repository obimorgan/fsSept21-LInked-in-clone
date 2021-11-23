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

  let Profiles = await response.json();
  return Profiles;
};
export const personalProfileInfo = async () => {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/profile/me",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${process.env.REACT_APP_JWT_TOKEN}`
     },
    }
  );

  let Profiles = await response.json();
  return Profiles;
};

