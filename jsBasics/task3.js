function checkOrder (available, ordered){
  if (available < ordered){
    console.log("Your order is too large, we don’t have enough goods.");
    return;
  }
  if (ordered === 0){
    console.log("Your order is empty");
    return;
  }
  console.log("Your order is accepted");
}

checkOrder(10, 15);
checkOrder(10, 0);
checkOrder(10, 4);