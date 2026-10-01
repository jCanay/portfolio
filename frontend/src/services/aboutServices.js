import aboutJson from "../mocks/about.json";

const multiplier = 25;

const getLatency = async () => {
  let latency = Math.random() * 250 * multiplier * 0.25 + 1 * multiplier;
  console.log(`Latency: ${latency}`);
  return new Promise((r) => setTimeout(r, latency));
};

export const aboutServices = {
  get: async () => {
    await getLatency();
    console.log("Resolved");
    return aboutJson;
  },
  getOccupation: async () => {
    await getLatency();
    return { es: aboutJson.occupation.es, us: aboutJson.occupation.us };
  },
};
