import { useState } from "react";

export default function CalorieCalculator() {
  const [showForm, setShowForm] = useState(false);
  const [bmi, setBmi] = useState<string>("");  // Explicitly set the type as string
  const [calories, setCalories] = useState<number | null>(null);  // Allow number or null
  const [recommendations, setRecommendations] = useState<string>("");

  const handleBlur = () => {
    setShowForm(true);
  };

  const calculateCalories = (bmiValue: string) => {  // Explicitly set the parameter type as string
    const bmiNum = parseFloat(bmiValue);
    let recommendedCalories = 0;

    if (bmiNum < 18.5) {
      recommendedCalories = 2500; // Higher calorie intake for underweight individuals
      setRecommendations(
        "Include healthy fats (like avocados, nuts), proteins, and complex carbs."
      );
    } else if (bmiNum >= 18.5 && bmiNum < 24.9) {
      recommendedCalories = 2000; // Normal calorie intake for healthy BMI
      setRecommendations(
        "Maintain a balanced diet with fruits, vegetables, proteins, and whole grains."
      );
    } else if (bmiNum >= 25 && bmiNum < 29.9) {
      recommendedCalories = 1800; // Lower calorie intake for overweight individuals
      setRecommendations(
        "Focus on low-calorie foods, lean proteins, and avoid sugary snacks."
      );
    } else {
      recommendedCalories = 1500; // Calorie intake for obese individuals
      setRecommendations(
        "Avoid high-fat and sugary foods. Focus on vegetables, lean proteins, and whole grains."
      );
    }

    setCalories(recommendedCalories);
  };

  const handleSubmit = (e: React.FormEvent) => {  // Explicitly define the event type
    e.preventDefault();
    if (bmi) {
      calculateCalories(bmi);
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Calorie & Stress Management</h2>

      {!showForm && (
        <input
          type="text"
          placeholder="Focus on this field, then blur it"
          onBlur={handleBlur}
          className="w-full p-2 border rounded mb-4"
        />
      )}

      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            <span className="text-gray-700">Enter your BMI:</span>
            <input
              type="number"
              step="0.1"
              value={bmi}
              onChange={(e) => setBmi(e.target.value)}
              className="mt-1 block w-full p-2 border rounded"
              placeholder="e.g., 23.5"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Calculate Calories
          </button>
        </form>
      )}

      {calories && (
        <div className="mt-4 bg-green-100 p-4 rounded">
          <h3 className="text-lg font-semibold text-green-700">
            Recommended Calorie Intake: {calories} kcal/day
          </h3>
          <p className="mt-2">
            <strong>Dietary Recommendations:</strong> {recommendations}
          </p>
          <p className="mt-2 text-red-600">
            <strong>Foods to Avoid:</strong> High-sugar foods, fried items, caffeine, and alcohol.
          </p>
        </div>
      )}
    </div>
  );
}
