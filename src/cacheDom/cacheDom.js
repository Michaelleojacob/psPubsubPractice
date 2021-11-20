function cache() {
  const parent = document.querySelector('#container');
  return {
    parent,
    button: parent.querySelector('#button'),
    clickNum: parent.querySelector('#clickNum'),
  };
}

const cached = cache();

export default cached;
