import React from 'react';
import { Download } from 'lucide-react';
import html2pdf from 'html2pdf.js';

interface DownloadButtonProps {
  recipe: string;
}

export function DownloadButton({ recipe }: DownloadButtonProps) {
  const formatRecipe = (recipeText) => {
    if (!recipeText || recipeText === null) {
      return "No recipe details available.";
    }
    return recipeText.split('\n').map((line) => {
      const boldPattern = /\*\*(.*?)\*\*/g;
      return line.replace(boldPattern, '<span class="text-orange-500 font-bold">$1</span>');
    }).join('<br />');
  };

  const handleDownload = () => {
    const element = document.createElement('div');
    const formattedRecipe = formatRecipe(recipe);
    element.innerHTML = formattedRecipe;
    element.style.padding = '20px';
    
    const opt = {
      margin: 1,
      filename: 'recipe.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <button
      onClick={handleDownload}
      className="fixed bottom-20 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors duration-300 mb-4"
      aria-label="Download Recipe"
    >
      <Download className="w-6 h-6" />
    </button>
  );
}