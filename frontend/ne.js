import axios from 'axios';

// Function to add a new train
const addTrain = async () => {
  try {
    // Payload containing train data
    const trainData = {
      train_Name: 'ccaac',
      train_Stauts: 'bbaab',
      seatId: 2
    };

    // Send POST request to the API endpoint
    const response = await axios.post('https://your-api-url/AddSeat', trainData);

    // Log the response data
    console.log(response.data);
  } catch (error) {
    // Log any errors
    console.error(error);
  }
};

// Call the addTrain function
addTrain();