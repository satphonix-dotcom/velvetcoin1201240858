import React from 'react';
import LuxuryLayout from '../layout/LuxuryLayout';

const Shipping = () => {
  return (
    <LuxuryLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-serif text-luxury-cream mb-8">Shipping Information</h1>
        <div className="prose prose-invert max-w-none">
          {/* Shipping content */}
        </div>
      </div>
    </LuxuryLayout>
  );
};

export default Shipping;