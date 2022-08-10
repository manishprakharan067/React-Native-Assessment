import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
// -------------------- Async Storage -----------------------
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
