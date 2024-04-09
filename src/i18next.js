import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { filterData } from "./utils/util";
import { LANGUAGE, LANGUAGES } from "./Constants/Const";

const options = {
  order: ["localStorage"],
  // lookupLocalStorage: LANGUAGE,
};

const valueFromLocalStorage = localStorage?.getItem(LANGUAGE);

const currentLanguage = filterData({
  originalData: LANGUAGES,
  dataToFind: valueFromLocalStorage,
  keyName: "value",
});

i18n
  ?.use(LanguageDetector)
  ?.use(initReactI18next)
  ?.init({
    detection: options,
    lng: currentLanguage?.length ? valueFromLocalStorage : "en", //<-- let it turned off inorder to detect the language using LanguageDetector
    fallback: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          profile_description: `Hello, pleased to meet you. I'm Utkarsh Sharma, 
                a 22-year-old Web developer with a keen interest in graphic design and video editing. 
                I've recently completed my Bachelor's in Information Technology from Dr. A. P. J. Abdul Kalam Technical University, Lucknow. 
                I find immense joy in expanding my knowledge through various channels, with a particular passion for reading.
                My diverse reading interests reflect my insatiable curiosity and drive for excellence as an engineer. I believe in leveraging books as a catalyst for continuous learning and innovation,
                 honing my skills to deliver exceptional results in any organizational setting.`,
          home: "Home",
          blogs: "Blogs",
          books_corner: "Books Corner",
          projects: "Projects",
          resume: "Resume",
          about: "About",
          name: "Name",
          email: "Email",
          address: "Address",
          description: "Description",
          submit: "Submit",
          enter: "Enter",
          email_helper_info: "We'll never share your email with anyone else",

          me: "Me",
          contact: "Contact",
          programming: "Programming",
          other: "Other",
          skills: "Skills",
          download: "Download",
          hi: "Hi",
          im: "I'm",
          utkarsh: "Utkarsh",
          sharma: "Sharma",
          mini_intro: "A software Engineer",
          footer_text: "Made with ❤️ by Utkarsh Sharma",
          placeholder_books_search: "Search book name",
          my: "My",
          go_back: "Go back",
          see_preview: "See preview",
          purchase_books: "Purchase books",
          category: "Category",
          html_css_javascript: "Html Css JavaScript",
          reactjs: "React Js",
          react_native: "React Native",

          sortingAlgoVis_name: "Sorting Algorithms Visualiser",
          sortingAlgoVis_desc:
            "Sorting Algorithms Visualiser help in visualising the internal working of the sorting algorithms",

          gymSite_name: "GYM Site",
          gymSite_desc:
            "It's a basic gym site sign-up page, which allows the user to register itself for the mike tyson gym membership",

          managaSellingStore_name: "MANGA Selling store",
          managaSellingStore_desc:
            "It's india's one the first online manga selling and renting store.",

          todo_name: "Todo List",
          todo_desc:
            "It's an web app which allows you to make a list of all list to-do task.",
          monsterNews_name: "MonsterNews",
          monsterNews_desc:
            "MonsterNews is a react app that shows you all the latest news from  all over the world catogory wise like if",
          cloudNoteBook_name: "Cloud NoteBook",
          cloudNoteBook_desc:
            "Cloud Notebook is an MERN Stack based application which provide many functionality such as sign-in, sign-out",
          quizApp_name: "Quiz app",
          quizApp_desc:
            "It's an quiz app which helps you to test your knowledge about technologies like html,JAVASCRIPT,",
          wheatherApp_name: "Wheather App",
          wheatherApp_desc:
            "Wheather App is a react app that shows you the current wheater condition like temperature",
          portfolio_name: "Portfolio",
          portfolio_desc:
            "It's an custom made portfolio site which allows you to show you skill, work, experience,",
          textManipulator_name: "Text-Manipulator",
          textManipulator_desc:
            "It is a react application which allow you to perform some basic but important text operations",
          holidaysEasy_name: "Holiday Easy",
          holidaysEasy_desc:
            "It's a MERN stack application which allows a user to book any hotel, resort, restaurent,",

          randomBgChange_name: "Random Background Colour",
          randomBgChange_desc:
            "App which allows you to change the color of your background to a random colour.",

          currencyConverter_name: "Currency Convertor",
          currencyConverter_desc:
            "Currency convertor allows you to convert one currency into other.",
          spanishNumbers_name: "Spanish Numbers",
          spanishNumbers_desc: "App to learn spanish numbers.",
          gameOfLuck_name: "Game of Luck",
          gameOfLuck_desc: "A game that checks the credibility of your luck.",
          summarizer_name: "Summarizer",
          summarizer_desc:
            "Developed a feature enabling users to generate summaries/extract major points from web pages or specific text content.",
          netflixStore_name: "Netflix Store",
          netflixStore_desc:
            "A basic app for storing data related to all your favorite netflix shows.",
          userProfileGenerator_name: "User Profile Generator",
          userProfileGenerator_desc:
            "An app for generating a new random profile, containing basic information like user-name, date of birth.",
          crossVScricle_name: "CROSS vs CIRCLE",
          crossVScricle_desc:
            "A simple mobile version of tremendously famous cross vs cricle game.",
          socialApp_name: "Social App",
          socialApp_desc:
            "It's a social media app where user can login/sign-up and then can upload profile pic, post, share its instagram link, and other users could also like the post and to which live count will be reflecting to the user on real time using firebase real-time database funtionality",
          see: "See",

          netflix_nextjs_name: "Netflix",
          netflix_nextjs_desc:
            "The Netflix app allows users to stream a wide range of movies, series, and documentaries anytime, anywhere. With personalized recommendations based on viewing history, it offers a seamless viewing experience across different devices. Subscriptions unlock access to a vast library of content.",
          mamba_bookings_name: "Mamba Bookings",
          mamba_bookings_desc:
            "It’s an online marketplace that connects people who want to rent out their property with people are looking for accommodation.",

          smartIndiaHackathon_name: "Smart India hackathon",
          smartIndiaHackathon_desc: `
            •Worked on the project named "Kalkirti" which is a cross-platform for both buyers and sellers of Indian handicrafts.
            • Suggested changes to standard operational and best practices, providing the leadership needed to develop and implement continuous improvements.
            • Researched, documented and selected alternatives for web architecture or technologies.`,
          netcamp_name: "NetCamp",
          netcamp_desc: `
          • Gained the knowledge of networking and android.
          • Worked on real world projects like mobile app reponsible for goverment college attendance and exam schedule issues.
          • Leanred about team collaboration by creating & submitting a major project as an final assessment which includes concepts of networking, built in android and must be scalable.`,
          unthinkableSolutions_name: "Unthinkable Solutions",
          unthinkableSolutions_desc: `
          • Successfully contributed to the development of Nova-dontics, Kirav AI, ICAI CMI&B, and Poshan Tracker projects, showcasing versatility in handling diverse applications.
          • Adept in utilizing UI frameworks like Ant-design, Material UI, etc for the seamless execution of project tasks, contributing to a 25% reduction in development time across projects.
          • Demonstrated skills in working on hybrid boilerplate projects (CMIB) involving React Native + React.js, showcasing adaptability and proficiency in diverse leading to a 80% improvement in cross-platform compatibility.
          • Implemented the page, view, containers, and components architecture approach, ensuring the development of modular and high-performance applications.
          • Efficiently utilized tools such as Trello, Locomo and other for project management and collaboration and design tools like Figma and Zeplin, enhancing team productivity.
          • Worked extensively with React maps, React context, React toolkit, React saga, React redux, React Query, Google maps, React drag-n-drop, and React charts, showcasing a comprehensive understanding of the React ecosystem.
          • Demonstrated proficiency in developing data-intensive applications, particularly in the CMIB Admin project, highlighting the ability to manage complex data processing tasks effectively.
          • Developed multiple admin panels, showcasing expertise in creating intuitive and user-friendly interfaces for administrative purposes.
          • Actively engaged in intensive code reviews, emphasizing a commitment to code quality, collaboration, and continuous improvement, leading to a 50% reduction in code defects and increase in overall code quality.
        `,

          sendMeAnEmail: "Send me an Email",
          details: "Details",
          linkedIn: "LinkedIn",
          personalAddress: "Rakesh Marg, Ghaziabad, Uttar Pradesh",
          utkarshsharma: "Utkarsh Sharma",
          blackHolesInfo: `Black holes are physical objects in space, just like
          everything else we see in the night sky.
          But they pack so much mass into so small a space
          that not even light can escape their gravity.`,
          experienceSection: "Experience Section",
          mern: "MERN",
          nextjs: "NextJs",
        },
      },
      hi: {
        translation: {
          profile_description: `नमस्ते, आपसे मिलने के लिए खुश है। I'm Utkarsh Sharma,
        22 वर्षीय ग्राफिक डिजाइन और वीडियो संपादन में गहरी रुचि के साथ वेब डेवलपर।
        मैंने हाल ही में डॉ ए पी जे अब्दुल कलाम तकनीकी विश्वविद्यालय, लखनऊ से सूचना प्रौद्योगिकी में स्नातक की उपाधि प्राप्त की है।
        मुझे विभिन्न चैनलों के माध्यम से अपने ज्ञान का विस्तार करने में बहुत खुशी मिलती है, जिसमें पढ़ने के लिए एक विशेष जुनून है।
        मेरी विविध पढ़ने की रुचि मेरे असहाय जिज्ञासा को दर्शाती है और एक इंजीनियर के रूप में उत्कृष्टता के लिए ड्राइव करती है। मैं लगातार सीखने और नवाचार के लिए एक उत्प्रेरक के रूप में पुस्तकों का लाभ उठाने में विश्वास करता हूं,
        किसी भी संगठनात्मक सेटिंग में असाधारण परिणाम देने के लिए मेरे कौशल का सम्मान करना.`,
          home: "घर",
          blogs: "ब्लॉग",
          books_corner: "पुस्तक केंद्र",
          projects: "परियोजनाओं",
          resume: "सार",
          about: "के बारे में",
          name: "नाम",
          email: "ईमेल",
          address: "पता",
          description: "विवरण",
          submit: "जमा करना",
          enter: "प्रवेश करना",
          email_helper_info:
            "हम आपका ईमेल कभी भी किसी अन्य के साथ साझा नहीं करेंगे",

          me: "मैं",
          contact: "संपर्क करें",
          programming: "प्रोग्रामिंग",
          other: "अन्य",
          skills: "कौशल",
          download: "डाउनलोड",
          hi: "नमस्ते",
          im: "मैं",
          utkarsh: "उत्कर्ष",
          sharma: "शर्मा",
          mini_intro: "एक सॉफ़्टवेयर इंजीनियर",
          footer_text: "द्वारा उत्कर्ष शर्मा के साथ दिल से बनाया गया",
          placeholder_books_search: "पुस्तक का नाम खोजें",
          my: "मेरा",
          go_back: "वापस जाएं",
          see_preview: "पूर्वावलोकन देखें",
          purchase_books: "पुस्तकें खरीदें",
          category: "श्रेणी",
          html_css_javascript: "एचटीएमएल सीएसएस जावास्क्रिप्ट",
          reactjs: "रिएक्ट जेएस",
          react_native: "रिएक्ट नेटिव",

          sortingAlgoVis_name: "क्रमबद्ध एल्गोरिदम विज़ुअलाइज़र",
          sortingAlgoVis_desc:
            "क्रमबद्ध एल्गोरिदम विज़ुअलाइज़र क्रमबद्ध एल्गोरिदमों के आंतरिक काम को दिखाने में मदद करता है",

          gymSite_name: "जिम साइट",
          gymSite_desc:
            "यह एक मूल जिम साइट साइन-अप पृष्ठ है, जो उपयोगकर्ता को माइक टाइसन जिम सदस्यता के लिए पंजीकरण करने की अनुमति देता है",

          managaSellingStore_name: "मैनगा बेचने की दुकान",
          managaSellingStore_desc:
            "यह भारत की पहली ऑनलाइन मैंगा बेचने और किराए की दुकानों में से एक है।",

          todo_name: "कार्य सूची",
          todo_desc:
            "यह एक वेब ऐप है जो आपको सभी सूची के लिए कार्य सूची बनाने की अनुमति देता है।",
          monsterNews_name: "मॉन्स्टर न्यूज़",
          monsterNews_desc:
            "मॉन्स्टर न्यूज़ एक रिएक्ट ऐप है जो आपको दुनिया भर से सभी नवीनतम समाचारों को श्रेणीबद्ध रूप में दिखाता है।",
          cloudNoteBook_name: "क्लाउड नोटबुक",
          cloudNoteBook_desc:
            "क्लाउड नोटबुक एक एमईआरएन स्टैक आधारित एप्लिकेशन है जो साइन-इन, साइन-आउट जैसी कई कार्यक्षमताएँ प्रदान करता है।",
          quizApp_name: "प्रश्नोत्तरी ऐप",
          quizApp_desc:
            "यह एक प्रश्नोत्तरी ऐप है जो आपको html, जावास्क्रिप्ट जैसी प्रौद्योगिकियों के बारे में आपका ज्ञान परीक्षण करने में मदद करता है।",
          wheatherApp_name: "मौसम ऐप",
          wheatherApp_desc:
            "मौसम ऐप एक रिएक्ट ऐप है जो आपको वर्तमान मौसम की स्थिति जैसे तापमान दिखाता है।",
          portfolio_name: "पोर्टफोलियो",
          portfolio_desc:
            "यह एक कस्टम मेड पोर्टफोलियो साइट है जो आपको अपने कौशल, काम, अनुभव दिखाने की अनुमति देता है।",
          textManipulator_name: "टेक्स्ट-मैनिपुलेटर",
          textManipulator_desc:
            "यह एक रिएक्ट एप्लिकेशन है जो आपको कुछ मौलिक लेकिन महत्वपूर्ण टेक्स्ट ऑपरेशन करने की अनुमति देता है।",
          holidaysEasy_name: "हॉलिडे आसान",
          holidaysEasy_desc:
            "यह एक एमईआरएन स्टैक एप्लिकेशन है जो उपयोगकर्ता को किसी भी होटल, रिसॉर्ट, रेस्तरां, की बुकिंग की अनुमति देता है।",

          randomBgChange_name: "यादृच्छिक पृष्ठभूमि रंग",
          randomBgChange_desc:
            "इस एप्लिकेशन से आप अपने पृष्ठभूमि का रंग किसी यादृच्छिक रंग में बदल सकते हैं।",

          currencyConverter_name: "मुद्रा कनवर्टर",
          currencyConverter_desc:
            "मुद्रा कनवर्टर आपको एक मुद्रा को अन्य मुद्रा में परिवर्तित करने की अनुमति देता है।",
          spanishNumbers_name: "स्पेनिश नंबर",
          spanishNumbers_desc: "स्पेनिश नंबर्स सीखने के लिए ऐप।",
          gameOfLuck_name: "भाग्य का खेल",
          gameOfLuck_desc:
            "एक खेल जो आपके भाग्य की विश्वसनीयता की जांच करता है।",
          netflixStore_name: "नेटफ्लिक्स स्टोर",
          netflixStore_desc:
            "आपके सभी पसंदीदा नेटफ्लिक्स शोज के संबंधित डेटा को संग्रहित करने के लिए एक मूल ऐप।",
          userProfileGenerator_name: "उपयोगकर्ता प्रोफ़ाइल जेनरेटर",
          userProfileGenerator_desc:
            "एक नए यादृच्छिक प्रोफ़ाइल जेनरेट करने के लिए एक ऐप, जिसमें उपयोगकर्ता-नाम, जन्मतिथि जैसी बुनियादी जानकारी होती है।",
          crossVScricle_name: "क्रॉस बनाम वृत्त",
          crossVScricle_desc:
            "एक साधारण मोबाइल संस्करण बहुत प्रसिद्ध क्रॉस बनाम सायर्कल खेल।",
          socialApp_name: "सोशल ऐप",
          socialApp_desc:
            "यह एक सोशल मीडिया ऐप है जहां उपयोगकर्ता लॉगिन/साइन-अप कर सकते हैं और फिर प्रोफ़ाइल चित्र, पोस्ट, अपना इंस्टाग्राम लिंक साझा कर सकते हैं, और दूसरे उपयोगकर्ताओं को भी पोस्ट पसंद आ सकती है और जिस पर जितने लोगों की संख्या होगी, उसे उपयोगकर्ता को तत्काल समय पर आईवार की अंदर दिखाया जाएगा जो फ़ायरबेस के वास्तविक समय पेती डेटाबेस की क्षमता का उपयोग करता है।",
          see: "देखना",
          netflix_nextjs_name: "Netflix",
          netflix_nextjs_desc:
            "Netflix ऐप प्रयोक्ताओं को किसी भी समय, कहीं भी विभिन्न डिवाइसों पर विभिन्न प्रकार की फिल्में, सीरीज़ और डॉक्यूमेंट्री स्ट्रीम करने की सुविधा प्रदान करता है। देखने के इतिहास पर आधारित व्यक्तिगत सिफारिशों के साथ, यह विभिन्न उपकरणों पर एक संगत दृश्य अनुभव प्रदान करता है। सदस्यता एक विशाल सामग्री पुस्तकालय का पहुंच अनलॉक करती है।",
          mamba_bookings_name: "माम्बा बुकिंग्स",
          mamba_bookings_desc:
            "यह एक ऑनलाइन बाजार है जो उन लोगों को जो अपनी संपत्ति को किराये पर देना चाहते हैं उन्हें उन लोगों से जो आवास की तलाश में हैं जोड़ता है।",
          smartIndiaHackathon_name: "स्मार्ट इंडिया हैकाथॉन",
          smartIndiaHackathon_desc: `
            • 'कल्कीर्ति' नामक परियोजना पर काम किया जो भारतीय हस्तशिल्पों के खरीदारों और विक्रेताओं के लिए एक संभावित द्वार है। \n • मानक संचालन और सर्वोत्तम प्रथाओं में परिवर्तनों का सुझाव दिया, जो निरंतर सुधारों के विकास और कार्यान्वयन के लिए आवश्यक नेतृत्व प्रदान करता है।
            • वेब आर्किटेक्चर या टेक्नोलॉजी के लिए विकल्पों की अन्वेषण, दस्तावेजीकरण और चयन किया।`,
          netcamp_name: "नेटकैंप",
          netcamp_desc: `
            • नेटवर्किंग और एंड्रॉयड के बारे में ज्ञान प्राप्त किया। 
            • सरकारी कॉलेज की उपस्थिति और परीक्षा के अनुसूची समस्याओं के लिए मोबाइल एप्लिकेशन के लिए वास्तविक विश्व परियोजनाओं पर काम किया। 
            • एक प्रमुख परिक्षण के रूप में टीम में सहयोग द्वारा एक प्रमुख परियोजना बनाकर और सबमिट करके टीम सहयोग के बारे में जाना। जो नेटवर्किंग, एंड्रॉयड में निर्मित होता है और स्कैलेबल होना चाहिए।`,
          unthinkableSolutions_name: "अविचारणीय समाधान",
          unthinkableSolutions_desc: `
          • नोवा-डोंटिक्स, किराव एआई, आईसीएआई सीएमआई एंड बी, और पोषण ट्रैकर परियोजनाओं के विकास में सफलतापूर्वक योगदान दिया, जिसमें विविध अनुप्रयोगों का संचालन करने की विस्तृता प्रदर्शित की। 
          • यूआई फ्रेमवर्क जैसे एंट-डिज़ाइन, मैटेरियल यूआई आदि का उपयोग करने में प्रवीण, परियोजना कार्यों को संचालन करने के लिए योग्यता दिखाई, जिससे समय की 25% की कमी हुई। 
          • रियल्टी नेटिव + रीएक्ट.जेएस में हाइब्रिड बॉयलरप्लेट परियोजनाओं (सीएमआईबी) पर काम करने की कौशल्य दिखाई, जिससे विभिन्न परियोजनाओं में संगतता में 80% की सुधार हुई। 
          • पृष्ठ, दृश्य, कंटेनर और कॉम्पोनेंट्स की आर्किटेक्चर दृष्टिकोण लागू किया, जो एकीकृत और उच्च प्रदर्शन एप्लिकेशनों के विकास को सुनिश्चित करता है। 
          • प्रोजेक्ट प्रबंधन और सहयोग के लिए ट्रेलो, लोकोमो और अन्य उपकरणों का प्रयोग किया, और फिगमा और जेप्लिन जैसे डिज़ाइन उपकरणों का प्रयोग किया, जो टीम की उत्पादकता को बढ़ावा देता है। 
          • रियाक्ट मानचित्र, रियाक्ट संदर्भ, रियाक्ट टूलकिट, रियाक्ट सागा, रियाक्ट रीडक्स, रियाक्ट क्वेरी, गूगल मानचित्र, रियाक्ट ड्रैग-एन-ड्रॉप, और रियाक्ट चार्ट्स के साथ बेहद व्यापक ज्ञान दिखाया, जो रियाक्ट पारिस्थितिकी की समग्र समझ का प्रस्ताव करता है। 
          • डेटा-भरी एप्लिकेशनों के विकास में प्रवीणता का प्रदर्शन किया, विशेष रूप से सीएमआईबी एडमिन परियोजना में, जिससे जटिल डेटा प्रसंस्करण कार्यों को प्रभावी ढंग से प्रबंधित करने की क्षमता को हाइलाइट किया गया। 
          • बहुत से प्रशासनिक उद्देश्यों के लिए उपयोगकर्ता मित्रपूर्ण और सहज इंटरफेस बनाने की विशेषज्ञता दिखाई दी। 
          • गहरी कोड समीक्षा में सक्रिय रूप से शामिल होकर, कोड गुणवत्ता, सहयोग और नियमित सुधार के प्रति समर्पण को जोर दिया, जिससे कोड दोषों में 50% की कमी हुई और कुल कोड गुणवत्ता में वृद्धि हुई।`,
          sendMeAnEmail: "मुझे ईमेल भेजें",
          details: "विवरण",
          linkedIn: "लिंक्डइन",
          personalAddress: "राकेश मार्ग, गाज़ियाबाद, उत्तर प्रदेश",
          utkarshsharma: "उत्कर्श शर्मा",
          blackHolesInfo:
            "काले गड्ढे आकाश में भौतिक वस्तुएँ हैं, जिस तरह रात के आसमान में हम जो भी देखते हैं। लेकिन वे इतनी भारी भोजन को इतनी छोटी जगह में पैक करते हैं कि उनकी गुरुत्वाकर्षण की बाधा को नहीं भी लाइट को भी नहीं भाग सकता।",
          experienceSection: "अनुभव खंड",
          mern: "MERN",
          nextjs: "NextJs",
          summarizer_name: "सारांशकर्ता",
          summarizer_desc:
            "विकसित किया एक सुविधा जिससे उपयोगकर्ता वेब पेजों या विशिष्ट पाठ सामग्री से सारांश/मुख्य बिंदुओं को उत्पन्न कर सकते हैं।",
        },
      },
      man: {
        translation: {
          profile_description: `你好，很高兴认识你。我是乌特卡尔什·夏尔马，
                一名22岁的Web开发人员，对平面设计和视频编辑有浓厚的兴趣。
                我最近从阿卜杜勒·卡拉姆技术大学印度工程学院获得了信息技术学士学位。
                我通过各种渠道不断扩展自己的知识，特别热爱阅读。
                我广泛的阅读兴趣反映了我作为一名工程师对卓越的无止境的好奇心和动力。
                我相信利用书籍作为持续学习和创新的催化剂，
                磨练自己的技能，为任何组织设置提供卓越的成果。`,
          home: "主页",
          blogs: "博客",
          books_corner: "图书角",
          projects: "项目",
          resume: "简历",
          about: "关于",
          name: "名称",
          email: "电子邮件",
          address: "地址",
          description: "描述",
          submit: "提交",
          enter: "输入",
          email_helper_info: "我们绝不会与任何人分享您的电子邮件",

          me: "我",
          contact: "联系",
          programming: "编程",
          other: "其他",
          skills: "技能",
          download: "下载",
          hi: "你好",
          im: "我是",
          utkarsh: "乌特卡尔什",
          sharma: "夏尔马",
          mini_intro: "软件工程师",
          footer_text: "由乌特卡尔什·夏尔马用❤️制作",
          placeholder_books_search: "搜索书名",
          my: "我的",
          go_back: "返回",
          see_preview: "查看预览",
          purchase_books: "购买书籍",
          category: "类别",
          html_css_javascript: "Html Css JavaScript",
          reactjs: "React Js",
          react_native: "React Native",

          sortingAlgoVis_name: "排序算法可视化器",
          sortingAlgoVis_desc: "排序算法可视化器帮助您可视化排序算法的内部工作",

          gymSite_name: "健身房网站",
          gymSite_desc:
            "这是一个基本的健身房网站注册页面，允许用户注册成为迈克·泰森健身房的会员",

          managaSellingStore_name: "漫画销售店",
          managaSellingStore_desc: "这是印度首家在线漫画销售和租赁商店之一。",

          todo_name: "待办事项列表",
          todo_desc: "这是一个Web应用程序，允许您列出所有待办事项任务。",
          monsterNews_name: "怪物新闻",
          monsterNews_desc:
            "MonsterNews是一个React应用程序，按类别显示来自世界各地的所有最新新闻，如若。",
          cloudNoteBook_name: "云笔记本",
          cloudNoteBook_desc:
            "Cloud Notebook是一个基于MERN堆栈的应用程序，提供了许多功能，如登录、注销",
          quizApp_name: "测验应用程序",
          quizApp_desc:
            "这是一个测验应用程序，可帮助您测试自己对HTML、JAVASCRIPT等技术的了解。",
          wheatherApp_name: "天气应用程序",
          wheatherApp_desc:
            "天气应用程序是一个React应用程序，显示当前的天气状况，如温度",
          portfolio_name: "作品集",
          portfolio_desc:
            "这是一个定制的作品集网站，允许您展示您的技能、工作和经验。",
          textManipulator_name: "文本操作器",
          textManipulator_desc:
            "这是一个React应用程序，允许您执行一些基本但重要的文本操作",
          holidaysEasy_name: "轻松假期",
          holidaysEasy_desc:
            "这是一个MERN堆栈应用程序，允许用户预订任何酒店、度假村、餐厅、",

          randomBgChange_name: "随机背景颜色",
          randomBgChange_desc:
            "这个应用程序允许您将您的背景颜色更改为随机颜色。",

          currencyConverter_name: "货币转换器",
          currencyConverter_desc:
            "货币转换器允许您将一种货币转换为另一种货币。",
          spanishNumbers_name: "西班牙数字",
          spanishNumbers_desc: "学习西班牙数字的应用程序。",
          gameOfLuck_name: "幸运游戏",
          gameOfLuck_desc: "一款检验您幸运的游戏。",
          netflixStore_name: "Netflix商店",
          netflixStore_desc:
            "用于存储所有您喜爱的Netflix节目相关数据的基本应用程序。",
          userProfileGenerator_name: "用户资料生成器",
          userProfileGenerator_desc:
            "用于生成一个新的随机个人资料的应用程序，包含用户名称、出生日期等基本信息。",
          crossVScricle_name: "十字架vs圆圈",
          crossVScricle_desc: "一个极其著名的十字架与圆圈游戏的简单移动版本。",
          socialApp_name: "社交应用",
          socialApp_desc:
            "这是一个社交媒体应用，用户可以登录/注册，然后可以上传个人资料图片、帖子、分享其Instagram链接，其他用户也可以喜欢帖子，用户实时使用Firebase实时数据库功能反映到用户的喜欢数量。",
          see: "看",
          netflix_nextjs_name: "Netflix",
          netflix_nextjs_desc:
            "Netflix 应用允许用户随时随地在不同设备上流式传输各种电影、系列和纪录片。根据观看历史提供个性化推荐，为用户提供无缝的观影体验。订阅解锁了丰富的内容库。",
          mamba_bookings_name: "猛獁预订",
          mamba_bookings_desc:
            "这是一个在线市场，连接想要出租房产的人和寻找住宿的人。",
          smartIndiaHackathon_name: "智能印度黑客马拉松",
          smartIndiaHackathon_desc: `
            • 参与了名为“Kalkirti”的项目，这是一个连接印度手工艺品买家和卖家的跨平台。
            • 提出了对标准运营和最佳实践的变更建议，提供了发展和实施持续改进所需的领导力。
            • 研究、记录和选择了 Web 架构或技术的替代方案。`,
          netcamp_name: "网络营地",
          netcamp_desc: `
            • 获得了网络和安卓方面的知识。
            • 参与了真实项目，比如负责政府学院出勤和考试时间表问题的移动应用。
            • 通过创建和提交一个重要项目作为最终评估学习了团队协作，其中包括网络概念、在安卓上构建以及必须具有可伸缩性。`,
          unthinkableSolutions_name: "不可思议解决方案",
          unthinkableSolutions_desc: `
            • 成功参与了 Nova-dontics、Kirav AI、ICAI CMI&B 和 Poshan Tracker 项目的开发，展示了处理不同应用程序的多样性的能力。
            • 熟练使用 UI 框架，如 Ant-design、Material UI 等，对项目任务的无缝执行做出了贡献，为项目时间节省了 25%。
            • 展示了在涉及 React Native + React.js 的混合模板项目（CMIB）上工作的技能，显示出对不同领域的适应能力和熟练程度，从而实现了跨平台兼容性的 80% 改善。
            • 实施了页面、视图、容器和组件架构方法，确保了模块化和高性能应用程序的开发。
            • 高效地利用了 Trello、Locomo 等工具进行项目管理和协作，以及 Figma 和 Zeplin 等设计工具，提高了团队的生产力。
            • 广泛使用了 React 地图、React 上下文、React 工具包、React saga、React redux、React Query、Google 地图、React 拖放以及 React 图表，展示了对 React 生态系统的全面理解。• 展示了在开发数据密集型应用程序方面的熟练程度，特别是在 CMIB 管理项目中，突出显示了有效管理复杂数据处理任务的能力。
            • 开发了多个管理面板，展示了为管理目的创建直观和用户友好界面的专业技能。• 积极参与了深度代码审查，强调了对代码质量、协作和持续改进的承诺，从而导致代码缺陷减少 50%，整体代码质量提高。`,
          sendMeAnEmail: "发送邮件给我",
          details: "详细信息",
          linkedIn: "领英",
          personalAddress: "Rakesh街，加济阿巴德，北方邦",
          utkarshsharma: "Utkarsh Sharma",
          blackHolesInfo:
            "黑洞是空间中的物理对象，就像我们在夜空中看到的一切其他东西一样。 但它们将如此大量的质量压缩到如此小的空间中，以至于甚至光线也无法逃脱它们的引力。",
          experienceSection: "经验部分",
          mern: "MERN",
          nextjs: "NextJs",
          summarizer_name: "摘要生成器",
          summarizer_desc:
            "开发了一个功能，使用户能够从网页或特定文本内容中生成摘要/提取主要要点。",
        },
      },
      sp: {
        translation: {
          profile_description: `Hola, encantado de conocerte. Soy Utkarsh Sharma,
                un desarrollador web de 22 años con un gran interés en diseño gráfico y edición de video.
                Recientemente completé mi licenciatura en Tecnología de la Información en la Universidad Técnica Dr. A. P. J. Abdul Kalam, Lucknow.
                Encuentro una inmensa alegría en expandir mi conocimiento a través de varios canales, con una pasión particular por la lectura.
                Mis diversos intereses de lectura reflejan mi insaciable curiosidad y mi impulso por la excelencia como ingeniero.
                Creo en aprovechar los libros como un catalizador para el aprendizaje continuo y la innovación,
                perfeccionando mis habilidades para ofrecer resultados excepcionales en cualquier entorno organizativo.`,
          home: "Inicio",
          blogs: "Blogs",
          books_corner: "Rincón de libros",
          projects: "Proyectos",
          resume: "Currículum",
          about: "Acerca de",
          name: "Nombre",
          email: "Correo electrónico",
          address: "Dirección",
          description: "Descripción",
          submit: "Enviar",
          enter: "Entrar",
          email_helper_info:
            "Nunca compartiremos tu correo electrónico con nadie más",

          me: "Yo",
          contact: "Contacto",
          programming: "Programación",
          other: "Otro",
          skills: "Habilidades",
          download: "Descargar",
          hi: "Hola",
          im: "Soy",
          utkarsh: "Utkarsh",
          sharma: "Sharma",
          mini_intro: "Ingeniero de software",
          footer_text: "Hecho con ❤️ por Utkarsh Sharma",
          placeholder_books_search: "Buscar nombre del libro",
          my: "Mi",
          go_back: "Volver",
          see_preview: "Ver previsualización",
          purchase_books: "Comprar libros",
          category: "Categoría",
          html_css_javascript: "Html Css JavaScript",
          reactjs: "React Js",
          react_native: "React Native",

          sortingAlgoVis_name: "Visualizador de algoritmos de ordenación",
          sortingAlgoVis_desc:
            "El visualizador de algoritmos de ordenación ayuda a visualizar el funcionamiento interno de los algoritmos de ordenación",

          gymSite_name: "Sitio de gimnasio",
          gymSite_desc:
            "Es una página básica de registro de sitios de gimnasia, que permite al usuario registrarse para la membresía del gimnasio de Mike Tyson",

          managaSellingStore_name: "Tienda de venta de MANGA",
          managaSellingStore_desc:
            "Es una de las primeras tiendas de venta y alquiler de manga en línea de la India.",

          todo_name: "Lista de tareas pendientes",
          todo_desc:
            "Es una aplicación web que te permite hacer una lista de todas las tareas pendientes.",
          monsterNews_name: "MonsterNews",
          monsterNews_desc:
            "MonsterNews es una aplicación de React que te muestra todas las últimas noticias de todo el mundo por categorías como si",
          cloudNoteBook_name: "Cuaderno en la nube",
          cloudNoteBook_desc:
            "El Cuaderno en la nube es una aplicación basada en la pila MERN que proporciona muchas funcionalidades como inicio de sesión, cierre de sesión",
          quizApp_name: "Aplicación de prueba",
          quizApp_desc:
            "Es una aplicación de prueba que te ayuda a evaluar tu conocimiento sobre tecnologías como HTML, JAVASCRIPT,",
          wheatherApp_name: "Aplicación del tiempo",
          wheatherApp_desc:
            "La aplicación del tiempo es una aplicación de React que te muestra las condiciones climáticas actuales como la temperatura",
          portfolio_name: "Portafolio",
          portfolio_desc:
            "Es un sitio de portafolio personalizado que te permite mostrar tus habilidades, trabajo, experiencia,",
          textManipulator_name: "Manipulador de texto",
          textManipulator_desc:
            "Es una aplicación de React que te permite realizar algunas operaciones básicas pero importantes con texto",
          holidaysEasy_name: "Vacaciones fáciles",
          holidaysEasy_desc:
            "Es una aplicación de pila MERN que permite a un usuario reservar cualquier hotel, resort, restaurante,",

          randomBgChange_name: "Cambio aleatorio de fondo",
          randomBgChange_desc:
            "Aplicación que te permite cambiar el color de tu fondo a un color aleatorio.",

          currencyConverter_name: "Convertidor de moneda",
          currencyConverter_desc:
            "El convertidor de moneda te permite convertir una moneda en otra.",
          spanishNumbers_name: "Números en español",
          spanishNumbers_desc: "Aplicación para aprender números en español.",
          gameOfLuck_name: "Juego de la suerte",
          gameOfLuck_desc:
            "Un juego que comprueba la credibilidad de tu suerte.",
          netflixStore_name: "Tienda de Netflix",
          netflixStore_desc:
            "Una aplicación básica para almacenar datos relacionados con todos tus programas de Netflix favoritos.",
          userProfileGenerator_name: "Generador de perfiles de usuario",
          userProfileGenerator_desc:
            "Una aplicación para generar un nuevo perfil aleatorio, que contiene información básica como nombre de usuario, fecha de nacimiento.",
          crossVScricle_name: "CRUZ vs CÍRCULO",
          crossVScricle_desc:
            "Una versión móvil simple del tremendamente famoso juego de cruz vs círculo.",
          socialApp_name: "Aplicación social",
          socialApp_desc:
            "Es una aplicación de redes sociales donde los usuarios pueden iniciar sesión/registrarse y luego pueden cargar una foto de perfil, publicar, compartir su enlace de Instagram, y otros usuarios también pueden dar me gusta a la publicación y a cuál reflejará el recuento en vivo al usuario en tiempo real utilizando la funcionalidad de base de datos en tiempo real de Firebase.",
          see: "Ver",

          netflix_nextjs_name: "Netflix",
          netflix_nextjs_desc:
            "La aplicación de Netflix permite a los usuarios ver una amplia gama de películas, series y documentales en cualquier momento y lugar. Con recomendaciones personalizadas basadas en el historial de visualización, ofrece una experiencia de visualización perfecta en diferentes dispositivos. Las suscripciones desbloquean acceso a una vasta biblioteca de contenido.",
          mamba_bookings_name: "Reservas Mamba",
          mamba_bookings_desc:
            "Es un mercado en línea que conecta a personas que desean alquilar su propiedad con personas que buscan alojamiento.",
          smartIndiaHackathon_name: "Smart India Hackathon",
          smartIndiaHackathon_desc: `• Trabajé en el proyecto llamado 'Kalkirti', que es una plataforma cruzada para compradores y vendedores de artesanías indias. 
            • Sugirió cambios a las prácticas operativas estándar y las mejores prácticas, brindando el liderazgo necesario para desarrollar e implementar mejoras continuas. 
            • Investigó, documentó y seleccionó alternativas para la arquitectura o tecnologías web.`,
          netcamp_name: "NetCamp",
          netcamp_desc: `• Adquirí conocimientos sobre redes y Android. 
            • Trabajé en proyectos del mundo real como una aplicación móvil responsable de problemas de asistencia y horario de exámenes en colegios gubernamentales. 
            • Aprendí sobre la colaboración en equipo creando y presentando un proyecto importante como evaluación final, que incluye conceptos de redes, construido en Android y debe ser escalable.`,
          unthinkableSolutions_name: "Soluciones Inimaginables",
          unthinkableSolutions_desc: `• Contribuí con éxito al desarrollo de los proyectos Nova-dontics, Kirav AI, ICAI CMI&B y Poshan Tracker, demostrando versatilidad en el manejo de aplicaciones diversas. 
            • Experto en utilizar frameworks de UI como Ant-design, Material UI, etc. para la ejecución perfecta de tareas de proyectos, contribuyendo a una reducción del 25% en el tiempo de desarrollo en todos los proyectos. 
            • Demostré habilidades para trabajar en proyectos de plantillas híbridas (CMIB) que involucran React Native + React.js, mostrando adaptabilidad y competencia en diversos aspectos, lo que llevó a una mejora del 80% en la compatibilidad entre plataformas. 
            • Implementé el enfoque de arquitectura de página, vista, contenedores y componentes, asegurando el desarrollo de aplicaciones modulares y de alto rendimiento. 
            • Utilicé eficientemente herramientas como Trello, Locomo y otras para la gestión de proyectos y la colaboración, y herramientas de diseño como Figma y Zeplin, mejorando la productividad del equipo. 
            • Trabajé extensamente con mapas React, contexto React, React toolkit, React saga, React redux, React Query, mapas de Google, arrastrar y soltar de React, y gráficos de React, demostrando una comprensión integral del ecosistema de React. 
            • Demostré competencia en el desarrollo de aplicaciones intensivas en datos, particularmente en el proyecto CMIB Admin, destacando la capacidad de manejar tareas de procesamiento de datos complejas de manera efectiva. 
            • Desarrollé múltiples paneles de administración, mostrando experiencia en la creación de interfaces intuitivas y amigables para los usuarios con fines administrativos. 
            • Participé activamente en revisiones de código intensivas, enfatizando un compromiso con la calidad del código, la colaboración y la mejora continua, lo que llevó a una reducción del 50% en defectos de código y un aumento en la calidad general del código.`,
          sendMeAnEmail: "Envíame un correo electrónico",
          details: "Detalles",
          linkedIn: "LinkedIn",
          personalAddress: "Calle Rakesh, Ghaziabad, Uttar Pradesh",
          utkarshsharma: "Utkarsh Sharma",
          blackHolesInfo:
            "Los agujeros negros son objetos físicos en el espacio, al igual que todo lo demás que vemos en el cielo nocturno. Pero tienen tanta masa concentrada en un espacio tan pequeño que ni siquiera la luz puede escapar de su gravedad.",
          experienceSection: "Sección de Experiencia",
          mern: "MERN",
          nextjs: "NextJs",
          summarizer_name: "Resumen",
          summarizer_desc:
            "Desarrolló una característica que permite a los usuarios generar resúmenes/extracciones de puntos principales de páginas web o contenido de texto específico.",
        },
      },
    },
  });

export default i18n;
