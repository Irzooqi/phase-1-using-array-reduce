const batteryBatches = [4, 5, 12, 7, 3];

function getTotalBatteries(batches) {
  return batches.reduce((total, batch) => total + batch, 0);
}

const totalBatteries = getTotalBatteries(batteryBatches);
