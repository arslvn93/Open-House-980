const config = {
  "property": {
    "streetAddress": "80 John St #2912",
    "city": "Toronto",
    "cityStateZip": "Toronto, ON M5V 3X4",
    "heroSubtitle": "1249 SqFt split-bedroom layout with unbeatable views, best amenities in the city, upgraded kitchen and bathrooms. View is INSANE. Michelin-starred restaurants, designer boutiques, transit, the PATH, and the Financial District sit right outside the front door. Register to receive the complete Home & Neighbourhood Info Package: virtual tour, floor plan, comparables, and more!",
    "backgroundImageUrl": "https://cdn.realtor.ca/listing/TS638834353319130000/reb82/highres/6/c12162916_3.jpg"
  },
  "realtor": {
    "fullName": "Arslan Ahmed",
    "title": "REALTOR®",
    "phone": "14166554850",
    "email": "arslan@salesgenius.co",
    "bio": "",
    "photoUrl": null,
    "social": {
      "facebook": null,
      "instagram": null,
      "website": null
    }
  },
  "brokerage": {
    "name": null,
    "logoUrl": null,
    "address": ""
  },
  "openHouse": {
    "eventDate": "2025-05-24",
    "bundleItems": [
      {
        "icon": "fas fa-ruler-combined",
        "text": "Architectural Floor Plan"
      },
      {
        "icon": "fas fa-star",
        "text": "Neighbourhood Guide"
      },
      {
        "icon": "fas fa-check-circle",
        "text": "Market Stats"
      },
      {
        "icon": "fas fa-car",
        "text": "School District Information"
      },
      {
        "icon": "fas fa-key",
        "text": "Financing Resources"
      },
      {
        "icon": "fas fa-home",
        "text": "Utility Cost Estimates"
      },
      {
        "icon": "fas fa-map-location-dot",
        "text": "Property Feature List"
      },
      {
        "icon": "fas fa-image",
        "text": "Home Inspection Tips"
      }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Arslan Ahmed Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": null
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        { "value": "committed", "text": "Yes, I'm committed to an agent." },
        { "value": "not_committed", "text": "No, I'm not committed to an agent." },
        { "value": "gathering_info", "text": "Just gathering information at this stage." }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        { "value": "very_interested", "text": "Very interested, actively looking." },
        { "value": "somewhat_interested", "text": "Somewhat interested, keeping options open." },
        { "value": "just_browsing", "text": "Just browsing for now." }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        { "value": "resident_explorer", "text": "I live here and love exploring locally." },
        { "value": "considering_move", "text": "I'm considering moving to this area." },
        { "value": "just_visiting", "text": "Just visiting for the open house." }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        { "value": "design_layout", "text": "The design and layout." },
        { "value": "location_neighborhood", "text": "The location and neighborhood." },
        { "value": "home_price", "text": "The price of the home." }
      ]
    }
  ],
  "deploymentInfo": {
    "repoName": "Open-House-980",
    "repoUrl": "https://github.com/arslvn93/Open-House-980",
    "tag": "Open House 80 John St #2912",
    "netlifyUrl": "http://Open-House-980.netlify.app",
    "siteId": "d66844ad-5c73-486c-a9e8-92c6cfbf4f0b"
  }
}