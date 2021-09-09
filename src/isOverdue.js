export default item => !item.complete && item.timestamp < new Date().getTime();
