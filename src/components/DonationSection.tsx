
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const DonationSection = () => {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const donationAmounts = [500, 1000, 2500, 5000, 10000, 25000];

  const bigDonors = [
    { name: 'Agriculture Minister', amount: 6000000, purpose: 'Mahudi Ashram Development', month: 'November 2024' },
    { name: 'Business Philanthropist', amount: 2500000, purpose: 'Gau Seva Initiative', month: 'October 2024' },
    { name: 'Devotee Family Trust', amount: 1800000, purpose: 'Medical Seva Program', month: 'September 2024' },
    { name: 'Corporate Sponsor', amount: 3200000, purpose: 'Educational Infrastructure', month: 'August 2024' }
  ];

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const currentAmount = customAmount ? parseInt(customAmount) : selectedAmount;

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-orange-600">Donate</span> for Divine Cause
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your generous contribution helps build sacred spaces and support various seva activities. 
            Every donation is a step towards collective spiritual upliftment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Donation Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Make a Donation</h3>
            
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Select Amount:</h4>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {donationAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount('');
                    }}
                    className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                      selectedAmount === amount && !customAmount
                        ? 'border-orange-600 bg-orange-50 text-orange-600'
                        : 'border-gray-200 hover:border-orange-300'
                    }`}
                  >
                    {formatCurrency(amount)}
                  </button>
                ))}
              </div>
              
              <div className="mb-4">
                <input
                  type="number"
                  placeholder="Enter custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none"
                />
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">Donation Purpose:</h4>
              <select className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-orange-600 focus:outline-none">
                <option>General Ashram Development</option>
                <option>Mahudi Ashram Construction</option>
                <option>Ajmer Ashram Development</option>
                <option>Gau Seva Initiative</option>
                <option>Annadan Seva</option>
                <option>Medical Seva Program</option>
                <option>Educational Activities</option>
                <option>Where Most Needed</option>
              </select>
            </div>

            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-orange-600 mb-2">
                {formatCurrency(currentAmount || 0)}
              </div>
              <p className="text-gray-600">Your contribution amount</p>
            </div>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 text-lg rounded-lg">
                  Proceed to Payment
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle>Complete Your Donation</DialogTitle>
                </DialogHeader>
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-orange-600 mb-2">
                      {formatCurrency(currentAmount || 0)}
                    </div>
                    <p className="text-gray-600">Thank you for your generous contribution!</p>
                  </div>
                  
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                  
                  <Button className="w-full mt-6 bg-orange-600 hover:bg-orange-700 text-white">
                    Complete Donation
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    Secure payment processing. You will receive a tax receipt via email.
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Donation Statistics */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Monthly Donation Summary</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">{formatCurrency(1250000)}</div>
                  <div className="text-gray-600 text-sm">Average Monthly</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">2,847</div>
                  <div className="text-gray-600 text-sm">Total Donors</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Recent Major Contributions</h3>
              <div className="space-y-3">
                {bigDonors.map((donor, index) => (
                  <div key={index} className="border-l-4 border-orange-400 pl-4 py-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-semibold text-gray-800">{donor.name}</div>
                        <div className="text-sm text-gray-600">{donor.purpose}</div>
                        <div className="text-xs text-gray-500">{donor.month}</div>
                      </div>
                      <div className="text-lg font-bold text-orange-600">
                        {formatCurrency(donor.amount)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-2">🙏 Tax Benefits</h3>
              <p className="text-gray-600 text-sm">
                All donations are eligible for tax exemption under Section 80G. 
                You will receive an official receipt for tax purposes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
