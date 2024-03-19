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
        },
      },
    },
  });

export default i18n;
