import React from 'react';
import { Send } from 'lucide-react';

interface IngredientFormProps {
  ingredients: string;
  setIngredients: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}

export function IngredientForm({ ingredients, setIngredients, onSubmit, loading }: IngredientFormProps) {
  return (
    <form onSubmit={onSubmit} className="max-w-xl mx-auto">
      <div className="relative transform hover:scale-102 transition-all duration-300">
        <textarea
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter your ingredients (e.g., chicken, rice, tomatoes)"
          className="w-full px-4 py-3 rounded-lg shadow-lg border-2 border-orange-200 focus:border-orange-500 focus:ring-orange-500 transition-all duration-300 min-h-[120px]"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="absolute bottom-4 right-4 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 hover:scale-110"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </form>
  );
}