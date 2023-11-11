const ethereumAddressRegex = /^0x[a-fA-F0-9]{40}$/;
const ethereumTxHashRegex = /^0x[a-fA-F0-9]{64}$/;
const decimalRegex = /[0-9]+/;

export const isValidEthereumAddress = (address) => {
  return ethereumAddressRegex.test(address);
};

export const isValidEthereumTxHash = (txHash) => {
  return ethereumTxHashRegex.test(txHash);
};

export const isNumber = (blockNumber) => {
  return decimalRegex.test(blockNumber);
}