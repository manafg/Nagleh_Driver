import axios from 'axios';
import {AsyncStorage} from 'react-native';

const token =  AsyncStorage.getItem('Token');
var Client = axios.create({
    baseURL: 'https://www.nagleh.app/api',
    timeout: 5000,
    headers: {
      Accept: 'application/json;charset=UTF-8',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmYWRkMzE0YzY1NzU5NjVmY2M3NTA5OSIsIm5hbWUiOiJ1bmRlZmluZWQgdW5kZWZpbmVkIiwicGhvbmUiOiIrOTYyNzc3Nzc3Nzc3IiwiaWF0IjoxNjA1NzExODUxfQ.EHn5c4wIa0OcjUPjllQ7ry2nnu6PcPGyJNQakScSgxQ` //${token}
  },
  });
  //ss
 export default Client;