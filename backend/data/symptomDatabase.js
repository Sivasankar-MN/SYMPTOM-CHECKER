// Comprehensive symptom database with health advice, precautions, and self-care tips
const symptomDatabase = {
  // Respiratory system
  cough: {
    advice:
      "Stay hydrated and rest. Try honey (if over 1 year old) or lozenges to soothe throat. Use a humidifier. Seek medical attention if cough is severe, produces blood or thick green/yellow mucus, or if you have difficulty breathing.",
    precautions: [
      "Cover your mouth and nose when coughing",
      "Wash hands frequently to prevent spreading infection",
      "Avoid smoking and secondhand smoke",
      "Stay away from pollutants and allergens",
    ],
    selfCareTips: [
      "Drink warm liquids like tea with honey",
      "Use a humidifier to add moisture to the air",
      "Gargle with salt water to soothe throat irritation",
      "Stay hydrated with at least 8 glasses of water daily",
    ],
    preventionTips: [
      "Get annual flu vaccinations",
      "Maintain good hand hygiene",
      "Avoid close contact with sick individuals",
      "Keep your immune system strong with proper nutrition",
    ],
  },

  "shortness of breath": {
    advice:
      "SEEK IMMEDIATE MEDICAL ATTENTION, especially if sudden or severe. This could indicate a serious condition requiring urgent care.",
    precautions: [
      "Avoid strenuous activities until evaluated by a doctor",
      "Sit upright to help ease breathing",
      "Avoid extreme temperatures",
      "Remove yourself from potential triggers like allergens",
    ],
    selfCareTips: [
      "Practice pursed-lip breathing techniques",
      "Use a fan to circulate air",
      "Try relaxation techniques to reduce anxiety",
      "Use prescribed inhalers if you have them",
    ],
    preventionTips: [
      "Avoid smoking and secondhand smoke",
      "Maintain a healthy weight",
      "Exercise regularly as tolerated",
      "Manage underlying conditions like asthma or COPD",
    ],
  },

  wheezing: {
    advice:
      "Try to remain calm and sit upright. Use prescribed inhalers if available. Seek medical attention if severe or if you have a history of asthma or COPD.",
    precautions: [
      "Avoid known triggers like allergens or cold air",
      "Stay indoors during high pollen days if allergic",
      "Avoid exercise in cold, dry air",
      "Keep rescue medications readily available",
    ],
    selfCareTips: [
      "Use a humidifier to add moisture to the air",
      "Drink warm liquids to loosen mucus",
      "Practice breathing exercises",
      "Take warm showers to help open airways",
    ],
    preventionTips: [
      "Follow your asthma action plan if you have one",
      "Take controller medications as prescribed",
      "Get annual flu vaccinations",
      "Keep indoor air clean with air purifiers",
    ],
  },

  "sore throat": {
    advice:
      "Gargle with warm salt water. Drink warm liquids. Use throat lozenges. Seek medical attention if severe, lasts more than a week, or is accompanied by difficulty swallowing or breathing.",
    precautions: [
      "Avoid irritants like smoking or spicy foods",
      "Rest your voice if possible",
      "Stay hydrated",
      "Avoid sharing utensils or drinks with others",
    ],
    selfCareTips: [
      "Gargle with warm salt water several times daily",
      "Suck on throat lozenges or hard candies",
      "Use over-the-counter pain relievers if needed",
      "Drink warm teas with honey and lemon",
    ],
    preventionTips: [
      "Wash hands frequently",
      "Avoid close contact with sick individuals",
      "Replace your toothbrush after being sick",
      "Stay hydrated and maintain good overall health",
    ],
  },

  "runny nose": {
    advice:
      "Rest and stay hydrated. Use saline nasal sprays. Over-the-counter decongestants may help. Consult a doctor if symptoms last more than 10 days or are accompanied by high fever.",
    precautions: [
      "Blow your nose gently, one nostril at a time",
      "Wash hands frequently to prevent spreading infection",
      "Use tissues and dispose of them properly",
      "Avoid irritants like smoke or strong perfumes",
    ],
    selfCareTips: [
      "Use saline nasal sprays or rinses",
      "Apply a warm, moist washcloth to your face",
      "Drink plenty of fluids to thin mucus",
      "Elevate your head while sleeping",
    ],
    preventionTips: [
      "Wash hands regularly",
      "Avoid touching your face",
      "Use a humidifier in dry environments",
      "Consider allergy testing if symptoms are recurrent",
    ],
  },

  congestion: {
    advice:
      "Use a humidifier, take steamy showers, and try saline nasal sprays. Stay hydrated. Rest with your head elevated. Seek medical help if symptoms worsen or persist beyond 10 days.",
    precautions: [
      "Avoid dairy products which may increase mucus production",
      "Stay away from smoke and other irritants",
      "Avoid alcohol and caffeine which can cause dehydration",
      "Don't overuse nasal decongestant sprays",
    ],
    selfCareTips: [
      "Use a neti pot or saline nasal irrigation",
      "Take hot showers to inhale steam",
      "Apply warm compresses to your sinuses",
      "Stay well-hydrated with water and clear broths",
    ],
    preventionTips: [
      "Use air purifiers in your home",
      "Keep indoor humidity between 30-50%",
      "Change air filters regularly",
      "Consider using allergy-proof bedding if allergies are a trigger",
    ],
  },

  // Digestive system
  nausea: {
    advice:
      "Eat bland foods. Stay hydrated with small sips of clear fluids. Avoid strong odors, fatty or spicy foods. Seek medical attention if severe, persistent, or accompanied by severe abdominal pain.",
    precautions: [
      "Avoid sudden movements",
      "Eat small, frequent meals instead of large ones",
      "Avoid strong smells that trigger nausea",
      "Don't lie down immediately after eating",
    ],
    selfCareTips: [
      "Try ginger tea or ginger candies",
      "Eat plain crackers or toast",
      "Take small sips of clear liquids",
      "Try acupressure wristbands",
    ],
    preventionTips: [
      "Eat slowly and in a relaxed environment",
      "Avoid foods that have caused nausea in the past",
      "Stay hydrated throughout the day",
      "Manage stress with relaxation techniques",
    ],
  },

  vomiting: {
    advice:
      "Stay hydrated with small sips of clear fluids. Try bland foods when feeling better. Seek medical attention if severe, persistent, contains blood, or if you can't keep fluids down for 24 hours.",
    precautions: [
      "Avoid solid foods until vomiting subsides",
      "Rest and avoid physical activity",
      "Don't take oral medications without consulting a doctor",
      "Avoid dairy products, caffeine, and alcohol",
    ],
    selfCareTips: [
      "Start with small sips of water or clear broth",
      "Try sucking on ice chips if keeping liquids down is difficult",
      "Gradually introduce bland foods like rice or toast",
      "Replace lost electrolytes with sports drinks (diluted if too sweet)",
    ],
    preventionTips: [
      "Practice good food hygiene",
      "Wash hands thoroughly before eating",
      "Ensure proper food storage and cooking temperatures",
      "Avoid sharing utensils during illness outbreaks",
    ],
  },

  diarrhea: {
    advice:
      "Stay well-hydrated with water, clear broths, and electrolyte solutions. Eat bland, easy-to-digest foods. Seek medical attention if severe, contains blood, lasts more than 2 days, or is accompanied by high fever.",
    precautions: [
      "Avoid dairy products, caffeine, and alcohol",
      "Stay away from high-fiber, fatty, or spicy foods",
      "Wash hands thoroughly after using the bathroom",
      "Don't share towels or utensils with others",
    ],
    selfCareTips: [
      "Follow the BRAT diet (bananas, rice, applesauce, toast)",
      "Drink clear broths and electrolyte solutions",
      "Eat small, frequent meals",
      "Consider probiotics to restore gut flora",
    ],
    preventionTips: [
      "Practice proper food handling and storage",
      "Wash hands before eating and after using the bathroom",
      "Be cautious with food and water when traveling",
      "Avoid undercooked meats and unpasteurized dairy",
    ],
  },

  constipation: {
    advice:
      "Increase fiber and water intake. Exercise regularly. Consider over-the-counter stool softeners. Consult a doctor if severe or lasting more than a week.",
    precautions: [
      "Don't ignore the urge to have a bowel movement",
      "Avoid overuse of laxatives which can cause dependence",
      "Limit foods that can worsen constipation like cheese and processed foods",
      "Don't strain during bowel movements",
    ],
    selfCareTips: [
      "Gradually increase fiber intake to 25-30g daily",
      "Drink at least 8 glasses of water daily",
      "Exercise for 30 minutes most days",
      "Establish a regular bathroom routine",
    ],
    preventionTips: [
      "Maintain a high-fiber diet with fruits, vegetables, and whole grains",
      "Stay physically active",
      "Respond promptly to the urge to have a bowel movement",
      "Manage stress with relaxation techniques",
    ],
  },

  "abdominal pain": {
    advice:
      "Rest, apply heat, and avoid foods that might irritate the stomach. Seek immediate medical attention if pain is severe, persistent, or accompanied by fever, vomiting, or blood in stool.",
    precautions: [
      "Avoid NSAIDs if you have stomach ulcers",
      "Don't eat large meals if experiencing pain",
      "Avoid alcohol and spicy foods",
      "Don't ignore persistent or severe pain",
    ],
    selfCareTips: [
      "Apply a heating pad to the abdomen",
      "Try a warm bath to relax abdominal muscles",
      "Eat small, bland meals",
      "Practice relaxation techniques for stress-related pain",
    ],
    preventionTips: [
      "Eat smaller, more frequent meals",
      "Stay hydrated throughout the day",
      "Identify and avoid food triggers",
      "Practice good posture to reduce pressure on abdomen",
    ],
  },

  bloating: {
    advice:
      "Eat smaller meals slowly. Avoid gas-producing foods. Stay hydrated. Try gentle exercise. Consult a doctor if severe or accompanied by significant pain.",
    precautions: [
      "Avoid carbonated beverages",
      "Limit foods known to cause gas like beans, cabbage, and onions",
      "Don't use straws which can increase air swallowing",
      "Avoid chewing gum and hard candies",
    ],
    selfCareTips: [
      "Try peppermint or chamomile tea",
      "Take a gentle walk after meals",
      "Massage your abdomen in a clockwise direction",
      "Try over-the-counter gas relief medications",
    ],
    preventionTips: [
      "Eat slowly and chew food thoroughly",
      "Keep a food diary to identify triggers",
      "Practice portion control",
      "Consider probiotics to improve gut health",
    ],
  },

  // Neurological
  headache: {
    advice:
      "Rest in a quiet, dark room. Stay hydrated. Try over-the-counter pain relievers if needed. See a doctor if severe, sudden, or accompanied by other symptoms like fever, neck stiffness, confusion, or visual changes.",
    precautions: [
      "Avoid known triggers like certain foods or strong smells",
      "Limit screen time if it worsens symptoms",
      "Don't overuse pain medications which can lead to rebound headaches",
      "Avoid alcohol and excessive caffeine",
    ],
    selfCareTips: [
      "Apply a cold or warm compress to your head or neck",
      "Practice relaxation techniques like deep breathing",
      "Maintain a consistent sleep schedule",
      "Stay hydrated throughout the day",
    ],
    preventionTips: [
      "Identify and avoid personal triggers",
      "Manage stress through regular exercise and relaxation",
      "Maintain regular meals and sleep patterns",
      "Consider keeping a headache diary to track patterns",
    ],
  },

  migraine: {
    advice:
      "Rest in a dark, quiet room. Apply cold compresses. Try over-the-counter pain medications. Consult a doctor for recurring migraines to discuss preventive treatments.",
    precautions: [
      "Avoid known triggers like certain foods, strong smells, or bright lights",
      "Don't delay taking medication once symptoms begin",
      "Limit physical activity during an attack",
      "Avoid alcohol and caffeine during episodes",
    ],
    selfCareTips: [
      "Rest in a dark, quiet room",
      "Apply cold packs to your forehead or neck",
      "Practice relaxation techniques",
      "Use pressure on temples or scalp massage for relief",
    ],
    preventionTips: [
      "Keep a migraine diary to identify triggers",
      "Maintain regular sleep and meal schedules",
      "Stay hydrated and exercise regularly",
      "Consider preventive medications if migraines are frequent",
    ],
  },

  dizziness: {
    advice:
      "Sit or lie down immediately. Stay hydrated. Avoid sudden movements. Seek immediate medical attention if accompanied by chest pain, severe headache, difficulty speaking, or numbness.",
    precautions: [
      "Avoid driving or operating machinery when dizzy",
      "Don't make sudden head movements",
      "Use handrails on stairs",
      "Avoid alcohol and recreational drugs",
    ],
    selfCareTips: [
      "Sit or lie down immediately when feeling dizzy",
      "Move slowly when changing positions",
      "Stay hydrated and eat regularly",
      "Try vestibular exercises if recommended by a healthcare provider",
    ],
    preventionTips: [
      "Change positions slowly, especially when getting up",
      "Stay hydrated throughout the day",
      "Avoid caffeine and alcohol if they trigger symptoms",
      "Ensure adequate intake of iron and vitamin B12",
    ],
  },

  vertigo: {
    advice:
      "Sit or lie down immediately. Avoid sudden head movements. Seek medical attention, especially if severe or recurring.",
    precautions: [
      "Avoid driving or operating machinery during episodes",
      "Use caution when climbing or working at heights",
      "Avoid sudden head movements",
      "Don't watch moving objects if they worsen symptoms",
    ],
    selfCareTips: [
      "Try the Epley maneuver if recommended by a healthcare provider",
      "Sit or lie still during episodes",
      "Focus on a stationary object when feeling vertigo",
      "Avoid bright screens and busy visual patterns",
    ],
    preventionTips: [
      "Sleep with your head slightly elevated",
      "Move slowly when changing positions",
      "Avoid triggers like certain head positions",
      "Consider vestibular rehabilitation therapy",
    ],
  },

  confusion: {
    advice:
      "SEEK IMMEDIATE MEDICAL ATTENTION. This could indicate a serious condition like stroke, infection, or metabolic problem requiring urgent care.",
    precautions: [
      "Don't leave the person alone if they're confused",
      "Remove potential hazards from the environment",
      "Don't give food or drink if severely confused",
      "Avoid overstimulation with noise or activity",
    ],
    selfCareTips: [
      "Stay in a calm, quiet environment",
      "Have a familiar person stay with you",
      "Use simple, clear communication",
      "Ensure proper hydration if able to drink safely",
    ],
    preventionTips: [
      "Maintain good brain health with mental activities",
      "Stay physically active and socially engaged",
      "Manage chronic conditions like diabetes and hypertension",
      "Avoid alcohol and recreational drugs",
    ],
  },

  // Cardiovascular
  "chest pain": {
    advice:
      "SEEK IMMEDIATE MEDICAL ATTENTION by calling emergency services (911). This could indicate a heart attack or other serious condition requiring urgent care.",
    precautions: [
      "Stop any physical activity immediately",
      "Sit or lie in a comfortable position",
      "Don't drive yourself to the hospital",
      "Take aspirin if advised by emergency services and not allergic",
    ],
    selfCareTips: [
      "Chew an aspirin (if not allergic) while waiting for emergency services",
      "Try to stay calm and take slow, deep breaths",
      "Loosen tight clothing",
      "Note when the pain started and any associated symptoms",
    ],
    preventionTips: [
      "Maintain a heart-healthy diet low in saturated fats",
      "Exercise regularly as recommended by your doctor",
      "Don't smoke and avoid secondhand smoke",
      "Manage stress, blood pressure, cholesterol, and diabetes",
    ],
  },

  palpitations: {
    advice:
      "Rest and practice deep breathing. Avoid caffeine, alcohol, and nicotine. Seek medical attention if palpitations are accompanied by chest pain, shortness of breath, dizziness, or fainting.",
    precautions: [
      "Avoid stimulants like caffeine and energy drinks",
      "Don't use nicotine products",
      "Limit alcohol consumption",
      "Avoid recreational drugs",
    ],
    selfCareTips: [
      "Practice deep breathing or meditation",
      "Try the Valsalva maneuver (bearing down) if recommended by a doctor",
      "Splash cold water on your face",
      "Lie down and rest",
    ],
    preventionTips: [
      "Maintain regular sleep patterns",
      "Manage stress through relaxation techniques",
      "Stay hydrated and avoid excessive salt",
      "Exercise regularly but avoid overexertion",
    ],
  },

  "high blood pressure": {
    advice:
      "Maintain a healthy diet low in salt, exercise regularly, manage stress, and take prescribed medications. Regular monitoring is important. Consult your healthcare provider for guidance.",
    precautions: [
      "Monitor your blood pressure regularly",
      "Take medications exactly as prescribed",
      "Limit alcohol consumption",
      "Be cautious with over-the-counter medications that can raise blood pressure",
    ],
    selfCareTips: [
      "Reduce sodium intake to less than 1,500mg daily",
      "Engage in regular physical activity",
      "Practice stress reduction techniques",
      "Maintain a healthy weight",
    ],
    preventionTips: [
      "Follow the DASH diet (rich in fruits, vegetables, and low-fat dairy)",
      "Exercise for at least 150 minutes per week",
      "Limit alcohol to 1-2 drinks per day maximum",
      "Don't smoke and avoid secondhand smoke",
    ],
  },

  "swollen legs": {
    advice:
      "Elevate your legs when resting. Reduce salt intake. Stay active. Seek medical attention if swelling is sudden, painful, or accompanied by difficulty breathing.",
    precautions: [
      "Avoid standing or sitting for long periods",
      "Don't wear tight clothing that restricts circulation",
      "Limit salt intake",
      "Don't ignore persistent or worsening swelling",
    ],
    selfCareTips: [
      "Elevate legs above heart level when resting",
      "Wear compression stockings if recommended",
      "Exercise legs regularly with simple movements",
      "Massage legs gently toward the heart",
    ],
    preventionTips: [
      "Maintain a healthy weight",
      "Stay physically active with regular walking",
      "Avoid crossing legs when sitting",
      "Take breaks to move around during long periods of sitting",
    ],
  },

  // Skin conditions
  rash: {
    advice:
      "Avoid scratching. Try cool compresses or oatmeal baths. Use fragrance-free moisturizers. Seek medical attention if rapidly spreading, painful, accompanied by fever, or if it forms blisters.",
    precautions: [
      "Avoid scratching which can lead to infection",
      "Don't use new skincare products until rash resolves",
      "Avoid hot water which can worsen itching",
      "Don't share towels or personal items",
    ],
    selfCareTips: [
      "Apply cool compresses to affected areas",
      "Take an oatmeal bath for widespread rashes",
      "Use fragrance-free moisturizers",
      "Try over-the-counter hydrocortisone cream for itching",
    ],
    preventionTips: [
      "Identify and avoid allergens or irritants",
      "Use mild, fragrance-free soaps and detergents",
      "Wear loose-fitting, cotton clothing",
      "Keep skin moisturized, especially in dry weather",
    ],
  },

  itching: {
    advice:
      "Avoid scratching. Use fragrance-free moisturizers, cool compresses, or oatmeal baths. Try over-the-counter antihistamines. Consult a doctor if severe or persistent.",
    precautions: [
      "Avoid hot showers or baths",
      "Don't use scented products on skin",
      "Avoid wool and synthetic fabrics",
      "Don't scratch, which can lead to infection",
    ],
    selfCareTips: [
      "Apply calamine lotion to affected areas",
      "Use cold compresses to reduce inflammation",
      "Take an oatmeal bath for widespread itching",
      "Try over-the-counter antihistamines",
    ],
    preventionTips: [
      "Keep skin moisturized with fragrance-free products",
      "Use mild, hypoallergenic soaps and detergents",
      "Wear loose-fitting, cotton clothing",
      "Stay hydrated to maintain skin health",
    ],
  },

  hives: {
    advice:
      "Take over-the-counter antihistamines. Apply cool compresses. Avoid triggers. Seek emergency care if accompanied by difficulty breathing or swelling of face, lips, or tongue.",
    precautions: [
      "Avoid known triggers like certain foods or medications",
      "Don't take hot showers or use hot tubs",
      "Avoid tight clothing over affected areas",
      "Don't scratch hives, which can worsen them",
    ],
    selfCareTips: [
      "Take non-drowsy antihistamines",
      "Apply cool compresses to affected areas",
      "Wear loose-fitting clothing",
      "Take a cool bath with colloidal oatmeal",
    ],
    preventionTips: [
      "Keep a diary to identify and avoid triggers",
      "Manage stress, which can trigger hives",
      "Avoid extreme temperature changes",
      "Consider wearing medical alert jewelry if you have severe allergies",
    ],
  },

  // Musculoskeletal
  "joint pain": {
    advice:
      "Rest the affected joint. Apply ice for acute pain or heat for chronic pain. Use over-the-counter pain relievers if needed. Consult a doctor if severe, persistent, or accompanied by swelling or redness.",
    precautions: [
      "Avoid activities that worsen pain",
      "Don't overuse pain medications",
      "Use proper body mechanics when lifting",
      "Don't ignore persistent or worsening pain",
    ],
    selfCareTips: [
      "Apply ice for 15-20 minutes several times daily for acute pain",
      "Use heat for chronic pain",
      "Try gentle range-of-motion exercises",
      "Consider over-the-counter pain relievers like acetaminophen or NSAIDs",
    ],
    preventionTips: [
      "Maintain a healthy weight to reduce joint stress",
      "Engage in low-impact exercises like swimming or cycling",
      "Use proper form during physical activities",
      "Include strength training to support joints",
    ],
  },

  "back pain": {
    advice:
      "Maintain good posture, use proper lifting techniques, stay active, and strengthen core muscles. Try over-the-counter pain relievers and heat/ice therapy. Consult a doctor if severe, persistent, or if you have neurological symptoms.",
    precautions: [
      "Avoid heavy lifting during acute pain",
      "Don't sit or stand in one position for too long",
      "Avoid high-impact activities during flare-ups",
      "Don't sleep on your stomach if you have back pain",
    ],
    selfCareTips: [
      "Apply ice for the first 48-72 hours, then switch to heat",
      "Take over-the-counter pain relievers as directed",
      "Try gentle stretching exercises",
      "Use proper posture when sitting and standing",
    ],
    preventionTips: [
      "Strengthen core muscles with appropriate exercises",
      "Use proper lifting techniques (bend at knees, not waist)",
      "Maintain a healthy weight",
      "Ensure ergonomic work setup",
    ],
  },

  "muscle aches": {
    advice:
      "Rest, apply ice or heat, and try over-the-counter pain relievers. Stay hydrated and consider gentle stretching. Seek medical attention if severe, persistent, or if you also have a rash or fever.",
    precautions: [
      "Avoid strenuous activity until pain improves",
      "Don't apply heat to acute injuries (first 48 hours)",
      "Avoid alcohol which can worsen dehydration",
      "Don't ignore widespread muscle pain with fever",
    ],
    selfCareTips: [
      "Apply ice for acute pain, heat for chronic pain",
      "Take a warm bath with Epsom salts",
      "Stay hydrated to help flush out toxins",
      "Try gentle stretching or yoga",
    ],
    preventionTips: [
      "Warm up before exercise and cool down after",
      "Stay hydrated before, during, and after physical activity",
      "Increase exercise intensity gradually",
      "Ensure adequate intake of potassium and magnesium",
    ],
  },

  // General symptoms
  fever: {
    advice:
      "Rest and stay hydrated. Take acetaminophen or ibuprofen to reduce fever. Seek medical attention if fever is very high (>103°F/39.4°C), lasts more than 3 days, or is accompanied by severe symptoms.",
    precautions: [
      "Don't bundle up too much, which can increase body temperature",
      "Avoid alcohol and caffeine which can worsen dehydration",
      "Don't give aspirin to children or teenagers",
      "Don't ignore a fever in infants, elderly, or immunocompromised individuals",
    ],
    selfCareTips: [
      "Take acetaminophen or ibuprofen as directed",
      "Stay hydrated with water, clear broths, or sports drinks",
      "Take a lukewarm bath (not cold)",
      "Dress in lightweight clothing and use light blankets",
    ],
    preventionTips: [
      "Wash hands frequently to prevent infections",
      "Avoid close contact with sick individuals",
      "Stay up to date on vaccinations",
      "Maintain good overall health with proper nutrition and rest",
    ],
  },

  fatigue: {
    advice:
      "Ensure adequate rest and sleep. Stay hydrated and maintain a balanced diet. Consider stress reduction techniques. Consult a doctor if persistent or significantly impacts daily activities.",
    precautions: [
      "Don't rely on caffeine or energy drinks for energy",
      "Avoid alcohol which can disrupt sleep",
      "Don't push through extreme fatigue",
      "Avoid driving or operating machinery when severely fatigued",
    ],
    selfCareTips: [
      "Establish a regular sleep schedule",
      "Take short 20-30 minute naps when needed",
      "Engage in light physical activity like walking",
      "Eat small, frequent meals with a balance of proteins and complex carbs",
    ],
    preventionTips: [
      "Prioritize 7-9 hours of quality sleep nightly",
      "Stay physically active with regular exercise",
      "Manage stress through relaxation techniques",
      "Stay hydrated and maintain balanced nutrition",
    ],
  },

  weakness: {
    advice:
      "Rest and maintain good nutrition. Seek medical attention if sudden, severe, or accompanied by other symptoms like fever or difficulty speaking.",
    precautions: [
      "Avoid strenuous activities until strength returns",
      "Don't drive or operate machinery if significantly weak",
      "Use assistive devices if needed for safety",
      "Don't ignore sudden weakness, especially on one side of the body",
    ],
    selfCareTips: [
      "Ensure adequate protein intake",
      "Stay hydrated with water and electrolyte drinks",
      "Rest as needed but maintain some activity",
      "Consider vitamin B complex supplements after consulting a doctor",
    ],
    preventionTips: [
      "Maintain regular physical activity and strength training",
      "Eat a balanced diet rich in proteins and nutrients",
      "Stay hydrated throughout the day",
      "Get adequate rest and manage stress",
    ],
  },

  "weight loss": {
    advice:
      "Consult a healthcare provider for unexplained weight loss as this could indicate various medical conditions requiring proper evaluation.",
    precautions: [
      "Don't attempt to self-diagnose the cause",
      "Avoid crash diets or fasting if experiencing unexplained weight loss",
      "Don't ignore associated symptoms like fatigue or pain",
      "Keep track of the amount and timeframe of weight loss",
    ],
    selfCareTips: [
      "Keep a food diary to track intake",
      "Eat small, nutrient-dense meals throughout the day",
      "Include protein with each meal",
      "Stay hydrated with water and nutritious beverages",
    ],
    preventionTips: [
      "Maintain regular medical check-ups",
      "Address health issues promptly",
      "Manage chronic conditions properly",
      "Maintain good nutrition even during illness",
    ],
  },

  "weight gain": {
    advice:
      "Focus on balanced nutrition and regular physical activity. Consult a healthcare provider if weight gain is rapid, unexpected, or accompanied by other symptoms.",
    precautions: [
      "Don't start extreme diets without medical guidance",
      "Avoid sedentary lifestyle",
      "Don't ignore sudden or unexplained weight gain",
      "Be cautious with medications that may cause weight gain",
    ],
    selfCareTips: [
      "Focus on portion control rather than skipping meals",
      "Choose whole foods over processed options",
      "Stay physically active with daily exercise",
      "Keep a food and activity journal",
    ],
    preventionTips: [
      "Maintain regular physical activity",
      "Practice mindful eating",
      "Get adequate sleep (7-9 hours nightly)",
      "Manage stress through healthy coping mechanisms",
    ],
  },

  "night sweats": {
    advice:
      "Keep your bedroom cool, use moisture-wicking bedding, and avoid alcohol before bed. Consult a doctor if persistent or accompanied by fever, weight loss, or other concerning symptoms.",
    precautions: [
      "Avoid alcohol and spicy foods before bedtime",
      "Don't use heavy blankets or wear thick pajamas",
      "Avoid caffeine in the evening",
      "Don't ignore persistent night sweats",
    ],
    selfCareTips: [
      "Use lightweight, breathable bedding",
      "Keep a glass of water by your bed",
      "Wear moisture-wicking sleepwear",
      "Keep your bedroom cool (65-68°F/18-20°C)",
    ],
    preventionTips: [
      "Maintain a consistent sleep schedule",
      "Manage stress through relaxation techniques",
      "Stay hydrated throughout the day",
      "Consider hormone replacement therapy if due to menopause (consult doctor)",
    ],
  },

  insomnia: {
    advice:
      "Maintain a regular sleep schedule, create a restful environment, limit screen time before bed, and avoid caffeine late in the day. Consult a doctor if persistent or significantly impacts daily functioning.",
    precautions: [
      "Avoid caffeine after noon",
      "Don't nap late in the day",
      "Avoid alcohol before bedtime",
      "Don't use electronic devices before sleep",
    ],
    selfCareTips: [
      "Establish a relaxing bedtime routine",
      "Keep your bedroom dark, quiet, and cool",
      "Try relaxation techniques like deep breathing",
      "Use white noise if environmental sounds disturb sleep",
    ],
    preventionTips: [
      "Maintain a consistent sleep schedule, even on weekends",
      "Exercise regularly, but not close to bedtime",
      "Limit exposure to screens before bed",
      "Create a comfortable sleep environment",
    ],
  },

  // Eye symptoms
  "red eye": {
    advice:
      "Rest your eyes. Use lubricating eye drops. Avoid touching or rubbing your eyes. Seek medical attention if painful, affects vision, or doesn't improve within a day or two.",
    precautions: [
      "Don't wear contact lenses until resolved",
      "Avoid eye makeup",
      "Don't share towels or washcloths",
      "Avoid swimming in pools",
    ],
    selfCareTips: [
      "Apply cool compresses to closed eyes",
      "Use artificial tears for dryness",
      "Take breaks from screens every 20 minutes",
      "Wear sunglasses to protect from irritants",
    ],
    preventionTips: [
      "Practice good hand hygiene before touching eyes",
      "Replace eye makeup every 3-6 months",
      "Clean contact lenses properly",
      "Use protective eyewear when appropriate",
    ],
  },

  "eye pain": {
    advice:
      "SEEK PROMPT MEDICAL ATTENTION. Eye pain can indicate serious conditions requiring professional evaluation.",
    precautions: [
      "Don't rub or touch the eye",
      "Avoid wearing contact lenses",
      "Don't use eye drops meant for redness",
      "Protect the eye from bright light if sensitive",
    ],
    selfCareTips: [
      "Rest your eyes from screens and reading",
      "Apply a cool compress for mild discomfort",
      "Take over-the-counter pain relievers if needed",
      "Wear sunglasses if light sensitivity occurs",
    ],
    preventionTips: [
      "Get regular eye exams",
      "Use proper eye protection during hazardous activities",
      "Take screen breaks using the 20-20-20 rule",
      "Maintain good contact lens hygiene if applicable",
    ],
  },

  // Mental health
  anxiety: {
    advice:
      "Practice deep breathing and mindfulness techniques. Maintain physical activity and adequate sleep. Consider professional help for ongoing anxiety management.",
    precautions: [
      "Limit caffeine and alcohol which can worsen anxiety",
      "Don't isolate yourself from support systems",
      "Avoid making major decisions during high anxiety periods",
      "Don't self-medicate with alcohol or drugs",
    ],
    selfCareTips: [
      "Practice deep breathing exercises (4-7-8 technique)",
      "Try progressive muscle relaxation",
      "Engage in regular physical activity",
      "Keep a journal to identify triggers",
    ],
    preventionTips: [
      "Develop healthy coping strategies for stress",
      "Maintain social connections",
      "Get adequate sleep (7-9 hours nightly)",
      "Consider mindfulness meditation or yoga",
    ],
  },

  depression: {
    advice:
      "Maintain social connections, physical activity, and regular sleep patterns. Seek professional help for ongoing depression management.",
    precautions: [
      "Don't isolate yourself from others",
      "Avoid alcohol and recreational drugs",
      "Don't make major life decisions during severe episodes",
      "Take suicidal thoughts or intentions seriously - seek immediate help",
    ],
    selfCareTips: [
      "Set small, achievable daily goals",
      "Engage in physical activity, even brief walks",
      "Maintain a regular sleep schedule",
      "Practice self-compassion and positive self-talk",
    ],
    preventionTips: [
      "Build and maintain strong social connections",
      "Develop stress management techniques",
      "Seek help early when symptoms first appear",
      "Continue treatment as prescribed even when feeling better",
    ],
  },

  stress: {
    advice:
      "Practice relaxation techniques like deep breathing or meditation. Maintain physical activity and adequate sleep. Seek support from friends, family, or professionals if needed.",
    precautions: [
      "Avoid using alcohol, tobacco, or drugs to cope",
      "Don't neglect basic self-care like sleep and nutrition",
      "Avoid taking on too many responsibilities",
      "Don't isolate yourself from support systems",
    ],
    selfCareTips: [
      "Practice deep breathing or progressive muscle relaxation",
      "Take short breaks throughout the day",
      "Engage in physical activity",
      "Connect with supportive friends or family",
    ],
    preventionTips: [
      "Identify personal stress triggers and develop coping strategies",
      "Set realistic goals and priorities",
      "Schedule regular relaxation and leisure time",
      "Learn to say no to additional responsibilities when needed",
    ],
  },

  // Emergency symptoms
  "stroke symptoms": {
    advice:
      "CALL 911 IMMEDIATELY. Look for Face drooping, Arm weakness, Speech difficulties, Time to call emergency services.",
    precautions: [
      "Don't drive yourself or the person to the hospital",
      "Don't give food, drink, or medication",
      "Don't wait to see if symptoms improve",
      "Don't delay calling emergency services",
    ],
    selfCareTips: [
      "Note the time symptoms started",
      "Keep the person lying down with head slightly elevated",
      "Loosen tight clothing",
      "Stay with the person and keep them calm",
    ],
    preventionTips: [
      "Control high blood pressure",
      "Manage diabetes and high cholesterol",
      "Don't smoke and avoid secondhand smoke",
      "Maintain a healthy weight and exercise regularly",
    ],
  },

  "heart attack symptoms": {
    advice:
      "CALL 911 IMMEDIATELY. Symptoms include chest pain/pressure, pain in arms/back/neck/jaw, shortness of breath, cold sweat, nausea, lightheadedness.",
    precautions: [
      "Don't drive yourself to the hospital",
      "Don't delay calling for help",
      "Don't deny or minimize symptoms",
      "Don't exert yourself",
    ],
    selfCareTips: [
      "Chew an aspirin if not allergic (as directed by emergency services)",
      "Sit or lie down in a comfortable position",
      "Loosen tight clothing",
      "Try to stay calm and take slow, deep breaths",
    ],
    preventionTips: [
      "Maintain a heart-healthy diet low in saturated fats",
      "Exercise regularly as recommended by your doctor",
      "Don't smoke and avoid secondhand smoke",
      "Control blood pressure, cholesterol, and diabetes",
    ],
  },
}

