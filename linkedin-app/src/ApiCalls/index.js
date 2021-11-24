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

export const fetchPersonalProfileInfo = async (id) => {
  let response = await fetch(
    "https://striveschool-api.herokuapp.com/api/profile/"+ id,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization:`Bearer ${process.env.REACT_APP_JWT_TOKEN}`
     },
    }
  );

  let personalProfile = await response.json();
  return personalProfile;
};

