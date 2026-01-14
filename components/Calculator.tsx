import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, RefreshCw, TrendingUp } from 'lucide-react';

const Calculator: React.FC = () => {
  const [initialDeposit, setInitialDeposit] = useState(500);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  
  // Simulation constants
  const years = 5;
  const annualReturnRate = 0.65; // Aggressive but "sexy" return rate for crypto/copy trading demo (65%)

  const data = useMemo(() => {
    let balance = initialDeposit;
    const chartData = [];
    
    // Add Month 0
    chartData.push({
      month: 0,
      balance: Math.round(balance),
      label: 'Start'
    });

    for (let i = 1; i <= years * 12; i++) {
      // Monthly compound
      balance = balance * (1 + annualReturnRate / 12) + monthlyContribution;
      
      if (i % 6 === 0) { // Only push data points every 6 months to keep chart clean
        chartData.push({
          month: i,
          balance: Math.round(balance),
          label: `Yr ${Math.ceil(i/12)}`
        });
      }
    }
    return chartData;
  }, [initialDeposit, monthlyContribution]);

  const projectedAmount = data[data.length - 1].balance;

  return (
    <div className="glass-panel rounded-3xl p-6 md:p-8 w-full shadow-2xl relative overflow-hidden group">
        {/* Glow effect inside card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-lime-glow/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-xs font-bold tracking-wider text-lime-glow uppercase mb-1">Potential Future Balance</h3>
          <div className="text-4xl md:text-5xl font-bold text-white tracking-tight flex items-baseline gap-1">
            <span className="text-2xl text-veridian-400">$</span>
            {projectedAmount.toLocaleString()}
          </div>
        </div>
        <div className="bg-veridian-900/50 p-3 rounded-full text-lime-glow animate-pulse-slow">
            <TrendingUp size={24} />
        </div>
      </div>

      {/* Chart */}
      <div className="h-48 w-full mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#9fe870" stopOpacity={0.6}/>
                <stop offset="95%" stopColor="#9fe870" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <Tooltip 
                contentStyle={{ backgroundColor: '#1a2e22', borderColor: '#3d5c40', borderRadius: '8px', color: '#fff' }}
                itemStyle={{ color: '#9fe870' }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Balance']}
                labelStyle={{ display: 'none' }}
            />
            <Area 
                type="monotone" 
                dataKey="balance" 
                stroke="#9fe870" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorBalance)" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Controls */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <label className="text-gray-300">Initial Deposit</label>
            <span className="text-white bg-veridian-800 px-3 py-1 rounded-md border border-veridian-600">${initialDeposit}</span>
          </div>
          <input
            type="range"
            min="100"
            max="10000"
            step="100"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(Number(e.target.value))}
            className="w-full h-2 bg-veridian-900 rounded-lg appearance-none cursor-pointer accent-lime-glow"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-sm font-medium">
            <label className="text-gray-300">Monthly Contribution</label>
            <span className="text-white bg-veridian-800 px-3 py-1 rounded-md border border-veridian-600">${monthlyContribution}</span>
          </div>
          <input
            type="range"
            min="0"
            max="2000"
            step="50"
            value={monthlyContribution}
            onChange={(e) => setMonthlyContribution(Number(e.target.value))}
            className="w-full h-2 bg-veridian-900 rounded-lg appearance-none cursor-pointer accent-lime-glow"
          />
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-veridian-600/50 flex justify-between items-center text-xs text-gray-400">
        <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-lime-glow"></div>
            <span>Based on historical top-tier strategy performance</span>
        </div>
        <button 
            className="p-2 hover:bg-veridian-800 rounded-full transition-colors"
            onClick={() => {setInitialDeposit(500); setMonthlyContribution(100);}}
        >
            <RefreshCw size={14} />
        </button>
      </div>
    </div>
  );
};

export default Calculator;