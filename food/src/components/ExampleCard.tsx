import React from 'react';
import { Lightbulb } from 'lucide-react';

export function ExampleCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8 max-w-full sm:max-w-xl mx-auto">
      <div className="flex items-center mb-4">
        <Lightbulb className="w-6 h-6 text-orange-500 mr-2" />
        <h3 className="text-lg font-semibold">Example Input</h3>
      </div>
      <div className="text-gray-600">
        <p className="mb-2">Try something like:</p>
        <pre className="bg-gray-50 p-3 rounded-md text-sm whitespace-normal">
          chicken breast, spinach, garlic, olive oil, lemon, pasta
        </pre>
      </div>
    </div>
  );
}