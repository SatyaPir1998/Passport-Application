import React, { useState } from 'react';

const Approve/RejectApplicationStep = ({ onComplete, onBack }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // TODO: Implement step logic here
      console.log('Step data:', formData);
      
      // Simulate processing
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onComplete(formData);
    } catch (error) {
      console.error('Step error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Approve/Reject Application
        </h2>
        <p className="text-gray-600">
          Step 3 - manual step
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Dynamic form fields based on step type */}
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Notes
          </label>
          <textarea
            name="notes"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter any notes or comments..."
            onChange={handleInputChange}
          />
        </div>
        

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={onBack}
            className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? 'Processing...' : 'Complete Step'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Approve/RejectApplicationStep;