const employees = [
  { name: "Macarena", hourlyRate: 27, hoursWorked: 45 },
  { name: "Gretel", hourlyRate: 20, hoursWorked: 30 },
  { name: "Ingrid", hourlyRate: 28, hoursWorked: 41 },
];

function calculateBasePay(rate, hours) {
  const baseHours = Math.min(hours, 40);
  return rate * baseHours;
}

function calculateOvertimePay(rate, hours) {
  const overtimeHours = Math.max(hours - 40, 0);
  return overtimeHours * rate * 1.5;
}

function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}

function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const netPay = grossPay - calculateTaxes(grossPay);

  return {
    name: employee.name,
    basePay: basePay.toFixed(2),
    overtimePay: overtimePay.toFixed(2),
    grossPay: grossPay.toFixed(2),
    netPay: netPay.toFixed(2),
  };
}

for (const employee of employees) {
  const payroll = processPayroll(employee);
  console.log(payroll);
}
