function computeAmount(init = 0) {
  let totalAmount = init;
  return {
    lakhs: function (num: number) {
      totalAmount += num * 100000;
      return this;
    },
    print: function () {
      console.log(totalAmount);
    },
  };
}
computeAmount().lakhs(15).print();
