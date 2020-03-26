module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const newItem = {
    name: item.name,
    durability: 100,
    enhancement: item.enhancement
  };
  return newItem;
}

function fail(item) {
  if (item.enhancement < 20) {
    const newItem = {
      name: item.name,
      durability: 100,
      enhancement: item.enhancement + 1
    };
    return newItem;
  } else {
    return item;
  }
}

function repair(item) {
  return { ...item };
}

function get(item) {
  return { ...item };
}
