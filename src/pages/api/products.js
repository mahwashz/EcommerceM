// /pages/api/products.js

export default function handler(req, res) {
  console.log("Fetching products...");
  const products = [
    {
      id: 1,
      name: "Caramel Crunch Cake",
      price: 10,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDEJLvsVS2GKx5sM9zzklVDZUyoboJtYVqig&s",
    },
    {
      id: 2,
      name: "Lemon Zest Cake",
      price: 20,
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Lemon-layer-cake-d2a2df0.jpg?resize=768,574",
    },
    {
      id: 3,
      name: " Coconut Paradise Cake",
      price: 30,
      image:
        "https://amphorabakery.com/wp-content/uploads/2018/10/800PX_0002_BLUEBERRY-LEMON-CRUSH-600x600.jpg",
    },
    {
      id: 4,
      name: " Tiramisu Cake",
      price: 40,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS6rwo-S3NmwmB2HS8HLN3zyOhS006hptk7g&s",
    },
    {
      id: 5,
      name: "Peach Delight Cake",
      price: 50,
      image:
        "https://thumbs.dreamstime.com/b/peachy-delight-sumptuous-sponge-cake-whipped-cream-honey-drizzle-340258761.jpg",
    },
    {
      id: 6,
      name: "Espresso Mocha Cake",
      price: 70,
      image:
        "https://i.ytimg.com/vi/ErArPvGdQ4g/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAHfIpnIcIiVcgo7hqLFwRmScbBKg",
    },
  ];

  res.status(200).json(products);
}
