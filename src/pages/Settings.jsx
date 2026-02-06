import React, { useState } from 'react';
import { useSettingsStore } from '../utils/store';

const Settings = () => {
  const { currency, setCurrency } = useSettingsStore();
  const [tempCurrency, setTempCurrency] = useState(currency);

  const handleSave = () => {
    setCurrency(tempCurrency);
    alert('Currency setting saved!');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p className="text-gray-600">Application-level settings (currency, themes) can be configured here.</p>

      <div className="mt-6 max-w-md">
        <label className="block text-sm font-medium text-gray-700">Default Currency</label>
        <select
          className="input-field mt-1"
          value={tempCurrency}
          onChange={(e) => setTempCurrency(e.target.value)}
        >
          <option value="INR">INR (Indian Rupee)</option>
          <option value="USD">USD (US Dollar)</option>
          <option value="EUR">EUR (Euro)</option>
        </select>

        <div className="mt-6">
          <button onClick={handleSave} className="px-4 py-2 bg-blue-600 text-white rounded-lg">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