// Symptom categories for better pattern matching
const symptomCategories = {
  respiratory: [
    "breathing",
    "breath",
    "cough",
    "wheeze",
    "sneezing",
    "sneeze",
    "phlegm",
    "mucus",
    "throat",
    "nasal",
    "nose",
    "sinus",
    "congestion",
    "congested",
  ],
  digestive: [
    "stomach",
    "nausea",
    "vomit",
    "diarrhea",
    "constipation",
    "bowel",
    "intestinal",
    "digestion",
    "appetite",
    "abdomen",
    "abdominal",
    "bloating",
    "bloated",
    "gas",
    "heartburn",
    "indigestion",
    "acid reflux",
  ],
  cardiovascular: [
    "heart",
    "chest",
    "pulse",
    "palpitation",
    "blood pressure",
    "hypertension",
    "circulation",
    "swelling",
    "swollen",
    "edema",
  ],
  neurological: [
    "head",
    "headache",
    "migraine",
    "dizzy",
    "dizziness",
    "balance",
    "vertigo",
    "faint",
    "fainting",
    "confusion",
    "memory",
    "concentration",
    "tingling",
    "numbness",
    "seizure",
    "tremor",
  ],
  musculoskeletal: [
    "muscle",
    "joint",
    "bone",
    "back",
    "neck",
    "shoulder",
    "arm",
    "leg",
    "knee",
    "ankle",
    "wrist",
    "sprain",
    "strain",
    "cramp",
    "stiffness",
    "pain",
  ],
  skin: [
    "rash",
    "itch",
    "hives",
    "dry skin",
    "sweat",
    "sweating",
    "blister",
    "sore",
    "wound",
    "bruise",
    "acne",
    "eczema",
    "psoriasis",
  ],
  general: [
    "fever",
    "temperature",
    "chills",
    "fatigue",
    "tired",
    "tiredness",
    "exhaustion",
    "weakness",
    "weight loss",
    "weight gain",
    "night sweat",
    "sleep",
    "insomnia",
  ],
  urinary: ["urination", "urinate", "pee", "bladder", "kidney", "urine"],
  reproductive: ["menstrual", "period", "menstruation", "vaginal", "penile", "testicular", "erectile", "libido"],
  mental: [
    "anxiety",
    "anxious",
    "worry",
    "depression",
    "depressed",
    "mood",
    "stress",
    "stressed",
    "mental",
    "panic",
    "emotion",
    "emotional",
  ],
  emergency: [
    "emergency",
    "severe",
    "extreme",
    "unbearable",
    "worst",
    "collapsed",
    "unconscious",
    "consciousness",
    "stroke",
    "heart attack",
    "poisoning",
    "overdose",
    "suicide",
    "dying",
  ],
}

// List of emergency conditions that always trigger emergency advice
const emergencyConditions = [
  "chest pain",
  "severe bleeding",
  "difficulty breathing",
  "shortness of breath",
  "stroke",
  "heart attack",
  "unconscious",
  "loss of consciousness",
  "seizure",
  "severe head injury",
  "poisoning",
  "overdose",
  "suicidal",
  "anaphylaxis",
  "allergic reaction",
  "drowning",
  "choking",
  "not breathing",
  "severe burn",
  "gunshot",
  "stab wound",
  "electric shock",
  "broken bone",
  "eye injury",
  "severe abdominal pain",
]

module.exports = {
  symptomDatabase,
  symptomCategories,
  emergencyConditions,
}

