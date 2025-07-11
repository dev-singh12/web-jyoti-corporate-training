export type Location = {
  id: number;
  city: string;
  trainer: string;
  address: string;
  phone: string;
  email: string;
  facilities: string[];
  timings: string;
  isHeadquarters?: boolean;
};

const locations: Location[] = [
    {
      id: 1,
      city: "AGRA",
      trainer: "Ujjwal Garg",
      address: "Training Center, Agra, Uttar Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 2,
      city: "RAIPUR",
      trainer: "Kishore Kumar",
      address: "Training Center, Raipur, Chhattisgarh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Conference Hall"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 3,
      city: "BHOPAL",
      trainer: "Akshat Dubey",
      address: "Training Center, Bhopal, Madhya Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Library"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 4,
      city: "INDORE",
      trainer: "Sanskar Singh",
      address: "Training Center, Indore, Madhya Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Cafeteria"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 5,
      city: "JODHPUR",
      trainer: "Bhavendra Singh",
      address: "Training Center, Jodhpur, Rajasthan",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 6,
      city: "BHATINDA",
      trainer: "Gurpreet Singh",
      address: "Training Center, Bhatinda, Punjab",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Reception"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 7,
      city: "Delhi NCR",
      trainer: "Hirdesh Bhardwaj",
      address: "M 24 Old DLF Colony, Sector 14, Gurugram, Haryana",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Conference Hall", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
      isHeadquarters: true,
    },
    {
      id: 8,
      city: "PUNE",
      trainer: "Mahesh Gutalkar",
      address: "Training Center, Pune, Maharashtra",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Cafeteria"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 9,
      city: "Azamgarh",
      trainer: "Brijesh Kumar Chaurasia",
      address: "Training Center, Azamgarh, Uttar Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 10,
      city: "LUCKNOW",
      trainer: "Sangram Singh",
      address: "Training Center, Lucknow, Uttar Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Library"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 11,
      city: "PATNA",
      trainer: "Birendra Goswami",
      address: "Training Center, Patna, Bihar",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 12,
      city: "GHORAKPUR",
      trainer: "Manish",
      address: "Training Center, Gorakhpur, Uttar Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 13,
      city: "Rohtak",
      trainer: "Sushil - I-CONS COMPUTERS",
      address: "I-CONS COMPUTERS, Rohtak, Haryana (Covers Karnal & Hisar)",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Technical Support"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 14,
      city: "BAREILLY",
      trainer: "Mayank Goel",
      address: "Training Center, Bareilly, Uttar Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 15,
      city: "KOTA",
      trainer: "Hirdesh Bhardwaj",
      address: "Training Center, Kota, Rajasthan",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Study Area"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 16,
      city: "LUDHIANA",
      trainer: "Varinder - Amiras",
      address: "Amiras Training Center, Ludhiana, Punjab",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 17,
      city: "GUWAHATI",
      trainer: "Manoj",
      address: "Training Center, Guwahati, Assam",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 18,
      city: "Gandhinagar",
      trainer: "Rizwan Shaikh",
      address: "Training Center, Gandhinagar, Gujarat",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Conference Room"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 19,
      city: "CHITTORGARH",
      trainer: "Shubham Nathani",
      address: "Training Center, Chittorgarh, Rajasthan",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 20,
      city: "KOLKATA",
      trainer: "Parul Singh",
      address: "Training Center, Kolkata, West Bengal",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Library", "Cafeteria"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 21,
      city: "Bangalore",
      trainer: "Chandrababu R",
      address: "Training Center, Bangalore, Karnataka",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Conference Hall"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 22,
      city: "Bangalore",
      trainer: "Ismail Chalil",
      address: "Training Center, Bangalore, Karnataka",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Study Area"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 23,
      city: "Gurgaon",
      trainer: "Hirdesh Bhardwaj",
      address: "Training Center, Gurgaon, Haryana",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 24,
      city: "Delhi",
      trainer: "Hirdesh Bhardwaj",
      address: "Training Center, Delhi, Delhi",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 25,
      city: "Noida",
      trainer: "Hirdesh Bhardwaj",
      address: "Training Center, Noida, Uttar Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 26,
      city: "Ghaziabad",
      trainer: "Hirdesh Bhardwaj",
      address: "Training Center, Ghaziabad, Uttar Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 27,
      city: "Meerut",
      trainer: "Hirdesh Bhardwaj",
      address: "Training Center, Meerut, Uttar Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 28,
      city: "Karnal",
      trainer: "Sushil - I-CONS COMPUTERS",
      address: "I-CONS COMPUTERS, Karnal, Haryana",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Technical Support"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 29,
      city: "Hisar",
      trainer: "Sushil - I-CONS COMPUTERS",
      address: "I-CONS COMPUTERS, Hisar, Haryana",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Technical Support"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 30,
      city: "GUWHATI",
      trainer: "Manoj",
      address: "Training Center, Guwahati, Assam",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 31,
      city: "Azamgarh",
      trainer: "Brijesh Kumar Chaurasia",
      address: "Training Center, Azamgarh, Uttar Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 32,
      city: "BAREILLY",
      trainer: "Mayank Goel",
      address: "Training Center, Bareilly, Uttar Pradesh",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 33,
      city: "LUDHIANA",
      trainer: "Varinder-amiras",
      address: "Amiras Training Center, Ludhiana, Punjab",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Parking"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 34,
      city: "Gandhinagar",
      trainer: "Rizwan Shaikh",
      address: "Training Center, Gandhinagar, Gujarat",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Conference Room"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 35,
      city: "CHITTORGARH",
      trainer: "Shubham Nathani",
      address: "Training Center, Chittorgarh, Rajasthan",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 36,
      city: "KOLKATA",
      trainer: "Parul Singh",
      address: "Training Center, Kolkata, West Bengal",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Library", "Cafeteria"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 37,
      city: "Bangalore",
      trainer: "Chandrababu R",
      address: "Training Center, Bangalore, Karnataka",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Conference Hall"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
    {
      id: 38,
      city: "Bangalore",
      trainer: "Ismail Chalil",
      address: "Training Center, Bangalore, Karnataka",
      phone: "+91 8802000175",
      email: "info@webjyoti.com",
      facilities: ["Training Rooms", "Computer Lab", "Study Area"],
      timings: "Mon-Fri: 9:00 AM - 6:00 PM",
    },
  ];

export default locations;