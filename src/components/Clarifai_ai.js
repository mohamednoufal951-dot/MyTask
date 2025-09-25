import axios from "axios";

const CLARIFAI_API_KEY = "YOUR_API_KEY"; // 🔑 Get from Clarifai portal
const CLARIFAI_MODEL_ID = "general-image-recognition"; // Default general model

export const fetchImageTags = async (imageUrl) => {
  try {
    const response = await axios.post(
      "https://api.clarifai.com/v2/models/" + CLARIFAI_MODEL_ID + "/outputs",
      {
        inputs: [
          {
            data: {
              image: { url: imageUrl },
            },
          },
        ],
      },
      {
        headers: {
          Authorization: `Key ${CLARIFAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // Extract top 5 tags
    const tags =
      response.data.outputs[0].data.concepts
        .slice(0, 5) // get top 5
        .map((concept) => concept.name);

    return tags; // ["beach", "sunset", "sky", ...]
  } catch (error) {
    console.error("Clarifai error:", error.response?.data || error.message);
    return [];
  }
};
