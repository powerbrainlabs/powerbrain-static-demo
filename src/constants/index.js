import {
  bowsertruck,
  datm,
  bowsertruck2,
  datum3,
  datum2,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];


const services = [
  {
    title: "Bowser Trucks",
    icon: bowsertruck2,
    description:"Bowser trucks are vehicles that can transport 4000 to 6000 litres of diesel per trip. They are filled from Indian Oil refinery, from where they will transport diesel directly to cranes, stone crushers, generators, immovable heavy objects at the customer site ensuring uninterupted fuel supply."
  },
  {
    title: "DATUMS",
    icon: datm,
    description:"DATUM is an automatic diesel dispenser placed at customer premises. It holds 2000 litres of diesel at any point. Customers can refuel their trucks by driving up to the ATM. When the fuel tank level drops below 500L, Romulus is intimated and dispatches a bowser truck for a refill."
  }
];




const uniquepoints = [
  {
    title: "Web Development",
    icon: "discount",
    description: [
      // Current fuel market relies on any one of two options, a discount per litre or a credit period. 
      // "Petrol pump owners have high fixed costs and can only afford to offer a discount per litre or a credit period. Romulus offers both discount and credit period to pre-selected customers with good payment history through a fuel loan card from Tata Motors Finance.",
      // "Romulus offers a discount per litre to pre-selected customers with an excellent track record history with Tata Motors Finance. These customers can also get 30 days credit on fuel purchases through a fuel loan card offered by TMF.",
      "Transform your online presence with our custom web development solutions:",
      "Custom Website Design: Unique, responsive websites tailored to your brand",
      "E-commerce Development: Robust online stores with secure payment integration",
      "Web Application Development: Scalable, interactive web applications",
      "Website Maintenance and Support: Ongoing technical support and updates"
    ],
    
  },
  {
    title: "Mobile Development",
    icon: "margin",
    description: [
     "Reach customers on-the-go with our mobile development expertise",
     "iOS App Development: Native applications for Apple devices",
     "Android App Development: Customized apps for the Android ecosystem",
     "Cross-Platform Development: Unified apps working across multiple platforms",
     "Mobile UI/UX Design: Intuitive and engaging mobile interfaces"
      // "Petrol pump owners currently are forced to work on smaller margins than Romulus, as the OMCs have direct investments in the petrol pumps, but this is not the case for Romulus. As a result, Romulus is able to obtain a higher margin from the Oil Marcketing Companys.",
    ],
  },
  {
    title: "Digital Marketing",
    icon: "save",
    description: [
      "Amplify your online visibility and attract more customers",
      "Search Engine Optimization (SEO): Improve your website's search engine rankings",
      "Social Media Marketing: Strategic campaigns across multiple platforms",
      "Pay-Per-Click (PPC) Advertising: Targeted ad campaigns",
      "Content Marketing: Engaging content strategy to drive audience engagement",
      "Email Marketing: Personalized email campaigns and newsletter management"
    ],
   
  },

];





const gallery = [
  {
    "img":bowsertruck,
    "description":"Take a closer look at our extensive collection of pioneering solutions and remarkable accomplishments in our gallery of cutting-edge innovations."
  },
    {
    "img":datm,
    "description":"sde a closer look at our extensive collection of pioneering solutions and remarkable accomplishments in our gallery of cutting-edge innovations."
  },
    {
    "img":datum2,
    "description":"io a closer look at our extensive collection of pioneering solutions and remarkable accomplishments in our gallery of cutting-edge innovations."
  },
    {
    "img":bowsertruck2,
    "description":"Take a closer look at our extensive collection of pioneering solutions and remarkable accomplishments in our gallery of cutting-edge innovations."
  },
   {
    "img":datum3,
    "description":"Take a closer look at our extensive collection of pioneering solutions and remarkable accomplishments in our gallery of cutting-edge innovations."
  },
  
]




export { services, uniquepoints, gallery };
