import { getSymptoms } from '../api'; // Importing the API function to fetch symptoms

export const compareInputSymptoms = async (inputSymptoms) => {
    try {
        const response = await fetch('/api/symptoms/compare', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ symptoms: inputSymptoms }),
        });

        if (!response.ok) {
            throw new Error('Failed to compare symptoms');
        }

        const matchedSymptoms = await response.json();
        return matchedSymptoms;
    } catch (error) {
        console.error("Error comparing symptoms:", error);
        throw new Error("Failed to compare symptoms");
    }
};



export const fetchAndCategorizeSymptoms = async () => {
    let symptoms;
    try {
        symptoms = await getSymptoms(); // Fetch symptoms from the API
    } catch (error) {
        console.error("Error fetching symptoms:", error);
        throw new Error("Failed to fetch symptoms");
    }

    return categorizeSymptoms(symptoms); // Categorize the fetched symptoms

}

export const categorizeSymptoms = (symptoms) => {
  const categories = {};
  symptoms.forEach(symptom => {
    symptom.categories.forEach(category => {
      if (!categories[category]) {
        categories[category] = [];
      }
      categories[category].push(symptom.name);
    });
  });
  return categories;
};

// Function to format symptom data for display
export const formatSymptomData = (symptom) => {
  return {
    name: symptom.name,
    description: symptom.description,
    advice: symptom.advice,
    precautions: symptom.precautions,
    selfCareTips: symptom.selfCareTips,
    preventionTips: symptom.preventionTips,
  };
};
