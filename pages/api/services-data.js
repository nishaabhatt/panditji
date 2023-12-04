const servicesData = async (req, res) => {
  const data = [
    {
      service: "service1",
    },
    {
      service: "service2",
    },
    {
      service: "service3",
    },
    {
      service: "service4",
    },
    {
      service: "service5",
    },
    {
      service: "service6",
    },
    {
      service: "service7",
    },
    {
      service: "service8",
    },
    {
      service: "service9",
    },
  ];
  res.json({ data: data });
};

export default servicesData;
