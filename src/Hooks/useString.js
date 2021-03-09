const useString = ({ string }) => {
  const parrentElement = document.createElement('div');
  parrentElement.innerHTML = string;

  return parrentElement;
};

export default useString;
