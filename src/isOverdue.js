export default item => !item.complete && item.timsestamp < new Date().getTime();
