// Customer
class Customer {
    orders = [];
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
    addOrder(order) {
      this.orders.push(order);
    }
  }
  
  // Order
  class Order {
    payment = null;
    orderDetails = [];
    constructor(date, status) {
      this.date = date;
      this.status = status;
    }
  
    calcSubTotal() {
      console.log("calcSubTotal");
    }
    calcTax() {
      console.log("calcTax");
    }
    calcTotal() {
      console.log("calcTotal");
    }
    calcTotalWeight() {
      console.log("calcTotalWeight");
    }
    addPayment(payment) {
      this.payment = payment;
    }
    addOrderDetail(orderDetail) {
      this.orderDetails.push(orderDetail);
    }
  }
  
  // OrderDetail
  class OrderDetail {
    item = null;
    constructor(quantity, textStatus) {
      this.quantity = quantity;
      this.textStatus = textStatus;
    }
    calcSubTotal() {
      console.log("calcSubTotal");
    }
    calcWeight() {
      console.log("calcWeight");
    }
    calcTax() {
      console.log("calcTax");
    }
    addItem(item) {
      this.item = item;
    }
  }
  
  // Item
  class Item {
    constructor(shoppingWeight, description, price) {
      this.shoppingWeight = shoppingWeight;
      this.description = description;
      this.price = price;
    }
    getPriceForQuantity() {
      console.log("getPriceForQuantity");
    }
    getTax() {
      console.log("getTax");
    }
    inStock() {
      console.log("inStock");
    }
  }
  
  // Payment
  class Payment {
    constructor(amount) {
      this.amount = amount;
    }
  }
  
  // Cash
  class Cash extends Payment {
    constructor(amount, cashTendered) {
      super(amount);
      this.cashTendered = cashTendered;
    }
  }
  
  // Check
  class Check extends Payment {
    constructor(amount, name, bankID) {
      super(amount);
      this.name = name;
      this.bankID = bankID;
    }
    authorized() {
      console.log("authorized");
    }
  }
  
  // Credit
  class Credit extends Payment {
    constructor(amount, number, type, expDate) {
      super(amount);
      this.number = number;
      this.type = type;
      this.expDate = expDate;
    }
  }
  
  const main = () => {
    let customer1 = new Customer("Prempree", "NPRU");
    console.log(customer1);
    // Product items
    const item1 = new Item(0.3, "ออลอินวันบักเก็ต", 299);
    const item2 = new Item(0.1, "ป๊อปบอมแซ่บ", 39);
    const item3 = new Item(0.2, "เดอะบอกซ์ สตสร์", 159);
    const item4 = new Item(0.2, "ชิดแอนแช์ ทีมนักเก็ตป๊อป", 99);
    const item5 = new Item(0.4, "ข้าวไก่กรอบแกงเขียวหวาน", 89);
    const item6 = new Item(0.4, "ไก่ทอดหาดใหญ่", 60);
    const item7 = new Item(0.4, "หมูกรอบ", 40);
  
    // Create order
    const order1 = new Order("08/01/2567", "In process");
    // Add order to a customer
    customer1.addOrder(order1);
  
    // Create order detail
    const orderDetail1 = new OrderDetail(7, "tax included");
    orderDetail1.addItem(item1);
    const orderDetail2 = new OrderDetail(2, "tax included");
    orderDetail2.addItem(item7);
    // Add order details to the order
    order1.addOrderDetail(orderDetail1);
    order1.addOrderDetail(orderDetail2);
    // Console.log
    console.log(customer1.orders);

    //################# ORDER 2 ####################
     // Create order
     const order2 = new Order("08/01/2567", "In process");
     // Add order to a customer
     customer1.addOrder(order2);
   
     // Create order detail
     const orderDetail3 = new OrderDetail(7, "tax included");
     orderDetail3.addItem(item1);
     const orderDetail4 = new OrderDetail(2, "tax included");
     orderDetail4.addItem(item7);
     // Add order details to the order
     order2.addOrderDetail(orderDetail3);
     order2.addOrderDetail(orderDetail4);
     // Console.log
     console.log(customer1.orders);

      //################# ORDER 3 ####################
     // Create order
     const order3 = new Order("08/01/2567", "In process");
     // Add order to a customer
     customer1.addOrder(order2);
   
     // Create order detail
     const orderDetail3 = new OrderDetail(7, "tax included");
     orderDetail3.addItem(item1);
     const orderDetail4 = new OrderDetail(2, "tax included");
     orderDetail4.addItem(item7);
     // Add order details to the order
     order2.addOrderDetail(orderDetail3);
     order2.addOrderDetail(orderDetail4);
     // Console.log
     console.log(customer1.orders);
  
  
    // Output example                                                                                                                                                
    // Name: Natchanon
    // Order number: 1
  
    // คำสั่งซื้อที่ : 1
    // 1. ป๊อปบอมแซ่บ - Quantity: 5, Price: 299 - Subtotal: 1495
    // 2. ข้าวไก่กรอบแกงเขียวหวาน - Quantity: 2, Price: 89 - Subtotal: 178
    // Total: 1673

    // คำสั่งซื้อที่ : 2
    // 1. ป๊อปบอมแซ่บ - Quantity: 5, Price: 299 - Subtotal: 1495
    // 2. ข้าวไก่กรอบแกงเขียวหวาน - Quantity: 2, Price: 89 - Subtotal: 178
    // Total: 1673


    console.log("ชื่อ : " + customer1.name);
    console.log("จำนวนการสั่งซื้อ : " + customer1.orders.length);
    for (let i = 0; i < customer1.orders.length; i++) {
        console.log("คำสั่งซื้อที่ :" + (i + 1));
        let total = 0
        //console.log(customer1.order[i].orderDetails);
        for(let k = 0; k < customer1.orders[i].orderDetails.length; k++) {
            const item = customer1.orders[i].orderDetails[k].item;
            const quantity = customer1.orders[i].orderDetails[k].quantity;
            const subtotal = quantity * item.price;
            total += subtotal;
            console.log("ลำดับที่ " + (k + 1) + " " + item.description + "จำนวน "+ quantity +" รายการ " +" ราคา " + subtotal + " บาท ");
        }
        console.log(" รวมทั้งหมด "+ total +" บาท ");
    }
  };
  
  main();
  